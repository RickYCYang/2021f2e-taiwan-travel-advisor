import { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { openModal } from "redux/slices/modalSlice";

// api
import {
  getRestaurants,
  getRestaurantsByCity,
  getRestaurantsByKeyword,
} from "api/restaurant";

// components
import WarningMsg from "components/common/WarningMsg";
import Loading from "components/common/Loading";
import Card from "components/common/Card";

const RestaurantCollection = ({ city, defaultCount, keyword }) => {
  const dispatch = useDispatch();
  const [restaurantCount, setRestaurantCount] = useState(defaultCount || 10);
  const { isLoading, error, data } = useQuery(
    [
      city
        ? `getRestaurantsByCity/${city}`
        : keyword
        ? `getRestaurantsByKeyword/${keyword}`
        : "getRestaurants",
      restaurantCount,
    ],
    () =>
      city
        ? getRestaurantsByCity(restaurantCount, city)
        : keyword
        ? getRestaurantsByKeyword(restaurantCount, keyword)
        : getRestaurants(restaurantCount)
  );

  const loadMoreRestaurant = () => {
    setRestaurantCount(restaurantCount + 10);
  };

  return isLoading ? (
    <Loading />
  ) : error ? (
    <WarningMsg message={error.message} />
  ) : data.length > 0 ? (
    <>
      <div className="flex flex-wrap gap-x-2 gap-y-12 mb-12">
        {data.map((restaurant) => {
          const payload = {
            photos: Object.values(restaurant.Picture) || [],
            thumbnail: restaurant.Picture.PictureUrl1,
            title: restaurant.Name,
            description: restaurant.Description,
            phone: restaurant.Phone,
            address: restaurant.Address,
            time: restaurant.SrcUpdateTime,
          };
          return (
            <Card
              key={restaurant.ID}
              title={payload.title}
              address={payload.address}
              picture={payload.thumbnail}
              onClick={() => dispatch(openModal(payload))}
            />
          );
        })}
      </div>
      {data.length < restaurantCount ? (
        ""
      ) : (
        <div className="text-center">
          <button
            className="text-sm cursor-pointer bg-custom-pink text-white px-5 py-2 rounded-lg shadow hover:bg-white 
                      hover:text-custom-pink hover:border hover:border-custom-pink"
            onClick={loadMoreRestaurant}
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

export default RestaurantCollection;
