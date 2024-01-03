import { useState } from "react";
import Link from "next/link";
import Intro from "./components/Intro";
import PostBanner from "./components/PostBanner";
import TagSelector from "./components/TagSelector";
import Pagination from "./components/Pagination";
import { getAllPosts } from "@/libs/post";
import {
  getAllTags,
  getFilteredPostsByTag,
  getSortedPostsByDate,
} from "@/src/utils/handlePosts";

import type { Post } from "@/libs/types";
import { POSTPERPAGE } from "@/src/constants/page";
import MainWrapper from "./components/MainWrapper";

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default function PostPage({
  posts,
}: {
  posts: Post[];
}): React.ReactElement {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const allTags = getAllTags(posts);
  const sortedPostByDate = getSortedPostsByDate(posts);
  const filterdPostbyTags = getFilteredPostsByTag(
    sortedPostByDate,
    selectedTags
  );

  const indexOfLastPost = currentPage * POSTPERPAGE;
  const indexOfFirstPost = indexOfLastPost - POSTPERPAGE;

  const currentPosts = filterdPostbyTags.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    return window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <MainWrapper>
      <div className="sm:flex flex-col items-center">
        <div className="w-7/12">
          <Intro />
          <TagSelector
            allTags={allTags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </div>
        <div className="inline-grid gap-4 grid-cols-2 w-7/12 mt-16">
          {currentPosts.map((post, i) => (
            <Link key={i} href={post.slug} className="pointer">
              <PostBanner
                title={post.title}
                tags={post.tags}
                date={post.date}
              />
            </Link>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPosts={filterdPostbyTags.length}
          paginate={paginate}
        />
      </div>
    </MainWrapper>
  );
}
