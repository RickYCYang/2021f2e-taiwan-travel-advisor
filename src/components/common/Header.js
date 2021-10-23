import { Link } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="bg-white">
      <nav
        className="relativ container m-auto py-3 flex justify-center items-center 
                  md:justify-between md:items-end md:py-[17px] 
                  lg:pt-[29px] lg:pb-[18px]"
      >
        <h1>
          <Link to="/" className="logo" alt="Taiwan Tourguide">
            Taiwan Tourguide
          </Link>
        </h1>
        <button className="absolute right-[16px] bg-custom-pink h-[30px] w-[30px] rounded md:hidden">
          <SearchIcon className="w-4 h-4 text-white m-auto" />
        </button>

        <ul className="hidden md:flex space-x-[17px]">
          <li>
            <Link to="/attraction" className="nav-link text-custom-pink">
              <div className="nav-icon bg-custom-pink ">
                <div className="border-triangle-white-1"></div>
              </div>
              台灣景點
            </Link>
          </li>
          <li>
            <Link to="/food" className="nav-link text-custom-yellow">
              <div className="nav-icon bg-custom-yellow">
                <svg width="9" height="9">
                  <rect width="9" height="9" fill="white" />
                </svg>
              </div>
              美食住宿
            </Link>
          </li>
          <li>
            <Link to="/traffic" className="nav-link text-custom-green">
              <div className="nav-icon bg-custom-green">
                <svg width="10" height="10">
                  <circle cx="50%" cy="50%" r="5" fill="white" />
                </svg>
              </div>
              景點交通
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
