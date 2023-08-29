export type PostMatter = {
  title: string;
  description: string;
  tags: string[];
  draft: boolean;
  date: string;
};

export type Post = PostMatter & {
  slug: string;
  content: string;
  wordCount: number;
};

export type TableOfContents = Section[];

export type SubSection = {
  slug: string;
  text: string;
};

export type Section = SubSection & {
  subSections: SubSection[];
};
