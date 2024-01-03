import { getAllPosts } from "@/libs/post";
import Link from "next/link";
import { Post } from "@/libs/types";
import Header from "./components/Header";
import Intro from "./components/Intro";
import PostBanner from "./components/PostBanner";

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
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="sm:flex hidden flex-col items-center">
      <div className="w-7/12">
        <Header />
        <Intro />
      </div>
      <div className="inline-grid gap-4 grid-cols-2 w-7/12 mt-16">
        {sortedPosts.map((post, i) => (
          <Link key={i} href={post.slug} className="pointer">
            <PostBanner title={post.title} tags={post.tags} date={post.date} />
          </Link>
        ))}
      </div>
    </div>
  );
}
