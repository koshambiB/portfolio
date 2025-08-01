'use client';

import React, { useState } from "react";

import { projects } from "./projectContent/ProjectContent";
import type { Project } from "./projectContent/ProjectContent";

export default function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Enhanced easing function for smoother animations
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  // Animate slide transition with custom timing
  const animateSlide = (newIndex: number, slideDirection: 'left' | 'right') => {
    if (isTransitioning) return;
    
    setDirection(slideDirection);
    setIsTransitioning(true);
    
    // Add staggered animation effect
    const cards = document.querySelectorAll('[data-card-position]');
    cards.forEach((card, index) => {
      const element = card as HTMLElement;
      element.style.transitionDelay = `${index * 50}ms`;
    });
    
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
      setDirection(null);
      // Reset transition delays
      cards.forEach(card => {
        const element = card as HTMLElement;
        element.style.transitionDelay = '0ms';
      });
    }, 600);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    animateSlide(newIndex, 'left');
  };

  const nextSlide = () => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    animateSlide(newIndex, 'right');
  };

  // Parallax effect for background images
  const getParallaxOffset = (position: string): number => {
    switch (position) {
      case 'left': return -20;
      case 'right': return 20;
      case 'center': return 0;
      default: return 0;
    }
  };

  // Dynamic scale based on position and transition state
  const getDynamicScale = (position: string, isTransitioning: boolean): number => {
    const baseScale = position === "center" ? 1.5 : 1;
    const transitionMultiplier = isTransitioning ? 0.98 : 1;
    return baseScale * transitionMultiplier;
  };

  // Get spring animation values
  const getSpringValues = (position: string, index: number) => {
    const delay = isTransitioning ? index * 100 : 0;
    const duration = isTransitioning ? 800 : 600;
    return {
      transition: `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
      transform: isTransitioning 
        ? `translateY(${Math.sin(Date.now() / 1000 + index) * 2}px)` 
        : 'translateY(0px)'
    };
  };

  // Calculate indices for previous and next slides
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

  // Extended array to show smooth sliding animation
  const extendedProjects = [
    { ...projects[prevIndex], position: "far-left", id: `${prevIndex}-far-left` },
    { ...projects[prevIndex], position: "left", id: `${prevIndex}-left` },
    { ...projects[currentIndex], position: "center", id: `${currentIndex}-center` },
    { ...projects[nextIndex], position: "right", id: `${nextIndex}-right` },
    { ...projects[nextIndex], position: "far-right", id: `${nextIndex}-far-right` },
  ];

  const baseWidth = 320;
  const baseHeight = 200;

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8 px-4 overflow-visible flex justify-center items-center">
      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-25deg); }
          100% { transform: translateX(300%) skewX(-25deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        .carousel-container {
          perspective: 1200px;
          transform-style: preserve-3d;
        }
        
        .card-3d {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
      `}</style>
      {/* Left Arrow with enhanced effects */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        aria-label="Previous Slide"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-40 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-3 shadow-md transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          animation: isTransitioning && direction === 'left' ? 'pulse-glow 0.6s ease-in-out' : 'none',
        }}
        onMouseEnter={(e) => {
          if (!isTransitioning) {
            e.currentTarget.style.transform = 'translateY(-50%) translateX(-5px) scale(1.15)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) translateX(0px) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          style={{
            color: 'var(--dark-blue)',
            transform: isTransitioning && direction === 'left' ? 'translateX(-2px)' : 'translateX(0px)',
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow with enhanced effects */}
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        aria-label="Next Slide"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-40 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-3 shadow-md transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          animation: isTransitioning && direction === 'right' ? 'pulse-glow 0.6s ease-in-out' : 'none',
        }}
        onMouseEnter={(e) => {
          if (!isTransitioning) {
            e.currentTarget.style.transform = 'translateY(-50%) translateX(5px) scale(1.15)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) translateX(0px) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          style={{
            color: 'var(--dark-blue)',
            transform: isTransitioning && direction === 'right' ? 'translateX(2px)' : 'translateX(0px)',
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div className="relative w-[960px] h-[400px] flex justify-center items-center perspective-1000">
        {extendedProjects.map(({ bgImage, title, description, link, position, id }, index) => {
          const isCenter = position === "center";
          const scale = getDynamicScale(position, isTransitioning);
          const opacity = position === "far-left" || position === "far-right" ? 0 : 1;
          const zIndex = isCenter ? 30 : position === "left" || position === "right" ? 20 : 10;
          const blur = isCenter ? "blur(0px)" : "blur(4px)";
          const parallaxOffset = getParallaxOffset(position);
          const springValues = getSpringValues(position, index);
          const isHovered = hoveredCard === id;
          
          let translateX = "0";
          let rotateY = "0";
          switch (position) {
            case "far-left":
              translateX = "-120%";
              rotateY = "45deg";
              break;
            case "left":
              translateX = "-60%";
              rotateY = "15deg";
              break;
            case "center":
              translateX = "0";
              rotateY = "0deg";
              break;
            case "right":
              translateX = "60%";
              rotateY = "-15deg";
              break;
            case "far-right":
              translateX = "120%";
              rotateY = "-45deg";
              break;
          }

          return (
            <a
              key={id} href={link} target="_blank" rel="noopener noreferrer"
              data-card-position={position}
              className="absolute rounded-xl overflow-hidden cursor-pointer shadow-lg border-4 transform-gpu"
              style={{
                width: baseWidth,
                height: baseHeight,
                transform: `translateX(${translateX}) scale(${scale}) rotateY(${rotateY}) ${isHovered && isCenter ? 'translateZ(20px)' : ''}`,
                zIndex: zIndex,
                filter: blur,
                opacity: opacity,
                backgroundColor: "var(--artic-daisy)",
                borderColor: "var(--dark-blue)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: isCenter 
                  ? "0 25px 50px -12px rgba(31, 38, 135, 0.37), 0 0 0 1px rgba(255, 255, 255, 0.1)" 
                  : "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                transition: isTransitioning 
                  ? `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 50}ms`
                  : "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
              onMouseEnter={(e) => {
                setHoveredCard(id);
                if (isCenter) {
                  e.currentTarget.style.filter = "blur(0px)";
                  e.currentTarget.style.transform = `translateX(${translateX}) scale(${scale * 1.08}) rotateY(${rotateY}) translateZ(30px)`;
                  e.currentTarget.style.boxShadow = "0 35px 60px -12px rgba(31, 38, 135, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)";
                }
              }}
              onMouseLeave={(e) => {
                setHoveredCard(null);
                e.currentTarget.style.filter = blur;
                e.currentTarget.style.transform = `translateX(${translateX}) scale(${scale}) rotateY(${rotateY})`;
                e.currentTarget.style.boxShadow = isCenter 
                  ? "0 25px 50px -12px rgba(31, 38, 135, 0.37), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                  : "0 8px 32px 0 rgba(31, 38, 135, 0.37)";
              }}
              onMouseMove={(e) => {
                if (isCenter) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  const rotateXVal = (y / rect.height) * -10;
                  const rotateYVal = (x / rect.width) * 10;
                  
                  e.currentTarget.style.transform = `translateX(${translateX}) scale(${scale * 1.08}) rotateX(${rotateXVal}deg) rotateY(${rotateYVal}deg) translateZ(30px)`;
                }
              }}
            >
              {/* Inner rectangle cover photo */}
              <div 
                className="absolute top-3 left-3 right-3 rounded-lg overflow-hidden transition-transform duration-700"
                style={{
                  height: '60%', // Takes up 60% of card height, leaving space for text
                  transform: `scale(${isHovered && isCenter ? 1.02 : 1})`,
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    margin: '8px',
                    height: 'calc(100% - 16px)',
                    width: 'calc(100% - 16px)',
                  }}
                ></div>
              </div>



              {/* Content Text with enhanced animations */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 
                  className="text-lg font-semibold mb-1 drop-shadow-sm transition-all duration-300"
                  style={{
                    transform: isHovered && isCenter ? 'translateY(-3px)' : 'translateY(0px)',
                    color: 'var(--dark-blue)',
                  }}
                >
                  {title}
                </h3>
                <p 
                  className="text-xs line-clamp-2 drop-shadow-sm transition-all duration-300"
                  style={{
                    transform: isHovered && isCenter ? 'translateY(-2px)' : 'translateY(0px)',
                    color: 'var(--foreground)',
                    opacity: isCenter ? 1 : 0.8,
                  }}
                >
                  {description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}