export default function PostBanner({
  title,
  tags,
  date,
}: {
  title: string;
  tags: string[];
  date: string;
}): React.ReactElement {
  return (
    <div className="flex flex-col p-6 border-2 mb-8 rounded-xl border-gray rounded-1xl">
      <div>
        <p className="text-3xl mb-6">{title}</p>
      </div>
      <div className="flex justify-between">
        <span className="flex">
          {tags.map((tag, index) => (
            <p className="p-2" key={index}>
              {tag}
            </p>
          ))}
        </span>
        <span className="flex">
          <p className="mx-2">{date}</p>
        </span>
      </div>
    </div>
  );
}
