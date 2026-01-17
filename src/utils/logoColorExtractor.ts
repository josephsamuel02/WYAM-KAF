export interface ColorPalette {
  primary: string;
  accent: string;
  secondary?: string;
  green?: string;
  yellow?: string;
}

/**
 * Extracts dominant colors from an image using Canvas API
 */
export const extractColorsFromImage = async (
  imagePath: string
): Promise<ColorPalette> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    // Remove crossOrigin for local images to avoid CORS issues
    // img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }
        
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        
        // Sample pixels (every 10th pixel for performance)
        const colorMap = new Map<string, number>();
        const sampleRate = 10;
        
        for (let i = 0; i < pixels.length; i += sampleRate * 4) {
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          const a = pixels[i + 3];
          
          // Skip transparent pixels
          if (a < 128) continue;
          
          // Skip very light colors (likely background)
          const brightness = (r + g + b) / 3;
          if (brightness > 240) continue;
          
          const colorKey = `${Math.floor(r / 10) * 10},${Math.floor(g / 10) * 10},${Math.floor(b / 10) * 10}`;
          colorMap.set(colorKey, (colorMap.get(colorKey) || 0) + 1);
        }
        
        // Get top colors
        const sortedColors = Array.from(colorMap.entries())
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5);
        
        if (sortedColors.length === 0) {
          // Fallback colors if extraction fails
          resolve({
            primary: '#3b82f6',
            accent: '#ef4444',
            green: '#22c55e',
            yellow: '#facc15', // Softer yellow
          });
          return;
        }
        
        // Extract RGB values from top colors
        const colors = sortedColors.map(([colorKey]) => {
          const [r, g, b] = colorKey.split(',').map(Number);
          return { r, g, b };
        });
        
        // Find primary color (usually the most vibrant)
        const primaryColor = colors.reduce((prev, curr) => {
          const prevVibrancy = Math.max(prev.r, prev.g, prev.b) - Math.min(prev.r, prev.g, prev.b);
          const currVibrancy = Math.max(curr.r, curr.g, curr.b) - Math.min(curr.r, curr.g, curr.b);
          return currVibrancy > prevVibrancy ? curr : prev;
        });
        
        // Find accent color (usually the second most vibrant or complementary)
        const accentColor = colors.find(
          (c) => c !== primaryColor && 
          (Math.abs(c.r - primaryColor.r) > 50 || 
           Math.abs(c.g - primaryColor.g) > 50 || 
           Math.abs(c.b - primaryColor.b) > 50)
        ) || colors[1] || colors[0];
        
        // Find green color (high green component, lower red)
        const greenColor = colors.find(
          (c) => c.g > c.r + 30 && c.g > c.b + 20 && c.g > 100
        ) || colors.find((c) => c.g > Math.max(c.r, c.b) + 20);
        
        // Find yellow color (prefer softer, less saturated yellows)
        // Look for yellows with higher blue component to reduce sharpness
        const yellowColor = colors.find(
          (c) => c.r > 140 && c.g > 140 && c.b > 80 && c.b < c.r - 20 && c.b < c.g - 20
        ) || colors.find(
          (c) => c.r > 120 && c.g > 120 && c.b > 60 && c.b < Math.min(c.r, c.g) - 15
        ) || colors.find((c) => c.r > 120 && c.g > 120 && c.b < Math.min(c.r, c.g) - 20);
        
        const rgbToHex = (r: number, g: number, b: number) => {
          return '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
          }).join('');
        };
        
        const result: ColorPalette = {
          primary: rgbToHex(primaryColor.r, primaryColor.g, primaryColor.b),
          accent: rgbToHex(accentColor.r, accentColor.g, accentColor.b),
        };
        
        // Add green and yellow if found
        if (greenColor) {
          result.green = rgbToHex(greenColor.r, greenColor.g, greenColor.b);
        }
        if (yellowColor) {
          // Soften yellow by increasing blue component slightly to reduce sharpness
          const softenedYellow = {
            r: yellowColor.r,
            g: yellowColor.g,
            b: Math.min(255, yellowColor.b + 30) // Add more blue to soften
          };
          result.yellow = rgbToHex(softenedYellow.r, softenedYellow.g, softenedYellow.b);
        }
        
        // Fallback to common green/yellow if not found
        if (!result.green) {
          result.green = '#22c55e'; // Default green
        }
        if (!result.yellow) {
          result.yellow = '#facc15'; // Softer default yellow (#eab308 -> #facc15)
        }
        
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };
    
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    
    img.src = imagePath;
  });
};

/**
 * Generates a full color palette from a base color
 */
export const generateColorPalette = (baseColor: string): string[] => {
  // Parse hex color
  const hex = baseColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Generate shades (50-950) - 11 shades total
  const shades: string[] = [];
  
  for (let i = 0; i <= 10; i++) {
    let newR: number, newG: number, newB: number;
    
    if (i < 5) {
      // Lighter shades (50-400)
      const lightFactor = (5 - i) / 5;
      newR = Math.round(r + (255 - r) * lightFactor * 0.9);
      newG = Math.round(g + (255 - g) * lightFactor * 0.9);
      newB = Math.round(b + (255 - b) * lightFactor * 0.9);
    } else if (i === 5) {
      // Base color (500)
      newR = r;
      newG = g;
      newB = b;
    } else {
      // Darker shades (600-950)
      const darkFactor = (i - 5) / 5;
      newR = Math.round(r * (1 - darkFactor * 0.7));
      newG = Math.round(g * (1 - darkFactor * 0.7));
      newB = Math.round(b * (1 - darkFactor * 0.7));
    }
    
    const hexColor = '#' + [newR, newG, newB]
      .map(x => {
        const hex = Math.max(0, Math.min(255, x)).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');
    
    shades.push(hexColor);
  }
  
  return shades;
};

/**
 * Updates CSS theme variables with extracted colors
 */
export const updateThemeColors = (palette: ColorPalette) => {
  const root = document.documentElement;
  
  // Generate color scales
  const primaryShades = generateColorPalette(palette.primary);
  const accentShades = generateColorPalette(palette.accent);
  
  // Update primary colors (11 shades: 50-950)
  const shadeValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  primaryShades.forEach((color, index) => {
    const shade = shadeValues[index];
    root.style.setProperty(`--color-primary-${shade}`, color);
  });
  
  // Update accent colors (11 shades: 50-950)
  accentShades.forEach((color, index) => {
    const shade = shadeValues[index];
    root.style.setProperty(`--color-accent-${shade}`, color);
  });
  
  // Store in localStorage for persistence
  localStorage.setItem('logoColors', JSON.stringify(palette));
  
  // Update mesh gradient colors dynamically
  updateMeshGradient(palette);
  
  // Update gradient colors for text (green to yellow)
  if (palette.green && palette.yellow) {
    const root = document.documentElement;
    root.style.setProperty('--gradient-green', palette.green);
    root.style.setProperty('--gradient-yellow', palette.yellow);
  }
};

/**
 * Converts hex color to RGB values
 */
const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

/**
 * Updates the mesh gradient background with extracted colors
 */
const updateMeshGradient = (palette: ColorPalette) => {
  const root = document.documentElement;
  const accentRgb = hexToRgb(palette.accent);
  const primaryRgb = hexToRgb(palette.primary);
  
  // Update CSS custom properties for mesh gradient
  root.style.setProperty('--mesh-accent-r', accentRgb.r.toString());
  root.style.setProperty('--mesh-accent-g', accentRgb.g.toString());
  root.style.setProperty('--mesh-accent-b', accentRgb.b.toString());
  root.style.setProperty('--mesh-primary-r', primaryRgb.r.toString());
  root.style.setProperty('--mesh-primary-g', primaryRgb.g.toString());
  root.style.setProperty('--mesh-primary-b', primaryRgb.b.toString());
};

/**
 * Loads saved colors from localStorage or extracts from logo
 */
export const initializeThemeFromLogo = async (logoPath: string = '/Logo.png') => {
  // Check if colors are already saved
  const savedColors = localStorage.getItem('logoColors');
  
  if (savedColors) {
    try {
      const palette = JSON.parse(savedColors);
      updateThemeColors(palette);
      return palette;
    } catch (error) {
      console.error('Failed to parse saved colors:', error);
    }
  }
  
  // Extract colors from logo
  try {
    const palette = await extractColorsFromImage(logoPath);
    updateThemeColors(palette);
    return palette;
  } catch (error) {
    console.error('Failed to extract colors from logo:', error);
    // Use default colors
    const defaultPalette: ColorPalette = {
      primary: '#3b82f6',
      accent: '#ef4444',
      green: '#22c55e',
      yellow: '#facc15', // Softer yellow
    };
    updateThemeColors(defaultPalette);
    return defaultPalette;
  }
};
