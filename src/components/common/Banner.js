import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setKeyword,
  toggleCategory,
  toggleCity,
  searchSelector,
} from "redux/slices/searchSlice";
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
  /// Create selector options pool
  const selectCities = createOptions(cities, { label: "不分縣市", value: "" });
  const selectCategories = createOptions(categories, {
    label: "類別",
    value: null,
  });
  const dispatch = useDispatch();

  /// local temproal state
  const [tmpKeyword, setTmpKeyword] = useState();
  const [tmpCategory, setTmpCategory] = useState(selectCategories[0]);
  const [tmpCity, setTmpCity] = useState(selectCities[0]);

  /// Global states, set these states after click search button
  const { keyword, category, city } = useSelector(searchSelector);

  // useEffect(() => {
  //   dispatch(toggleCategory(selectCategories[0]));
  //   dispatch(toggleCity(selectCities[0]));
  // }, []);

  const categorySearch = () => {
    console.log("tmpCategory", tmpCategory);
    if (!tmpCategory.value) {
      return alert("請選擇類別");
    }
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
              onChange={(e) =>
                //dispatch(pressKeyword({ payload: e.target.value }))
                setTmpKeyword(e.target.value)
              }
              value={tmpKeyword}
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
              value={tmpCategory}
              defaultValue={selectCategories[0]}
              onChange={
                //(e) => dispatch(toggleCategory(e))
                (e) => setTmpCategory(e)
              }
            />
            <Select
              className="flex-grow tracking-wider"
              options={selectCities}
              value={tmpCity}
              defaultValue={selectCities[0]}
              onChange={
                //(e) => dispatch(toggleCity(e))
                (e) => setTmpCity(e)
              }
            />
            <button
              className="bg-custom-yellow h-10 w-10 rounded"
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
