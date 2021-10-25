import React, { useState } from "react";
// third-party components
import { SearchIcon } from "@heroicons/react/solid";
import Select from "react-select";
// constant
import cities from "const/cities";
import categories from "const/categories";

const createOptions = (options, firstOption) => {
  const selectOptions = options.slice();
  selectOptions.unshift(firstOption);
  return selectOptions;
};

const Banner = ({ bgImageClass }) => {
  const selectCities = createOptions(cities, { label: "不分縣市", value: "" });
  const selectCategories = createOptions(categories, {
    label: "類別",
    value: "",
  });
  const [city, setCity] = useState(selectCities[0]);
  const [category, setCategory] = useState(selectCategories[0]);

  const toggleCity = (e) => {
    setCity(e);
  };

  const toggleCategory = (e) => {
    setCategory(e);
  };

  return (
    <section className="bg-white px-[27px] py-[23px] mb-[90px] relative after:shadow-corner-l before:shadow-corner-r">
      <div
        className={`${bgImageClass} bg-cover bg-no-repeat bg-center w-full min-h-[490px] flex justify-center items-center`}
      >
        <div className="flex flex-col justify-center items-stretch">
          <div className="mb-4">
            <h2 className="text-white font-bold text-[50px] leading-[70px]">
              Welcome to <span className="text-[#FF1D6C]">Taiwan°</span>
            </h2>
            <h6 className="text-white text-sm">
              台北、台中、台南、屏東、宜蘭……遊遍台灣
            </h6>
          </div>
          <div className="flex justify-between space-x-[6px] mb-[10px]">
            <input
              type="text"
              placeholder="搜尋關鍵字"
              className="pl-6 py-2 text-gray-500 rounded-lg flex-grow tracking-wide"
            ></input>
            <button className="bg-[#FF1D6C] h-10 w-10 rounded">
              <SearchIcon className="w-4 h-4 text-white m-auto" />
            </button>
          </div>
          <div className="flex space-x-[6px] items-stretch">
            <Select
              className="flex-grow"
              options={selectCategories}
              value={category}
              defaultValue={selectCategories[0]}
              onChange={toggleCategory}
            />
            <Select
              className="flex-grow tracking-wider"
              options={selectCities}
              value={city}
              defaultValue={selectCities[0]}
              onChange={toggleCity}
            />
            <button className="bg-[#FFB72C] h-10 w-10 rounded">
              <SearchIcon className="w-4 h-4 text-white m-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
