import { useState } from "react";

import { getHotels } from "api/hotel";
import { useQuery } from "react-query";
import HotelThumbnail from "components/hotel/HotelThumbnail";

const HotelCollection = ({ defaultCount }) => {
  const [hotelCount, setHotelCount] = useState(defaultCount || 10);

  const { isLoading, error, data } = useQuery(["useQueries", hotelCount], () =>
    getHotels(hotelCount)
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
        {data
          .filter((hotel) => Object.keys(hotel.Picture).length > 0)
          .map((hotel) => (
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
