import type { Post } from "@/libs/types";

export const getSortedPostsByDate = (posts: Post[]): Post[] => {
  if (posts.length < 1) return [];

  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getAllTags = (posts: Post[]) => {
  if (posts.length < 1) return [];

  return [...new Set(posts.map((post) => post.tags).flat(1))];
};

export const getFilteredPostsByTag = (posts: Post[], tag: string[]): Post[] => {
  if (posts.length < 1) return [];

  return tag.length > 0
    ? posts.filter((post) => tag.some((tag) => post.tags.includes(tag)))
    : posts;
};
