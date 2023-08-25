import { Post } from "@/libs/types";

export default function Title({ post }: { post: Post }): React.ReactElement {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center border-b-2 border-gray mt-14 w-full">
        <h1 className="text-6xl mb-12">{post.title}</h1>
        <p className="mb-4">{post.date}</p>
      </div>
    </section>
  );
}
