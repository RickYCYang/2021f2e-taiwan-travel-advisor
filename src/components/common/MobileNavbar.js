import categories from "const/categories";
import { useHistory, useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <ul className="flex flex-nowrap justify-between items-center space-x-10 rounded-lg shadow-lg border border-gray-100 px-3 mb-3 text-sm w-full bg-white md:hidden">
      {categories.map((item) => (
        <li
          className={`py-2 hover:text-custom-pink ${
            location.pathname === "/" + item.value ? "text-custom-pink" : ""
          }`}
          key={"smNav-" + item.value}
          onClick={(e) => {
            history.push(`/${item.value}`);
          }}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default MobileNavbar;
