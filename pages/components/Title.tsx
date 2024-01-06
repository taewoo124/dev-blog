import { Post } from "@/libs/types";

export default function Title({ post }: { post: Post }): React.ReactElement {
  const { title, date, description } = post;
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center border-b-2 border-gray mt-14 w-full">
        <h1 className="text-6xl mb-12">{title && title}</h1>
        <h2 className="text-2xl mb-12">{description && `"${description}"`}</h2>
        <p className="mb-4">{date && date}</p>
      </div>
    </section>
  );
}
