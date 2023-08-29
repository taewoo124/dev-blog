import { useState, useEffect } from "react";
import { TableOfContents } from "@/libs/types";

export const useScroll = (tableOfContents: TableOfContents) => {
  const [currentSectionSlug, setCurrentSectionSlug] = useState<
    string | undefined
  >();

  useEffect(() => {
    if (tableOfContents.length === 0) return;

    let headings: { id: string; top: number }[];
    const style = window.getComputedStyle(document.documentElement);
    const scrollMt =
      parseFloat(
        style.getPropertyValue("--scroll-mt").match(/[\d.]+/)?.[0] ?? "0"
      ) * parseFloat(style.fontSize.match(/[\d.]+/)?.[0] ?? "16");

    function onResize() {
      headings = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".prose h1:not(#table-of-contents), h2:not(#table-of-contents),h3:not(#table-of-contents)"
        )
      ).map((element) => ({ id: element.id, top: element.offsetTop }));
    }

    function onScroll() {
      if (!headings) return;

      const top = window.scrollY + scrollMt + 100;
      let current: typeof currentSectionSlug = undefined;

      for (let i = 0; i < headings.length; i++) {
        if (top >= headings[i].top) {
          current = headings[i].id;
        }
      }
      setCurrentSectionSlug(current);
    }

    onResize();
    onScroll();

    window.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    });
    window.addEventListener("resize", onResize, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onResize, { capture: true });
    };
  }, [tableOfContents]);

  return { tableOfContents, currentSectionSlug };
};
