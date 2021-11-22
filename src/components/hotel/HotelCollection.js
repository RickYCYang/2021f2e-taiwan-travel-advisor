import { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { openModal } from "redux/slices/modalSlice";

// api
import { getHotels, getHotelsByCity, getHotelsByKeyword } from "api/hotel";

// components
import WarningMsg from "components/common/WarningMsg";
import Loading from "components/common/Loading";
import Card from "components/common/Card";
import Button from "components/common/Button";

const HotelCollection = ({ city, defaultCount, keyword }) => {
  const [hotelCount, setHotelCount] = useState(defaultCount || 10);
  const dispatch = useDispatch();
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
    <Loading />
  ) : error ? (
    <WarningMsg message={error.message} />
  ) : data.length > 0 ? (
    <>
      <div className="flex flex-wrap gap-x-2 gap-y-6 md:gap-y-12 mb-6 md:mb-12">
        {data.map((hotel) => {
          const payload = {
            photos: Object.values(hotel.Picture) || [],
            thumbnail: hotel.Picture.PictureUrl1,
            title: hotel.Name,
            description: hotel.Description,
            phone: hotel.Phone,
            address: hotel.Address,
            class1: hotel.Class,
            time: hotel.SrcUpdateTime,
          };
          return (
            <Card
              key={hotel.ID}
              title={payload.title}
              address={payload.address}
              picture={payload.thumbnail}
              onClick={() => dispatch(openModal(payload))}
            />
          );
        })}
      </div>
      {data.length < hotelCount ? (
        ""
      ) : (
        <div className="text-center">
          <Button onClick={loadMoreHotel} title={"Load More"} />
        </div>
      )}
    </>
  ) : (
    <WarningMsg />
  );
};

export default HotelCollection;
