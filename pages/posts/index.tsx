import { getAllPosts } from "@/libs/post";
import Link from "next/link";
import { Post } from "@/libs/types";

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default function PostPage({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post, i) => (
        <Link key={i} href={`${post.slug}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </ul>
  );
}
