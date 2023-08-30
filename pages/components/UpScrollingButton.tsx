import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function UpScrollingButton(): React.ReactNode {
  const scrollTop = () => {
    return window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="flex justify-center items-center border rounded-md cursor-pointer w-12 h-12 bg-light-white hover:border-blue hover:text-blue"
      onClick={scrollTop}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </div>
  );
}
