import React, { useState, useEffect } from "react";
import HeaderLink from "./HeaderLink";
import XScrollBar from "./XScrollBar";
import Link from "next/link";
import Image from "next/image";

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
    <div className="sticky top-0 z-50 sm:w-full">
      <header
        className={`transition-all duration-300  bg-light-white border-b-2 border-gray px-4 ${
          isScrolled ? "py-2" : "py-6"
        }`}
      >
        <div className="flex flex-wrap justify-between items-center">
          <HeaderLink>
            <Link href="/">
              <Image
                src="/Light-Bulb-PNG-Clipart.png"
                alt="Log_Image"
                width={50}
                height={50}
              />
            </Link>
          </HeaderLink>
          <nav className="md:flex hidden">
            <HeaderLink>
              <Link target="blank" href="https://www.github.com/taewoo124">
                <Image
                  src="/github.svg"
                  alt="GitHub_Image"
                  width={35}
                  height={35}
                />
              </Link>
            </HeaderLink>
            <HeaderLink>
              <Link target="blank" href="https://www.kimtw.dev">
                <Image
                  src="/terminal.png"
                  alt="Terminal_Image"
                  width={41.5}
                  height={41.5}
                />
              </Link>
            </HeaderLink>
            <HeaderLink>
              <Link
                target="blank"
                href="https://www.notion.so/Learning-Record-da39ff869c8c45b7a7ddcc1dbe2ebc63"
              >
                <Image
                  src="/notion.png"
                  alt="Terminal_Image"
                  width={45}
                  height={45}
                />
              </Link>
            </HeaderLink>
          </nav>
        </div>
      </header>
      <XScrollBar />
    </div>
  );
}
