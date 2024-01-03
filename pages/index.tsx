import { useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Intro from "./components/Intro";
import PostBanner from "./components/PostBanner";
import TagSelector from "./components/TagSelector";
import { getAllPosts } from "@/libs/post";
import {
  getAllTags,
  getFilteredPostsByTag,
  getSortedPostsByDate,
} from "@/src/utils/handlePosts";

import type { Post } from "@/libs/types";

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

  const sortedPostByDate = getSortedPostsByDate(posts);
  const allTags = getAllTags(posts);
  const filterdPostbyTags = getFilteredPostsByTag(
    sortedPostByDate,
    selectedTags
  );

  return (
    <div className="sm:flex hidden flex-col items-center">
      <div className="w-7/12">
        <Header />
        <Intro />
        <TagSelector
          allTags={allTags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      </div>
      <div className="inline-grid gap-4 grid-cols-2 w-7/12 mt-16">
        {filterdPostbyTags.map((post, i) => (
          <Link key={i} href={post.slug} className="pointer">
            <PostBanner title={post.title} tags={post.tags} date={post.date} />
          </Link>
        ))}
      </div>
    </div>
  );
}
