import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { POSTPERPAGE } from "@/src/constants/page";

interface PaginationProps {
  currentPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

export default function Pagination({
  currentPage,
  totalPosts,
  paginate,
}: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / POSTPERPAGE); i++) {
    pageNumbers.push(i);
  }

  const handleLeftArrowClick = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  const handleRightArrowClick = () => {
    if (currentPage < pageNumbers.length) paginate(currentPage + 1);
  };
  console.log(currentPage);
  return (
    <nav className="flex justify-center items-center">
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={{ fontSize: "24px" }}
        className={`text-navy hover:text-blue px-4 py-2 cursor-pointer ${
          currentPage <= 1 ? "hover:cursor-not-allowed" : ""
        }`}
        onClick={handleLeftArrowClick}
      />
      <ul className="flex justify-center items-center">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              className="text-navy hover:text-blue px-4 py-2 cursor-pointer"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <FontAwesomeIcon
        icon={faArrowRight}
        style={{ fontSize: "24px" }}
        className={`text-navy hover:text-blue px-4 py-2 cursor-pointer ${
          currentPage >= pageNumbers.length ? "hover:cursor-not-allowed" : ""
        }`}
        onClick={handleRightArrowClick}
      />
    </nav>
  );
}
