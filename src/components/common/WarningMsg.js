import { ExclamationCircleFilled } from "@ant-design/icons";

const WarningMsg = ({ message }) => {
  return (
    <div className="flex gap-3 justify-center items-center">
      <ExclamationCircleFilled className="text-custom-yellow text-5xl" />
      <div>
        <h6 className="text-custom-yellow text-xl">Oops !</h6>
        <p className="text-gray-400">
          {message || "很抱歉，找不到符合此搜尋相關的內容。"}{" "}
        </p>
      </div>
    </div>
  );
};

export default WarningMsg;
