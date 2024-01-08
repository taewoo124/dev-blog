import { TableOfContents } from "@/libs/types";
import { Fragment } from "react";
import { useScroll } from "@/src/hooks/useScroll";
import { Section, SubSection } from "@/libs/types";
import { $ } from "@/libs/clsx";
import BannerBottom from "./BannerBottom";

export default function Sidebar({
  tableOfContents,
  className,
}: {
  tableOfContents: TableOfContents;
  className?: string;
}): React.ReactElement {
  const { currentSectionSlug } = useScroll(tableOfContents);

  const isSubSectionActive = (subSection: SubSection) => {
    return subSection.slug === currentSectionSlug;
  };

  const isSectionActive = (section: Section) => {
    return (
      section.slug === currentSectionSlug ||
      section.subSections.some((v) => v.slug === currentSectionSlug)
    );
  };

  return (
    <div
      className={$(
        "overflow-hidden w-1/3 h-fit sticky top-80 ml-12 rounded-xl border border-neutral-200 transition-all dark:border-neutral-800 hidden 2xl:block",
        className
      )}
    >
      {tableOfContents && tableOfContents.length !== 0 && (
        <div className="p-4 pl-7 dark:border-neutral-700 dark:bg-neutral-800">
          <ul
            id="toc-content"
            className="mt-2 flex flex-col items-start justify-start text-sm"
          >
            {tableOfContents.map((section) => (
              <Fragment key={section.slug}>
                <li>
                  <a
                    href={`#${section.slug}`}
                    className={$(
                      "group block py-1",
                      section.subSections && "",
                      isSectionActive(section)
                        ? "text-blue"
                        : "text-white dark:text-black"
                    )}
                  >
                    {section.text}
                  </a>
                </li>
                {section.subSections.map((subSection) => (
                  <li key={subSection.slug} className="ml-4">
                    <a
                      href={`#${subSection.slug}`}
                      className={$(
                        "group flex items-start py-1",
                        isSubSectionActive(subSection)
                          ? "text-blue"
                          : "text-white dark:text-black"
                      )}
                    >
                      <svg
                        width="3"
                        height="24"
                        viewBox="0 -9 3 24"
                        className={$(
                          "mr-2 overflow-visible",
                          "text-tertiary group-hover:text-secondary"
                        )}
                      >
                        <path
                          d="M0 0L3 3L0 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      {subSection.text}
                    </a>
                  </li>
                ))}
              </Fragment>
            ))}
          </ul>
        </div>
      )}
      <BannerBottom />
    </div>
  );
}
