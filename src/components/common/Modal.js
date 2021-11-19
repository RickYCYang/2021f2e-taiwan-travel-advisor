import { useState, useEffect } from "react";
import useScrollPosition from "hooks/useScrollPosition";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import {
  CaretRightFilled,
  CaretLeftFilled,
  ClockCircleOutlined,
  CloseOutlined,
  MoneyCollectOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, modalSelector } from "redux/slices/modalSlice";
import altImage from "assets/images/alt.jpeg";

const Modal = () => {
  const {
    show,
    photos,
    title,
    description,
    phone,
    address,
    location,
    time,
    cycle,
    nonCycle,
    charge,
  } = useSelector(modalSelector);
  const dispatch = useDispatch();
  const scrollPosition = useScrollPosition();
  const [photoIndex, setPhotoIndex] = useState(0);

  ///Disable the scrollbar when modal is opening
  if (show) {
    document.body.style.overflow = "hidden";
  }

  ///Close Modal
  const toggleModal = () => {
    dispatch(closeModal());
    document.body.style.overflow = "auto";
  };

  ///Toggle photo
  const togglePhoto = (direction) => {
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
        <div className="fixed z-30 -inset-10 bg-gray-500 bg-opacity-30 backdrop-blur w-100vw h-100vh overflow-hidden"></div>
      )}
      <button
        style={{ top: `${scrollPosition - 80}px` }}
        className={`absolute top-[${scrollPosition}] left-[calc(50%+350px)] transform transition duration-700
        ${show ? "opacity-100 z-40" : "opacity-0 z-n1"}`}
        onClick={toggleModal}
      >
        <CloseOutlined className=" bg-custom-pink text-white p-5 rounded-lg font-extrabold" />
      </button>
      <div
        style={{ top: `${scrollPosition - 80}px` }}
        className={`absolute top-[${scrollPosition}] left-[calc(50%-338px)] w-[676px] max-h-[730px] bg-white rounded p-8 transform transition 
                    duration-700 shadow-xl
                    ${
                      show ? "opacity-100 z-40" : "opacity-0 z-n1"
                    } overflow-auto `}
      >
        <PerfectScrollbar className="space-y-[22px]">
          <div className="relative h-[460px]">
            {
              /// If there is no photo, render the default picture
              photos.length > 0 ? (
                photos
                  .filter((photo) => photo.includes("https"))
                  .map((photo) => (
                    <img
                      className={`absolute inset-0 lazyload rounded block h-[459px] w-full object-cover shadow transform transition duration-700
                        ${
                          photos[photoIndex] === photo
                            ? "opacity-100 z-40"
                            : "opacity-0 z-n1"
                        }`}
                      src={photo}
                      key={photo}
                    />
                  ))
              ) : (
                <img
                  className={`absolute inset-0 lazyload rounded block h-[459px] w-full object-cover shadow transform transition duration-700 opacity-100 z-40`}
                  src={altImage}
                />
              )
            }
          </div>
          {photos.filter((photo) => photo.includes("https")).length > 1 && (
            <div className="text-right">
              <button>
                <CaretLeftFilled
                  className="bg-white text-black leading-none align-middle shadow  w-8 h-8 rounded-lg flex items-center justify-center mr-4  "
                  onClick={() => togglePhoto("backward")}
                />
              </button>
              <button>
                <CaretRightFilled
                  className="bg-black text-white leading-none align-middle shadow w-8 h-8 rounded-lg flex items-center justify-center"
                  onClick={() => togglePhoto("forward")}
                />
              </button>
            </div>
          )}

          <h4 className="text-lg">{title}</h4>
          <p className="text-sm">{description}</p>
          <div className="flex">
            <h6 className="flex items-center w-2/3">
              <ClockCircleOutlined className=" text-custom-pink w-5 align-middle mr-3" />
              {nonCycle ? nonCycle : cycle ? cycle : time.slice(0, 10)}
            </h6>
            {charge && (
              <h6 className="flex items-center w-1/3">
                <MoneyCollectOutlined className=" text-custom-pink w-5 align-middle mr-3" />
                {charge}
              </h6>
            )}
          </div>
          <div className="flex">
            <h6 className="flex items-center w-2/3">
              <LocationMarkerIcon className=" text-custom-pink w-5 align-middle mr-3" />
              {location || address}
            </h6>
            {phone && (
              <h6 className="flex items-center w-1/3">
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
