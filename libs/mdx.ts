import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "rehype-prism";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

export const serializeMdx = (source: string) => {
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkToc],
      rehypePlugins: [rehypeSlug, rehypePrism],
      format: "mdx",
    },
  });
};
