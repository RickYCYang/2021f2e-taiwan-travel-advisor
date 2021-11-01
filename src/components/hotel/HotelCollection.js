import { getHotels } from "api/hotel";
import { useQuery } from "react-query";
import HotelThumbnail from "components/hotel/HotelThumbnail";

const HotelCollection = () => {
  const { isLoading, error, data } = useQuery(["useQueries", 23], () =>
    getHotels(22)
  );

  return isLoading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>{error.message}</h1>
  ) : (
    <div className="flex flex-wrap gap-x-2 gap-y-12">
      {data
        .filter((hotel) => Object.keys(hotel.Picture).length > 0)
        .map((hotel) => (
          <HotelThumbnail hotel={hotel} key={hotel.ID} />
        ))}
    </div>
  );
};

export default HotelCollection;
