import { CaretUpOutlined } from "@ant-design/icons";

const SubTitle = ({ subTitle, icon }) => {
  let iconComponent = null;

  if (icon === "triangle") {
    iconComponent = (
      <CaretUpOutlined className="text-custom-pink mr-4 text-[30px]" />
    );
  } else if (icon === "rectangle") {
    iconComponent = (
      <svg width="20" height="20" className="mr-4">
        <rect width="20" height="20" fill="#FFB72C" />
      </svg>
    );
  }

  return (
    <h2 className="flex items-center text-xl mb-3">
      {iconComponent}
      {subTitle}
    </h2>
  );
};

export default SubTitle;
