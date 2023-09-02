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
    <div className="flex flex-col p-6 border-2 mb-8 rounded-xl border-white hover:border-navy hover:text-navy rounded-1xl">
      <div>
        <p className="text-3xl mb-6">{title}</p>
      </div>
      <div className="flex justify-between">
        <span className="xl:flex hidden">
          {tags &&
            tags.map((tag, index) => (
              <p className="bg-white p-1 m-1 rounded-xl" key={index}>
                {tag}
              </p>
            ))}
        </span>
        <span className="md:flex hidden justify-center items-center">
          <p className="bg-white rounded-xl mx-2 p-2">{date}</p>
        </span>
      </div>
    </div>
  );
}
