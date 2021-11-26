// components
import { CaretUpOutlined, CloudFilled } from "@ant-design/icons";

const SubTitle = ({ subTitle, icon }) => {
  let iconComponent = getIconComponent(icon);
  return (
    <h2 className="flex items-center text-sm lg:text-xl mb-3">
      {iconComponent}
      {subTitle}
    </h2>
  );
};

const getIconComponent = (icon) => {
  switch (icon) {
    case "triangle":
      return <CaretUpOutlined className="text-custom-pink mr-4 text-[30px]" />;
    case "rectangle":
      return (
        <svg width="20" height="20" className="mr-6">
          <rect width="20" height="20" fill="#FFB72C" />
        </svg>
      );
    case "cloud":
      return <CloudFilled className="text-blue-500 mr-4 text-[30px]" />;
    default:
      return <CaretUpOutlined className="text-custom-pink mr-4 text-[30px]" />;
  }
};

export default SubTitle;
