import React from 'react';

interface FloatingNodeProps {
    icon: React.ReactNode;
    label: string;
    value?: string;
    position: { top?: string; left?: string; right?: string; bottom?: string };
    delay?: string;
    className?: string;
}

const FloatingNode: React.FC<FloatingNodeProps> = ({
    icon,
    label,
    value,
    position,
    delay = '0s',
    className = ''
}) => {
    return (
        <div
            className={`absolute z-10 flex flex-col items-center group ${className}`}
            style={{ ...position, animationDelay: delay }}
        >
            {/* Connector Line (simplified representation) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent -rotate-45 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-primary-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Main Circle */}
                <div className="relative w-12 h-12 flex items-center justify-center bg-secondary-100 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-full shadow-lg group-hover:border-primary-500/50 transition-all duration-300">
                    <div className="text-secondary-600 dark:text-secondary-300 group-hover:text-primary-500 transition-colors duration-300">
                        {icon}
                    </div>
                </div>

                {/* Labels */}
                <div className="absolute top-0 left-14 whitespace-nowrap">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-secondary-900 dark:text-secondary-50 opacity-80 uppercase tracking-tighter">
                            {label}
                        </span>
                        {value && (
                            <span className="text-[10px] text-secondary-500 dark:text-secondary-400 font-mono">
                                {value}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FloatingNode;
