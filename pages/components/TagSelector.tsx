import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

export default function TagSelector({
  allTags,
  selectedTags,
  setSelectedTags,
}: {
  allTags: string[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}): React.ReactElement {
  const [isRotate, setIsRotate] = useState(false);

  const toggleTagSelection = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleClearTags = () => {
    setSelectedTags([]);
  };

  const handleIconRotate = () => {
    setIsRotate(!isRotate);
  };

  return (
    <div className="w-2/3 lg:flex mt-8 hidden">
      <div className="grid grid-cols-5 mr-8">
        {allTags &&
          allTags.map((tag) => (
            <p
              onClick={() => toggleTagSelection(tag)}
              className={`bg-white text-sm p-1 m-1 rounded-xl flex
              justify-center cursor-pointer hover:text-navy hover:border-navy ${
                selectedTags.includes(tag)
                  ? "text-navy border-2 border-navy font-extra-bold"
                  : "border-2 border-white"
              }`}
              key={tag}
            >
              {tag}
            </p>
          ))}
      </div>
      <div>
        <FontAwesomeIcon
          icon={faRotate}
          className={`${
            isRotate ? "rotate-45" : ""
          } cursor-pointer transition-transform duration-500`}
          onClick={handleClearTags}
          onMouseOver={handleIconRotate}
          onMouseLeave={handleIconRotate}
          width="16"
        />
      </div>
    </div>
  );
}
