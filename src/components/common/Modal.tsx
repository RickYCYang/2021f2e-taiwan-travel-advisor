import { useState, useEffect } from "react";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import { useSelector, useDispatch } from "react-redux";
import useWindowSize from "hooks/useWindowSize";
import { closeModal, modalSelector, modalState } from "redux/slices/modalSlice";
import { scrollSelector } from "redux/slices/scrollSlice";
// components
import {
  CaretRightFilled,
  CaretLeftFilled,
  ClockCircleOutlined,
  CloseOutlined,
  MoneyCollectOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { LocationMarkerIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import PerfectScrollbar from "react-perfect-scrollbar";
// assets
import altImage from "assets/images/alt.jpeg";

const Modal: React.FC = () => {
  const {
    show,
    photos,
    title,
    description,
    phone,
    address,
    city,
    time,
    cycle,
    nonCycle,
    charge,
    website,
    position,
  }: modalState = useSelector(modalSelector);
  const { scrollTop } = useSelector(scrollSelector);
  const dispatch = useDispatch();

  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const size = useWindowSize();

  // Toggle photo
  const togglePhoto = (direction: string): void => {
    const num = direction === "forward" ? 2 : -2;
    const index =
      (photoIndex + num) % photos.length < 0
        ? photos.length - 2
        : (photoIndex + num) % photos.length;
    setPhotoIndex(index);
  };

  ///Reset photoIndex if modal has been closed
  useEffect(() => {
    if (!show) {
      setPhotoIndex(0);
    }
  }, [show]);

  return (
    <>
      {show && (
        <div
          data-testid="modalBg"
          className="fixed z-30 -inset-10 bg-gray-500 bg-opacity-30 backdrop-blur w-100vw h-100vh overflow-hidden"
        ></div>
      )}
      <button
        data-testid="closeModalBtn"
        style={{ top: `${scrollTop - (size.width || 1024 > 414 ? 90 : 30)}px` }}
        className={`absolute left-[calc(50%+170px)] transform transition duration-700  
                  ${show ? "opacity-100 z-50" : "opacity-0 z-n1"}
                  md:left-[calc(50%+290px)] lg:left-[calc(50%+340px)]
                  `}
        onClick={() => dispatch(closeModal())}
      >
        <CloseOutlined className=" bg-custom-pink text-white p-2 md:p-3 lg:p-5 rounded-lg font-extrabold" />
      </button>
      <div
        data-testid="modal"
        style={{ top: `${scrollTop - (size.width || 1024 > 414 ? 90 : 30)}px` }}
        className={`absolute left-[calc(50%-170px)] w-[340px] h-[650px] duration-700 shadow-xl
                  bg-white rounded-lg p-4 transform transition
                    ${
                      show ? "opacity-100 z-40" : "opacity-0 z-n1"
                    } overflow-auto 
                    md:p-8 md:left-[calc(50%-280px)] md:w-[560px] lg:left-[calc(50%-338px)] lg:w-[676px] lg:h-[750px]   
                  `}
      >
        <PerfectScrollbar className="flex flex-col gap-y-4">
          <div className="block h-[300px] lg:h-[480px]">
            {
              /// If there is no photo, render the default picture
              photos.length > 0 ? (
                <img
                  className={`lazyload rounded block h-[300px] w-full object-cover 
                                    shadow transform transition duration-700 lg:h-[480px]
                                  `}
                  src={photos[photoIndex]}
                  alt={title}
                />
              ) : (
                <img
                  className={`lazyload rounded block h-[300px] w-full object-cover shadow 
                                transform transition duration-700 opacity-100 z-40 lg:h-[480px]
                              `}
                  src={altImage}
                  alt={title}
                />
              )
            }
          </div>
          {photos.filter((photo: string) => photo.includes("https")).length >
            1 && (
            <div className="text-right">
              <button>
                <CaretLeftFilled
                  className="bg-white text-black leading-none align-middle shadow hover:cursor-pointer
                                w-8 h-8 rounded-lg flex items-center justify-center mr-4"
                  onClick={() => togglePhoto("backward")}
                />
              </button>
              <button>
                <CaretRightFilled
                  className="bg-black text-white leading-none align-middle shadow cursor-pointer
                                w-8 h-8 rounded-lg flex items-center justify-center"
                  onClick={() => togglePhoto("forward")}
                />
              </button>
            </div>
          )}
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="text-lg font-semibold text-custom-pink flex items-center gap-2"
          >
            {title}
            {website && (
              <ExternalLinkIcon className=" text-custom-pink w-5 align-middle" />
            )}
          </a>
          <p className="text-sm">{description}</p>
          <div className="flex flex-col md:flex-row">
            <h6 className="flex items-center md:w-2/3">
              <ClockCircleOutlined className=" text-custom-pink w-5 align-middle mr-3" />
              {nonCycle ? nonCycle : cycle ? cycle : time.slice(0, 10)}
            </h6>
            {charge && (
              <h6 className="flex items-center md:w-1/3">
                <MoneyCollectOutlined className=" text-custom-pink w-5 align-middle mr-3" />
                {charge}
              </h6>
            )}
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <a
              href={
                position &&
                `https://www.google.com/maps/?q=${position.PositionLat},${position.PositionLon}`
              }
              target="_blank"
              rel="noreferrer"
              className="flex items-center md:w-2/3 gap-2 hover:text-custom-pink"
            >
              <LocationMarkerIcon className=" text-custom-pink w-5 align-middle" />
              {address || city}
            </a>
            {phone && (
              <h6 className="flex items-center md:w-1/3 hover:text-custom-pink">
                <PhoneOutlined className=" text-custom-pink w-5 align-middle mr-3" />
                <a href={`tel:+${phone}`}>{phone}</a>
              </h6>
            )}
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default Modal;
