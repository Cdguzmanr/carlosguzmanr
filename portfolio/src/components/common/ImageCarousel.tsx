import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Using react-icons for cleaner SVG

interface ImageCarouselProps {
  imagesUrl: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imagesUrl }) => {
  // 1. Initialize Embla
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" }, 
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // 2. Sync State with Embla Events
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    
    // Cleanup
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // 3. Navigation Handlers
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  if (!imagesUrl || imagesUrl.length === 0) return null;

  return (
    <div className="relative w-full mx-auto group"> {/* 'relative' controls absolute buttons */}
      
      {/* --- Embla Viewport --- */}
      <div className="overflow-hidden rounded-xl shadow-lg bg-gray-100" ref={emblaRef}>
        
        {/* --- Flex Container (The Slider Track) --- */}
        <div className="flex touch-pan-y"> 
          {imagesUrl.map((url, index) => (
            <div 
              key={index} 
              className="flex-[0_0_100%] min-w-0 relative" // Mandatory: 100% width per slide
            >
              <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio container */}
                <img
                  src={url}
                  alt={`Slide ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Controls (Only show if > 1 image) --- */}
      {imagesUrl.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary1 p-3 rounded-full shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
            aria-label="Previous Slide"
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary1 p-3 rounded-full shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
            aria-label="Next Slide"
          >
            <FaChevronRight size={16} />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm
                  ${index === selectedIndex 
                    ? "bg-primary1 w-6" 
                    : "bg-white/70 hover:bg-white"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;