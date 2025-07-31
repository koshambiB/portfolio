"use client";

import { useState } from "react";
import { slides } from "./slides/Slides";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pressedButton, setPressedButton] = useState<null | "prev" | "next">(null);

  const darkBlue = "#0A192F";

  const handlePrev = () => {
    setPressedButton("prev");
    setTimeout(() => setPressedButton(null), 150);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setPressedButton("next");
    setTimeout(() => setPressedButton(null), 150);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const CurrentSlide = slides[currentSlide];

  return (
    <div className="flex justify-center items-center min-h-[400px] p-8">
      <div
        className="rounded-3xl bg-[var(--artic-daisy)] shadow-lg flex flex-col items-center p-8 relative"
        style={{
          height: "70vh",
          width: "85vw",
          boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
          border: `4px solid ${darkBlue}`,
        }}
      >
        {/* Render current slide */}
        <CurrentSlide />

        {/* Buttons */}
        <div
          className="flex justify-center gap-12 mt-auto pt-8"
          style={{ marginTop: "auto" }}
        >
          <button
            onClick={handlePrev}
            className={`relative w-14 h-14 flex items-center justify-center cursor-pointer rounded-md bg-[var(--ice-blue)] border-2 shadow-[5px_5px_0_0_rgba(0,0,0,0.2)] transition-all duration-150 ease-in-out ${
              pressedButton === "prev"
                ? "shadow-[1px_1px_0_0_rgba(0,0,0,0.2)] translate-y-[2px]"
                : ""
            }`}
            aria-label="Previous Slide"
            type="button"
            style={{ borderColor: darkBlue }}
          >
            <div
              className="w-0 h-0 border-t-6 border-b-6 border-r-10 border-t-transparent border-b-transparent"
              style={{ borderRightColor: "#27476D" }}
            />
          </button>

          <button
            onClick={handleNext}
            className={`relative w-14 h-14 flex items-center justify-center cursor-pointer rounded-md bg-[var(--ice-blue)] border-2 shadow-[5px_5px_0_0_rgba(0,0,0,0.2)] transition-all duration-150 ease-in-out ${
              pressedButton === "next"
                ? "shadow-[1px_1px_0_0_rgba(0,0,0,0.2)] translate-y-[2px]"
                : ""
            }`}
            aria-label="Next Slide"
            type="button"
            style={{ borderColor: darkBlue }}
          >
            <div
              className="w-0 h-0 border-t-6 border-b-6 border-l-10 border-t-transparent border-b-transparent"
              style={{ borderLeftColor: "#27476D" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
