"use client";

import React from "react";

// Slide 1 with background gradient and decorative clouds
export function Slide1() {
  return (
    <div
      className="relative w-full h-full rounded-2xl flex flex-col justify-end px-12 pb-12 select-none"
      style={{
        // Gradient background: right to left light to dark with your 4 colors distribution
        backgroundImage: `linear-gradient(
          to left,
          #27476D 30%,   /* dark bluish adding extra 20%, total 60% light */
          #1B3554 80%,   /* darker navy covers next 20% */
          #0A192F 100%   /* darkest navy finishes the left 40% */
        )`,
        borderColor: "#0A192F",
        boxShadow: "inset 0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Decorative clouds as absolutely positioned SVG or divs */}
      <Clouds />

      <div className="text-left relative z-10">
        <h1
          className="text-[3rem] font-extrabold leading-tight text-[var(--ice-blue)]"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Hi! I am Koshambi
        </h1>
        <p
          className="text-gray-400 mt-2 text-lg max-w-md"
          style={{ color: "rgba(255 255 255 / 0.6)" }}
        >
          I am an open-source developer
        </p>
      </div>
    </div>
  );
}

// Slide 2
export function Slide2() {
  return (
    <div
      className="w-full h-full flex items-center justify-center text-[var(--color-turquoise)] font-semibold text-lg text-center px-6 select-none"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#EAF5E2", // Example subtle background or keep transparent
        borderRadius: "1rem",
        boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)",
      }}
    >
      Showcase Your Skills and Projects Here.
    </div>
  );
}

// Slide 3
export function Slide3() {
  return (
    <div
      className="w-full h-full flex items-center justify-center text-[var(--color-turquoise)] font-semibold text-lg text-center px-6 select-none"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#EAF5E2", // Example subtle background or keep transparent
        borderRadius: "1rem",
        boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)",
      }}
    >
      Timeline and More Interactive Content.
    </div>
  );
}

// Decorative "Clouds" component - enhanced SVG clouds positioned absolutely inside Slide1
function Clouds() {
  return (
    <>
      {/* Enhanced grayish clouds with more detail and subtle gradients */}
      <svg
        className="absolute top-6 right-10 w-28 h-14 opacity-40"
        viewBox="0 0 80 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="cloudGradient1" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#B0BEC5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#78909C" stopOpacity="0.2" />
          </radialGradient>
          <radialGradient id="cloudGradient2" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#CFD8DC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#90A4AE" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <ellipse cx="30" cy="25" rx="35" ry="20" fill="url(#cloudGradient1)" />
        <ellipse cx="55" cy="25" rx="30" ry="18" fill="url(#cloudGradient2)" />
        <ellipse cx="45" cy="18" rx="40" ry="22" fill="url(#cloudGradient1)" />
      </svg>

      <svg
        className="absolute top-18 right-4 w-36 h-18 opacity-25"
        viewBox="0 0 80 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="cloudGradient3" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#B0BEC5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#78909C" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="40" cy="20" rx="40" ry="20" fill="url(#cloudGradient3)" />
      </svg>
    </>
  );
}

// Export slides array for ease of import & rendering in Hero.tsx
export const slides = [Slide1, Slide2, Slide3];
