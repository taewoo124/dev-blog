import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts } from "@/libs/post";
import { MDXRemoteProps } from "next-mdx-remote";

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

  return {
    props: { slugString },
  };
};

export default function Page({
  slugString,
}: {
  slugString: string;
  mdx: MDXRemoteProps;
}): React.ReactElement {
  return <p>Post: {slugString}</p>;
}
