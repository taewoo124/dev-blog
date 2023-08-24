import { getAllPosts } from "@/libs/post";

type Post = {
  slug: string;
};

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
        <li key={i}>{post.slug}</li>
      ))}
    </ul>
  );
}
