import { useNavigate } from "react-router-dom";

export const ChevronLeft = () => {
  const navigate = useNavigate();
  const handleclick = () => navigate("/");
  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      onClick={handleclick}
    >
      <svg
        height="1em"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.41 17.09L10.83 12.5L15.41 7.91L14 6.5L8 12.5L14 18.5L15.41 17.09Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
