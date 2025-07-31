'use client';

import React from "react";

const colors = {
  linkedin: "#315491ff", // medium blue for LinkedIn bubble background
  github: "#7eb3c5ff", // glacier color for GitHub bubble background
  mail: "#516292ff", // dark blue for Mail bubble background
  resume: "#76a7d1ff", // ice blue for Resume bubble background
  text: "#0A192F", // dark blue for text on bubbles
  icon: "#FFFFFF", // white for search icon
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
  const bubbleWidth = 280; // increased width to 280px or as needed

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

  return (
    <div className="flex justify-center p-8">
      <div
        className="rounded-3xl bg-[var(--artic-daisy)] shadow-lg flex flex-col items-center p-8 gap-6"
        style={{ maxWidth: 320, width: "100%", minHeight: "auto" }} // adjust width & height as needed
      >
        {contacts.map(({ label, href, color, download }) => (
          <a
            key={label}
            href={href}
            download={download ? "resume2025.pdf" : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-3 rounded-full cursor-pointer select-none transition-colors duration-200 justify-start text-left"
            style={{
              backgroundColor: color,
              width: bubbleWidth,
              color: colors.text,
              textAlign: "left",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
          >
            <span
              className="flex items-center justify-center flex-shrink-0"
              style={{ color: colors.icon, minWidth: 24 }}
            >
              {searchIcon}
            </span>
            <span className="font-semibold text-lg">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
