import { CaretUpOutlined, CloudFilled } from "@ant-design/icons";
import Container from "./Container";

const Rectangle = ({ className }) => {
  return (
    <svg width="20" height="20" className={className}>
      <rect width="20" height="20" fill="#FFB72C" />
    </svg>
  );
};

const Circle = ({ className }) => {
  return (
    <svg width="30" height="30" className={className}>
      <circle cx="50%" cy="50%" r="10" fill="#007350" />
    </svg>
  );
};

const Loading = () => {
  return (
    <Container className="flex justify-center items-center">
      <CaretUpOutlined className="text-custom-pink mr-4 text-[40px] animate-show_25" />
      <Rectangle className="mr-4 animate-show_50" />
      <Circle className="mr-4 animate-show_75" />
      <CloudFilled className="text-blue-500 text-[30px] animate-show_90" />
    </Container>
  );
};

export default Loading;
