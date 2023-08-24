import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts } from "@/libs/post";

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => post.slug),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const slugString = `posts/${[...slugs].join("/")}`;
  const post = getAllPosts().find((post) => post.slug === slugString);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slugString,
    },
  };
};

export default function Page({ slug }: { slug: string }): React.ReactElement {
  return <p>Post: {slug}</p>;
}
