import React, { useState, useEffect } from "react";

export default function XScrollBar(): React.ReactElement {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const calculateScrollPercentage = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", calculateScrollPercentage);

    return () => {
      window.removeEventListener("scroll", calculateScrollPercentage);
    };
  }, [scrollPercentage]);

  const getGradientColor = () => {
    const r = Math.min(255, Math.floor((scrollPercentage / 100) * 255));
    return `rgb(${5 - r}, 0, ${5 - r})`;
  };

  const gradientColor = getGradientColor();
  const background = `linear-gradient(90deg, white, ${gradientColor})`;

  return (
    <div
      className="h-3 sticky top-100 rounded-b-sms"
      style={{ width: `${scrollPercentage}%`, background }}
    />
  );
}
