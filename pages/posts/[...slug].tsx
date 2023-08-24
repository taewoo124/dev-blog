import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts } from "@/libs/post";
import { serializeMdx } from "@/libs/mdx";
import { MDXRemoteSerializeResult, MDXRemote } from "next-mdx-remote";
import { Post } from "@/libs/types";

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => post.slug),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string[] };
  const slugString = `/posts/${[...slug].join("/")}`;
  const post = getAllPosts().find((post) => post.slug === slugString);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdx = await serializeMdx(post.content);

  return {
    props: { mdx },
  };
};

export default function Page({
  mdx,
}: {
  mdx: MDXRemoteSerializeResult;
  post: Post;
}) {
  return (
    <div>
      <MDXRemote {...mdx} />
    </div>
  );
}
