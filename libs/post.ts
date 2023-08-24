import { sync } from "glob";
import path from "path";

const BASE_PATH = "/blogPosts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getAllPosts = () => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);

  return postPaths.map((path) => {
    return {
      slug: path.slice(path.indexOf(BASE_PATH)).replace(".mdx", ""),
    };
  });
};
