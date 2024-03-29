import { ExclamationCircleFilled } from '@ant-design/icons';

const defaultMessage = '很抱歉，找不到符合此搜尋相關的內容。';

interface WarningMsgProp {
  message?: string;
}

const WarningMsg = ({ message }: WarningMsgProp) => {
  return (
    <div className="flex gap-3 justify-center items-center">
      <ExclamationCircleFilled
        className="text-custom-yellow text-4xl md:text-5xl"
        data-testid="warningIcon"
      />
      <div>
        <h6 className="text-custom-yellow text-base md:text-xl">Oops !</h6>
        <p className="text-gray-400 text-sm md:text-base">
          {message || defaultMessage}
        </p>
      </div>
    </div>
  );
};

export default WarningMsg;
