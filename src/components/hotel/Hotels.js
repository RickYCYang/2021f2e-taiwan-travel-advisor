import { useState } from "react";
import { useQuery } from "react-query";

// api
import { getHotels, getHotelsByCity, getHotelsByKeyword } from "api/hotel";

// components
import SubTitle from "../common/SubTitle";
import CardCollection from "components/common/CardCollection";
import Modal from "components/common/Modal";
import Container from "components/common/Container";
import Button from "components/common/Button";
import WarningMsg from "components/common/WarningMsg";
import Loading from "components/common/Loading";

const Hotels = ({ city, defaultCount, keyword }) => {
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

  return (
    <Container>
      <SubTitle subTitle="推薦住宿" icon="cloud" />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <WarningMsg message={error.message} />
      ) : data.length > 0 ? (
        <>
          <CardCollection data={data} />
          {data.length >= hotelCount && (
            <div className="text-center">
              <Button onClick={loadMoreHotel} title={"Load More"} />
            </div>
          )}
        </>
      ) : (
        <WarningMsg />
      )}
      <Modal />
    </Container>
  );
};

export default Hotels;
