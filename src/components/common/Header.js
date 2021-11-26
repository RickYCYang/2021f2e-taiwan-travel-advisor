import { Link } from "react-router-dom";
import { CaretUpOutlined, CloudFilled, YuqueFilled } from "@ant-design/icons";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-white">
      <nav
        className="relative container m-auto py-3 flex justify-center items-center 
                  md:justify-between md:items-end md:py-[17px] md:px-10 
                  lg:pt-[29px] lg:pb-[18px] "
      >
        <h1>
          <Link to="/" className="logo" alt="Taiwan Tourguide">
            Taiwan Tourguide
          </Link>
        </h1>
        <ul className="hidden md:flex md:space-x-[17px]">
          <li>
            <Link to="/scenicspot" className="nav-link text-custom-pink">
              <div className="nav-icon bg-custom-pink ">
                <CaretUpOutlined className="text-white" />
              </div>
              景點
            </Link>
          </li>
          <li>
            <Link to="/activity" className="nav-link text-purple-600">
              <div className="nav-icon bg-purple-600 ">
                <YuqueFilled className="text-white" />
              </div>
              活動
            </Link>
          </li>
          <li>
            <Link to="/restaurant" className="nav-link text-custom-yellow">
              <div className="nav-icon bg-custom-yellow">
                <svg width="9" height="9">
                  <rect width="9" height="9" fill="white" />
                </svg>
              </div>
              美食
            </Link>
          </li>
          <li>
            <Link to="/hotel" className="nav-link text-blue-500">
              <div className="nav-icon bg-blue-500 ">
                <CloudFilled className="text-white" />
              </div>
              住宿
            </Link>
          </li>
          <li>
            <Link to="/traffic" className="nav-link text-custom-green">
              <div className="nav-icon bg-custom-green">
                <svg width="10" height="10">
                  <circle cx="50%" cy="50%" r="5" fill="white" />
                </svg>
              </div>
              交通
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
