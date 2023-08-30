import { getAllPosts } from "@/libs/post";
import Link from "next/link";
import { Post } from "@/libs/types";
import Header from "./components/Header";
import BannerImage from "./components/Image";
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
  return (
    <div className="flex flex-col items-center">
      <div className="w-7/12">
        <Header />
        {/* <BannerImage /> */}
        <Intro />
      </div>
      <div className="inline-grid gap-4 grid-cols-2 w-7/12 mt-16">
        {posts.map((post, i) => (
          <Link key={i} href={post.slug} className="pointer">
            <PostBanner title={post.title} tags={post.tags} date={post.date} />
          </Link>
        ))}
      </div>
    </div>
  );
}
