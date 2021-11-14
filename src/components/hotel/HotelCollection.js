import { useState } from "react";

import { getHotels, getHotelsByCity, getHotelsByKeyword } from "api/hotel";
import { useQuery } from "react-query";
import HotelThumbnail from "components/hotel/HotelThumbnail";
import WarningMsg from "components/common/WarningMsg";

const HotelCollection = ({ city, defaultCount, keyword }) => {
  const [hotelCount, setHotelCount] = useState(defaultCount || 10);
  const { isLoading, error, data } = useQuery(
    [
      city
        ? `getHotelsByCity/${city}`
        : keyword
        ? `getHotelsByKeyword/${keyword}`
        : "getHotels",
      hotelCount,
    ],
    () =>
      city
        ? getHotelsByCity(hotelCount, city)
        : keyword
        ? getHotelsByKeyword(hotelCount, keyword)
        : getHotels(hotelCount)
  );

  const loadMoreHotel = () => {
    setHotelCount(hotelCount + 10);
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>{error.message}</h1>
  ) : data.length > 0 ? (
    <>
      <div className="flex flex-wrap gap-x-2 gap-y-12 mb-12">
        {data.map((hotel) => (
          <HotelThumbnail hotel={hotel} key={hotel.ID} />
        ))}
      </div>
      {data.length < hotelCount ? (
        ""
      ) : (
        <div className="text-center">
          <button
            className="text-sm cursor-pointer bg-custom-pink text-white px-5 py-2 rounded-lg shadow hover:bg-white 
                          hover:text-custom-pink hover:border hover:border-custom-pink"
            onClick={loadMoreHotel}
          >
            Load More
          </button>
        </div>
      )}
    </>
  ) : (
    <WarningMsg />
  );
};

export default HotelCollection;
