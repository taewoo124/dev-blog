import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts } from "@/libs/post";
import { serializeMdx } from "@/libs/mdx";
import { MDXRemoteSerializeResult, MDXRemote } from "next-mdx-remote";
import { Post, TableOfContents } from "@/libs/types";
import Title from "../components/Title";
import Sidebar from "../components/SideBar";
import { parseToc } from "@/libs/toc";

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
    props: { mdx, post, tableOfContents: parseToc(post.content) },
  };
};

export default function Page({
  mdx,
  post,
  tableOfContents,
}: {
  mdx: MDXRemoteSerializeResult;
  post: Post;
  tableOfContents: TableOfContents;
}) {
  return (
    <div className="flex justify-center ">
      <div className="w-7/12">
        <Title post={post} />
        <div className="flex mt-12 ">
          <div className="prose flex flex-col">
            <MDXRemote {...mdx} />
          </div>
          <Sidebar tableOfContents={tableOfContents} />
        </div>
      </div>
    </div>
  );
}
