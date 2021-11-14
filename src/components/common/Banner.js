import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// third-party components
import { SearchIcon } from "@heroicons/react/solid";
import Select from "react-select";
// constant
import cities from "const/cities";
import categories from "const/categories";
// utils
import { createOptions } from "utils/option";

const Banner = ({ className, search }) => {
  const history = useHistory();
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

  const categorySearch = () => {
    history.push(`/${category.value}/${city.value}`);
  };

  const keywordSearch = () => {
    history.push(`/search?q=${keyword}`);
  };

  return (
    <section className="bg-white px-[27px] py-[23px] mb-[90px] relative after:shadow-corner-l before:shadow-corner-r shadow-sm">
      <div
        className={`${className} bg-cover bg-no-repeat bg-center w-full min-h-[490px] flex justify-center items-center`}
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
              onChange={(e) =>
                //dispatch(pressKeyword({ payload: e.target.value }))
                setKeyword(e.target.value)
              }
              value={keyword}
              list="euroCountries"
              className="pl-6 py-2 text-gray-500 rounded-lg flex-grow tracking-wide"
            ></input>
            <datalist id="euroCountries">
              <option value="Austria" />
              <option value="Belgium" />
              <option value="Czech Republic" />
              <option value="Denmark" />
              <option value="Estonia" />
              <option value="France" />
              <option value="Germany" />
            </datalist>
            <button
              className="bg-[#FF1D6C] w-10 rounded-md"
              onClick={keywordSearch}
            >
              <SearchIcon className="w-4 h-4 text-white m-auto" />
            </button>
          </div>
          <div className="flex space-x-[6px] items-stretch">
            <Select
              className="flex-grow"
              options={selectCategories}
              value={category}
              defaultValue={selectCategories[0]}
              onChange={
                //(e) => dispatch(toggleCategory(e))
                (e) => setCategory(e)
              }
            />
            <Select
              className="flex-grow tracking-wider"
              options={selectCities}
              value={city}
              defaultValue={selectCities[0]}
              onChange={
                //(e) => dispatch(toggleCity(e))
                (e) => setCity(e)
              }
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
