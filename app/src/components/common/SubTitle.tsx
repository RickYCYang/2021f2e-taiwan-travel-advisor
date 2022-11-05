// components
import { CaretUpOutlined, CloudFilled } from '@ant-design/icons';

interface SubTitleProp {
  subTitle: string;
  icon: string;
}

const SubTitle = ({ subTitle, icon }: SubTitleProp) => {
  const iconComponent: JSX.Element = getIconComponent(icon);
  return (
    <h2 className="flex items-center text-sm lg:text-xl mb-3">
      {iconComponent}
      {subTitle}
    </h2>
  );
};

const getIconComponent = (icon: string): JSX.Element => {
  switch (icon) {
    case 'triangle':
      return (
        <CaretUpOutlined
          className="text-custom-pink mr-4 text-[30px]"
          data-testid="triangle"
        />
      );
    case 'rectangle':
      return (
        <svg width="20" height="20" className="mr-6" data-testid="rectangle">
          <rect width="20" height="20" fill="#FFB72C" />
        </svg>
      );
    case 'cloud':
      return (
        <CloudFilled
          className="text-blue-500 mr-4 text-[30px]"
          data-testid="cloud"
        />
      );
    default:
      return <CaretUpOutlined className="text-custom-pink mr-4 text-[30px]" />;
  }
};

export default SubTitle;
