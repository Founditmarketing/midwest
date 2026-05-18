import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    items: React.ReactNode[];
    autoPlay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showDots?: boolean;
    transitionDuration?: number;
    itemsPerView?: {
        mobile: number;
        tablet: number;
        desktop: number;
    };
}

export default function Carousel({
    items,
    autoPlay = true,
    interval = 5000,
    showArrows = true,
    showDots = true,
    transitionDuration = 0.8,
    itemsPerView = { mobile: 1, tablet: 2, desktop: 3 }
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % items.length);
    }, [items.length]);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }, [items.length]);

    useEffect(() => {
        if (autoPlay) {
            const timer = setInterval(nextSlide, interval);
            return () => clearInterval(timer);
        }
    }, [autoPlay, interval, nextSlide]);

    return (
        <div className="relative group py-10 px-4 md:px-0">
            <div className="flex justify-center">
                <div className="relative w-full overflow-hidden">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                            transition={{ duration: transitionDuration, ease: "easeInOut" }}
                            className="grid gap-8 w-full"
                            style={{
                                gridTemplateColumns: `repeat(auto-fit, minmax(0, 1fr))`
                            }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* 
                  Simple implementation for now: show current + next 2 based on screen size.
                  For a true infinite "scroll" feel, we'd need more complex logic.
                  Showing 3 items at a time for desktop.
                */}
                                {[0, 1, 2].map((offset) => {
                                    const index = (currentIndex + offset) % items.length;
                                    // Handle visibility based on screen size via CSS
                                    return (
                                        <div
                                            key={`${currentIndex}-${offset}`}
                                            className={offset === 0 ? '' : offset === 1 ? 'hidden md:block' : 'hidden lg:block'}
                                        >
                                            {items[index]}
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {showArrows && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:-left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-obsidian-light/80 border border-white/10 flex items-center justify-center text-white hover:bg-accent transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:-right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-obsidian-light/80 border border-white/10 flex items-center justify-center text-white hover:bg-accent transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl"
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}

            {showDots && (
                <div className="flex justify-center gap-2 mt-12">
                    {items.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-accent w-8' : 'bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
