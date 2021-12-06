import Select from "react-select";
import { optionType } from "utils/option";

const Selector: React.FC<{
  className?: string;
  options: Array<optionType>;
  value: optionType;
  defaultValue?: optionType;
  onChange: React.ChangeEvent | any;
}> = ({ className, options, value, defaultValue, onChange }) => {
  return (
    <Select
      styles={customStyles}
      className={`${className}`}
      options={options}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected || state.isFocused ? "white" : "black",
    backgroundColor: state.isSelected
      ? "#FF1D6C"
      : state.isFocused
      ? "#FFB72C"
      : "white",
  }),
  control: (base: any, state: any) => ({
    ...base,
    //border: "none", // default border color
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  }),
};

export default Selector;
