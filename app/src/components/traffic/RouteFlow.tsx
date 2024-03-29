import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { routeSelector } from 'redux/slices/routeSlice';
import { getHoursAndMinuteStr, addSeconds } from 'utils/dateTime';
import useWindowSize from 'hooks/useWindowSize';
// components
import Container from 'components/common/Container';

type size = {
  width: number | undefined;
};

type StopName = {
  En: string;
  Zh_tw: string;
};

type StopPosition = {
  GeoHash: string;
  PositionLat: number;
  PositionLon: number;
};

type stop = {
  StationID: string;
  StopBoarding: number;
  StopID: string;
  StopName: StopName;
  StopPosition: StopPosition;
  StopSequence: number;
  StopUID: string;
  estimateTime: number | undefined;
  stopStatus: number;
};

const RouteFlow = () => {
  const date = new Date();
  const { stops } = useSelector(routeSelector);
  const [maxHeight, setMaxHeight] = useState<string>('1000px');
  const { width }: size = useWindowSize();

  useEffect(() => {
    if (stops.length > 0 && (width || 1024) > 414) {
      setMaxHeight(`${(stops.length / 2) * 80}px`);
    } else {
      setMaxHeight(`${stops.length * 100}px`);
    }
  }, [stops, width]);

  return (
    <Container>
      <p className="text-sm md:text-base text-custom-pink text-right mb-3">
        *每隔15秒自動更新
      </p>
      <div
        className="bg-white relative after:shadow-corner-l before:shadow-corner-r p-6 md:p-14"
        data-testid="routeFlow"
      >
        {stops.length > 0 ? (
          <div
            className={`flex flex-col flex-wrap gap-8`}
            style={{ maxHeight: maxHeight }}
          >
            {stops.map((stop: stop) => {
              return (
                <div
                  className="w-full flex justify-start items-center gap-6 md:w-1/2 lg:gap-12"
                  key={stop.StationID}
                >
                  {stop.estimateTime ? (
                    <h6 className="border-2 border-black px-4 py-2 rounded-lg w-1/3 text-center md:px-8 md:w-1/2">
                      {getHoursAndMinuteStr(
                        addSeconds(date, stop.estimateTime)
                      )}
                    </h6>
                  ) : (
                    <h6 className="border-2 border-gray-400 text-gray-400 px-4 py-2 rounded-lg w-1/3 text-center md:px-8 md:w-1/2">
                      未發車
                    </h6>
                  )}
                  <h6 className="w-1/2">{stop.StopName.Zh_tw}</h6>
                </div>
              );
            })}
          </div>
        ) : (
          <h3 className="text-gray-400">請選擇公車路線</h3>
        )}
      </div>
    </Container>
  );
};

export default RouteFlow;
