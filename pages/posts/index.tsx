import { getAllPosts } from "@/libs/post";
import Link from "next/link";
import { Post } from "@/libs/types";
import Header from "../components/header";
import BannerImage from "../components/image";
import Intro from "../components/intro";
import PostBanner from "../components/PostBanner";

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
      <div className="w-8/12">
        <Header />
        <BannerImage />
        <Intro />
      </div>
      <div className="inline-grid gap-4 grid-cols-2 w-8/12 mt-16">
        {posts.map((post, i) => (
          <Link key={i} href={post.slug}>
            <PostBanner />
          </Link>
        ))}
      </div>
    </div>
  );
}
