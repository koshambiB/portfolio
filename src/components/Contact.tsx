'use client';

import React, { useState } from "react";

const colors = {
  linkedin: "#315491ff",
  github: "#7eb3c5ff",
  mail: "#516292ff",
  resume: "#76a7d1ff",
  text: "#0A192F",
  icon: "#FFFFFF",
};

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={colors.icon}
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

export default function Contact() {
  const bubbleFullWidth = 280;
  const circleWidth = 48; // size of collapsed circle

  const contacts = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/koshambi-bardhan-62b83b2ab/",
      color: colors.linkedin,
    },
    { label: "GitHub", href: "https://github.com/koshambiB", color: colors.github },
    {
      label: "Mail",
      href: "mailto:bardhankoshambi2005@gmail.com",
      color: colors.mail,
    },
    { label: "Resume", href: "/resume2025.pdf", color: colors.resume, download: true },
  ];

  const [collapsingIndex, setCollapsingIndex] = useState(null);
  const [animating, setAnimating] = useState(false);

  const animationDuration = 350;

  const handleClick = (index, href, download) => (e) => {
    e.preventDefault();
    if (animating) return; // block further clicks
    setCollapsingIndex(index);
    setAnimating(true);
    setTimeout(() => {
      if (download) {
        const link = document.createElement('a');
        link.href = href;
        link.download = "resume2025.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(href, "_blank", "noopener,noreferrer");
      }
      setCollapsingIndex(null);
      setAnimating(false);
    }, animationDuration);
  };

  return (
    <div className="flex justify-center p-8 my-16">
      <div
        className="rounded-3xl bg-[var(--artic-daisy)] border-4 border-[var(--dark-blue)] shadow-[5px_5px_0_0_rgba(0,0,0,0.4)] flex flex-col items-center p-8 gap-6"
        style={{
          maxWidth: 320,
          width: "100%",
          minHeight: "auto",
        }}
      >
        {contacts.map(({ label, href, color, download }, index) => {
          const isCollapsing = collapsingIndex === index;
          const width = isCollapsing ? circleWidth : bubbleFullWidth;
          return (
            <a
              key={label}
              href={href}
              download={download ? "resume2025.pdf" : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-3 rounded-full cursor-pointer select-none transition-colors duration-200 justify-start text-left"
              style={{
                backgroundColor: color,
                width,
                color: colors.text,
                textAlign: "left",
                transition: `width ${animationDuration}ms cubic-bezier(.8,-0.01,.17,1.02)`,
                pointerEvents: animating && !isCollapsing ? "none" : "auto",
                overflow: "hidden", // important: contents should "clip" rather than reflow!
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                if (!animating) e.currentTarget.style.filter = "brightness(1.1)";
              }}
              onMouseLeave={(e) => {
                if (!animating) e.currentTarget.style.filter = "brightness(1)";
              }}
              onClick={handleClick(index, href, download)}
            >
              <span
                className="flex items-center justify-center flex-shrink-0"
                style={{ color: colors.icon, minWidth: 24 }}
              >
                {searchIcon}
              </span>
              {/* The label will slide out as bubble width shrinks */}
              <span
                className="font-semibold text-lg"
                style={{
                  whiteSpace: "nowrap", // don't wrap
                  overflow: "hidden",
                  textOverflow: "clip",
                  marginLeft: 12,
                  opacity: isCollapsing ? 0 : 1,
                  transition: `opacity ${animationDuration * 0.6}ms cubic-bezier(.7,-0.01,.17,0.92)`,
                }}
              >
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}