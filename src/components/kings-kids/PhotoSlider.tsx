import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface Photo {
    url: string;
    title: string;
    description: string;
}

interface PhotoSliderProps {
    photos: Photo[];
    autoPlayInterval?: number;
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photos, autoPlayInterval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % photos.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [isAutoPlaying, autoPlayInterval, photos.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            {/* Main Slider Container */}
            <div className="relative h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-0"
                    >
                        <img
                            src={photos[currentIndex].url}
                            alt={photos[currentIndex].title}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="max-w-2xl"
                            >
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                    {photos[currentIndex].title}
                                </h3>
                                <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                                    {photos[currentIndex].description}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group"
                    aria-label="Previous slide"
                >
                    <IoChevronBack className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group"
                    aria-label="Next slide"
                >
                    <IoChevronForward className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-8 flex gap-4 justify-center overflow-x-auto pb-2 scrollbar-hide">
                {photos.map((photo, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden transition-all duration-300 ${
                            currentIndex === index
                                ? "ring-4 ring-sky-400 scale-110 shadow-lg shadow-sky-400/50"
                                : "opacity-60 hover:opacity-100 hover:scale-105"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <img
                            src={photo.url}
                            alt={photo.title}
                            className="w-full h-full object-cover"
                        />
                        {currentIndex === index && (
                            <motion.div
                                layoutId="activeThumbnail"
                                className="absolute inset-0 border-2 border-sky-400 rounded-xl"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Progress Indicator */}
            <div className="mt-6 flex gap-2 justify-center">
                {photos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentIndex === index
                                ? "w-8 bg-sky-400"
                                : "w-1.5 bg-slate-600 hover:bg-slate-500"
                        }`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoSlider;

