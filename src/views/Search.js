import { useState, useEffect } from "react";
import useQueryParam from "hooks/useQueryParam";
// components
import Banner from "components/common/Banner";
import Activities from "components/activity/Activities";
import ScenicSpots from "components/scenicspot/ScenicSpots";
import Restaurants from "components/restautant/Restaurants";
import Hotels from "components/hotel/Hotels";
import Main from "components/common/Main";

const Search = () => {
  const queryParam = useQueryParam();
  const queryKeyword = queryParam.get("q");
  const [keyword, setKeyword] = useState(queryKeyword);

  useEffect(() => {
    setKeyword(queryKeyword);
  }, [queryKeyword]);

  return (
    <Main>
      <Banner className="bg-search" search={keyword} />
      <Activities keyword={keyword} />
      <ScenicSpots keyword={keyword} />
      <Restaurants keyword={keyword} />
      <Hotels keyword={keyword} />
    </Main>
  );
};

export default Search;
