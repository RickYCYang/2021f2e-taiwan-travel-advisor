import { useState, useEffect } from "react";
import useQueryParam from "hooks/useQueryParam";
// components
import Banner from "components/common/Banner";
import Activities from "components/activity/Activities";
import ScenicSpots from "components/scenicspot/ScenicSpots";
import Restaurants from "components/restautant/Restaurants";
import Hotels from "components/hotel/Hotels";

const Search = () => {
  const queryParam = useQueryParam();
  const queryKeyword = queryParam.get("q");
  const [keyword, setKeyword] = useState(queryKeyword);

  useEffect(() => {
    setKeyword(queryKeyword);
  }, [queryKeyword]);

  return (
    <main className="space-y-[80px] pb-20 relative overflow-hidden">
      <Banner className="bg-home" />
      <Activities keyword={keyword} />
      <ScenicSpots keyword={keyword} />
      <Restaurants keyword={keyword} />
      <Hotels keyword={keyword} />
    </main>
  );
};

export default Search;
