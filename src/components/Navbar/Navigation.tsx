import { Icon } from "../../images/icons/Icons";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  const goToPreviousPage = () => {
    if (location.pathname !== "/") {
      navigate(-1);
    }
  };

  const goToNextPage = () => {
    navigate(1);
  };

  return (
    <nav className="flex items-center gap-x-4 ">
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
        onClick={goToPreviousPage}
      >
        <Icon name="prev" size="22" />
      </button>
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
        onClick={goToNextPage}
      >
        <Icon name="next" size="22" />
      </button>
    </nav>
  );
}
