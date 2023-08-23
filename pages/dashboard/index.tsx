"use client";

import Header from "../components/header";
import Posts from "../components/posts";
import BannerImage from "../components/image";
import Intro from "../components/intro";

export default function Home(): React.ReactElement {
  return (
    <div className="flex flex-col items-center">
      <div className="w-8/12">
        <Header />
        <BannerImage />
        <Intro />
      </div>
      <div className="w-8/12 mt-24">
        <Posts />
      </div>
    </div>
  );
}
