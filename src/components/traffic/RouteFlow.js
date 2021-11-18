import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { routeSelector } from "redux/slices/routeSlice";
import { getHoursAndMinuteStr, addSeconds } from "utils/dateTime";
// components
import Container from "components/common/Container";

const RouteFlow = () => {
  const date = new Date();
  const { stops } = useSelector(routeSelector);
  const [maxHeight, setMaxHeight] = useState("1000px");

  useEffect(() => {
    if (stops.length > 0) {
      console.log("stops", stops);

      setMaxHeight(`${(stops.length / 2) * 80}px`);
    }
  }, [stops]);

  return (
    <Container>
      <p className="text-custom-pink text-right mb-3">*每隔15秒自動更新</p>
      <div
        className={
          "bg-white relative after:shadow-corner-l before:shadow-corner-r p-14"
        }
      >
        {stops.length > 0 ? (
          <div
            className={`flex flex-col flex-wrap gap-8`}
            style={{ maxHeight: maxHeight }}
          >
            {stops.map((stop) => (
              <div
                className="w-1/2 flex gap-12 justify-start items-center"
                key={stop.StationID}
              >
                {stop.estimateTime ? (
                  <h6 className="border-2 border-black px-8 py-2 rounded-lg w-1/2 text-center">
                    {getHoursAndMinuteStr(addSeconds(date, stop.estimateTime))}
                  </h6>
                ) : (
                  <h6 className="border-2 border-gray-400 text-gray-400 px-8 py-2 rounded-lg w-1/2 text-center">
                    未發車
                  </h6>
                )}
                <h6 className="w-1/2">{stop.StopName.Zh_tw}</h6>
              </div>
            ))}
          </div>
        ) : (
          <h3 className="text-gray-400">請選擇公車路線</h3>
        )}
      </div>
    </Container>
  );
};

export default RouteFlow;
