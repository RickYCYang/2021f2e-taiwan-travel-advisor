import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// components
import { SearchIcon } from "@heroicons/react/solid";
import Selector from "./Selector";
import MobileNavbar from "components/common/MobileNavbar";
// constant
import cities from "const/cities";
import categories from "const/categories";
// utils
import { createOptions } from "utils/option";
import {
  getLocalStorageWithExpiry,
  setLocalStorageWithExpiry,
} from "utils/localStorage";

const Banner = ({ className, search }) => {
  const history = useHistory();
  const location = useLocation();
  /// Create selector options pool
  const selectCities = createOptions(cities, {
    label: "不分縣市",
    value: null,
  });
  const selectCategories = createOptions(categories, {
    label: "類別",
    value: null,
  });
  /// local temproal state
  const [keyword, setKeyword] = useState(search);
  const [category, setCategory] = useState(selectCategories[0]);
  const [city, setCity] = useState(selectCities[0]);
  const [searchHistory, setSearchHistory] = useState(
    getLocalStorageWithExpiry("searchHistory")
      ? getLocalStorageWithExpiry("searchHistory").split(",")
      : []
  );

  const categorySearch = () => {
    history.push(`/${category.value}/${city.value}`);
  };

  const keywordSearch = () => {
    if (!searchHistory.includes(keyword)) {
      setSearchHistory([...searchHistory, keyword]);
      setLocalStorageWithExpiry(
        "searchHistory",
        [...searchHistory, keyword].toString()
      );
    }
    history.push(`/search?q=${keyword}`);
  };

  return (
    <section className="bg-white md:bg-[#F6F7FB] lg:bg-white pb-5 px-3 md:px-[27px] md:py-[40px] relative lg:after:shadow-corner-l lg:before:shadow-corner-r lg:shadow-sm lg:py-[23px] lg:mb-[90px] ">
      <div
        className={`${className} lg:bg-cover lg:bg-no-repeat lg:bg-center w-full lg:min-h-[490px] flex justify-center items-center z-10`}
      >
        <div className="flex flex-col justify-center items-stretch">
          <div className="mb-4 hidden lg:block">
            <h2 className="text-white font-bold text-[50px] leading-[70px]">
              Welcome to <span className="text-custom-pink">Taiwan°</span>
            </h2>
            <h6 className="text-white text-sm">
              台北、台中、台南、屏東、宜蘭……遊遍台灣
            </h6>
          </div>
          {/* Below div won't show in mobile */}
          <div className="hidden md:flex justify-between space-x-[6px] mb-[10px]">
            <input
              type="text"
              placeholder="搜尋關鍵字"
              onChange={(e) =>
                //dispatch(pressKeyword({ payload: e.target.value }))
                setKeyword(e.target.value)
              }
              value={keyword}
              list="searchHistory"
              className="w-[383px] text-sm lg:text-base pl-6 py-2 text-gray-500 rounded-lg flex-grow tracking-wide shadow-lg"
            ></input>
            <datalist id="searchHistory">
              {searchHistory.map((item) => (
                <option value={item} key={item} />
              ))}
            </datalist>
            <button
              className="bg-custom-pink w-10 rounded-md"
              onClick={keywordSearch}
            >
              <SearchIcon className="w-4 h-4 text-white m-auto" />
            </button>
          </div>
          {/* Below ul shows in mobile only */}
          <MobileNavbar />
          <div className="flex space-x-[6px] items-stretch">
            <Selector
              className="tracking-wider flex-grow text-sm lg:text-base"
              options={selectCategories}
              value={category}
              defaultValue={selectCategories[0]}
              onChange={(e) => setCategory(e)}
            />
            <Selector
              className="tracking-wider flex-grow text-sm lg:text-base"
              options={selectCities}
              value={city}
              defaultValue={selectCities[0]}
              onChange={(e) => setCity(e)}
            />
            <button
              className="bg-custom-yellow w-10 rounded-md"
              onClick={categorySearch}
            >
              <SearchIcon className="w-4 h-4 text-white m-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
