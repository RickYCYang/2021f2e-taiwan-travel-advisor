import { useState } from "react";
import { useQuery } from "react-query";
import {
  getRestaurants,
  getRestaurantsByCity,
  getRestaurantsByKeyword,
} from "api/restaurant";

// components
import RestaurantThumbnail from "./RestaurantThumbnail";

const RestaurantCollection = ({ city, defaultCount, keyword }) => {
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
    <h1>Loading...</h1>
  ) : error ? (
    <h1>{error.message}</h1>
  ) : (
    <>
      <div className="flex flex-wrap gap-x-2 gap-y-12 mb-12">
        {data.map((restaurant) => (
          <RestaurantThumbnail restaurant={restaurant} key={restaurant.ID} />
        ))}
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
  );
};

export default RestaurantCollection;
