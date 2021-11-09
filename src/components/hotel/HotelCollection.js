import { useState } from "react";

import { getHotels, getHotelsByCity } from "api/hotel";
import { useQuery } from "react-query";
import HotelThumbnail from "components/hotel/HotelThumbnail";

const getApi = (city) => {
  if (!city) {
    return { apiKey: "getHotels", apiFunc: getHotels };
  } else {
    return {
      apiKey: `getHotelsByCity/${city}`,
      apiFunc: getHotelsByCity,
    };
  }
};

const HotelCollection = ({ city, defaultCount }) => {
  const [hotelCount, setHotelCount] = useState(defaultCount || 10);
  const { apiKey, apiFunc } = getApi(city);
  const { isLoading, error, data } = useQuery([apiKey, hotelCount], () =>
    apiFunc(hotelCount, city)
  );

  const loadMoreHotel = () => {
    setHotelCount(hotelCount + 10);
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>{error.message}</h1>
  ) : (
    <>
      <div className="flex flex-wrap gap-x-2 gap-y-12 mb-12">
        {data.map((hotel) => (
          <HotelThumbnail hotel={hotel} key={hotel.ID} />
        ))}
      </div>
      <div className="text-center">
        <button
          className="text-sm cursor-pointer bg-custom-pink text-white px-5 py-2 rounded-lg shadow hover:bg-white 
                          hover:text-custom-pink hover:border hover:border-custom-pink"
          onClick={loadMoreHotel}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default HotelCollection;
