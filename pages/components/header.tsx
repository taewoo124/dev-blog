"use client";

import HeaderLink from "./headerLink";

export default function Header(): React.ReactElement {
  return (
    <section>
      <header>
        <nav className="bg-black border-b-2 border-gray px-4 py-6">
          <div className="flex flex-wrap justify-between items-center">
            <span className="flex">
              <HeaderLink>로고</HeaderLink>
            </span>
            <span className="flex">
              <HeaderLink>깃헙</HeaderLink>
              <HeaderLink>터미널아이콘</HeaderLink>
              <HeaderLink>검색</HeaderLink>
            </span>
          </div>
        </nav>
      </header>
    </section>
  );
}
