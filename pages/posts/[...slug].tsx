import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts } from "@/libs/post";
import { serializeMdx } from "@/libs/mdx";
import { MDXRemoteSerializeResult, MDXRemote } from "next-mdx-remote";
import { Post } from "@/libs/types";
import Title from "./components/Title";
import Header from "../components/header";

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
    props: { mdx, post },
  };
};

export default function Page({
  mdx,
  post,
}: {
  mdx: MDXRemoteSerializeResult;
  post: Post;
}) {
  return (
    <div className="flex justify-center ">
      <div className="w-8/12">
        <Header />
        <Title post={post} />
        <div className="flex flex-col items-center mt-14">
          <div className="prose flex flex-col items-center">
            <MDXRemote {...mdx} />
          </div>
        </div>
      </div>
    </div>
  );
}
