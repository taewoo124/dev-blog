import { TableOfContents } from "@/libs/types";

export default function Sidebar({
  tableOfContents,
}: {
  tableOfContents: TableOfContents;
}): React.ReactElement {
  const tocArray = tableOfContents.map((toc) => toc.text);
  return (
    <div className="sticky border-2 border-gray h-full z-500 p-4 top-40 ml-14 rounded-xl">
      {tocArray.map((toc, index) => (
        <p key={index} className="p-1">
          {toc}
        </p>
      ))}
    </div>
  );
}
