import React, { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const handleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <button
        title="Toggle Theme"
        onClick={handleDarkMode}
        className="border-none bg-transparent cursor-pointer rounded p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-stroke duration-400"
        >
          <path
            pathLength="1"
            className={`moon-icon stroke-current transition-opacity duration-500 ${
              isDark ? "opacity-100" : "opacity-0"
            }`}
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          ></path>
          <circle
            pathLength="1"
            className={`sun-icon stroke-current transition-opacity duration-500 ${
              isDark ? "opacity-0" : "opacity-100"
            }`}
            cx="12"
            cy="12"
            r="5"
          ></circle>
          {[
            "0,-11",
            "0,11",
            "-11,0",
            "11,0",
            "-7.8,-7.8",
            "7.8,7.8",
            "-7.8,7.8",
            "7.8,-7.8",
          ].map((d, i) => (
            <line
              key={i}
              className={`sun-icon stroke-current transition-opacity duration-500 ${
                isDark ? "opacity-0" : "opacity-100"
              }`}
              x1="12"
              y1="12"
              x2={`calc(12 + ${d.split(",")[0]})`}
              y2={`calc(12 + ${d.split(",")[1]})`}
            ></line>
          ))}
        </svg>
      </button>
    </div>
  );
}

export default ThemeToggle;
