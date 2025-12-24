# Dark Mode Implementation

## Overview
This project now includes a fully functional dark mode feature with a custom color palette based on **green**, **brown**, and **white** tones.

## Color Palette

### Primary Colors (Green)
- Used for primary actions, highlights, and brand elements
- Shades: 50-950 (lightest to darkest)
- Main color: `#22c55e` (primary-500)

### Secondary Colors (Brown/Stone)
- Used for text, backgrounds, and neutral elements
- Shades: 50-950 (lightest to darkest)
- Main color: `#78716c` (secondary-500)

### Accent Colors (Yellow/Amber)
- Used for special highlights and accents
- Shades: 50-950 (lightest to darkest)

## How to Use

### 1. Toggle Dark Mode
Click the sun/moon icon in the top-right corner of the navigation bar to switch between light and dark modes.

### 2. Automatic Theme Detection
The app automatically detects your system's color scheme preference on first load.

### 3. Theme Persistence
Your theme preference is saved to `localStorage` and will persist across browser sessions.

## Using Dark Mode in Your Components

### Basic Usage
Use Tailwind's `dark:` variant to apply dark mode styles:

```tsx
<div className="bg-white dark:bg-secondary-950 text-secondary-900 dark:text-secondary-50">
  Content here
</div>
```

### Color Reference

#### Backgrounds
- **Light Mode**: `bg-white`, `bg-secondary-50`, `bg-secondary-100`
- **Dark Mode**: `dark:bg-secondary-950`, `dark:bg-secondary-900`, `dark:bg-secondary-800`

#### Text
- **Light Mode**: `text-secondary-900`, `text-secondary-700`, `text-secondary-600`
- **Dark Mode**: `dark:text-secondary-50`, `dark:text-secondary-200`, `dark:text-secondary-300`

#### Primary Actions (Buttons, Links)
- **Light Mode**: `bg-primary-600 hover:bg-primary-700`
- **Dark Mode**: `dark:bg-primary-500 dark:hover:bg-primary-400`

#### Borders
- **Light Mode**: `border-secondary-200`
- **Dark Mode**: `dark:border-secondary-700`

### Example Component

```tsx
function MyComponent() {
  return (
    <div className="p-6 bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700">
      <h2 className="text-2xl font-bold text-secondary-900 dark:text-secondary-50 mb-4">
        Title
      </h2>
      <p className="text-secondary-700 dark:text-secondary-300">
        Description text
      </p>
      <button className="mt-4 px-6 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 text-white rounded-lg transition-colors">
        Action Button
      </button>
    </div>
  );
}
```

## CSS Variables

The theme uses CSS custom properties for easy customization:

### Light Mode Variables
```css
--bg-primary: white
--bg-secondary: light green
--text-primary: dark brown
--accent-primary: green
```

### Dark Mode Variables
```css
--bg-primary: very dark brown
--bg-secondary: dark brown
--text-primary: light stone
--accent-primary: bright green
```

## Tailwind v4 Configuration

Since this project uses **Tailwind CSS v4**, the configuration is done in `src/index.css` using the `@theme` directive instead of a traditional `tailwind.config.js` file.

### Key Features:
- ✅ Custom color palette (green, brown, white)
- ✅ Dark mode support with `dark:` variants
- ✅ Smooth transitions between themes
- ✅ System preference detection
- ✅ LocalStorage persistence
- ✅ Accessible toggle button with icons

## Browser Support
- Modern browsers with CSS custom properties support
- localStorage for theme persistence
- `prefers-color-scheme` media query for system detection
