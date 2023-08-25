import React, { useState, useEffect } from "react";
import HeaderLink from "./headerLink";

export default function Header(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (!isScrolled && offset > 80) {
        setIsScrolled(true);
      } else if (isScrolled && offset < 20) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <header
      className={`transition-all duration-300 bg-white border-b-2 border-gray px-4 ${
        isScrolled ? "py-2" : "py-6"
      } sticky top-0 z-50`}
    >
      <div className="flex flex-wrap justify-between items-center">
        <span className="flex">
          <HeaderLink>로고</HeaderLink>
        </span>
        <nav className="flex">
          <HeaderLink>깃헙</HeaderLink>
          <HeaderLink>터미널아이콘</HeaderLink>
          <HeaderLink>검색</HeaderLink>
        </nav>
      </div>
    </header>
  );
}
