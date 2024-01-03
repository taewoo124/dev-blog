export default function TagSelector({
  allTags,
  selectedTags,
  setSelectedTags,
}: {
  allTags: string[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}): React.ReactElement {
  const toggleTagSelection = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="w-1/2">
      <div className="grid grid-cols-5 mt-8">
        {allTags &&
          allTags.map((tag) => (
            <div
              onClick={() => toggleTagSelection(tag)}
              className={`bg-white text-sm p-1 m-1 rounded-xl flex
              justify-center cursor-pointer border-2 border-white
              hover:text-navy hover:border-navy ${
                selectedTags.includes(tag) ? "text-navy border-navy" : ""
              }`}
              key={tag}
            >
              {tag}
            </div>
          ))}
      </div>
    </div>
  );
}
