import Select from "react-select";
import { Option } from "utils/option";

const Selector: React.FC<{
  className?: string;
  name: string;
  options: Array<Option>;
  value: Option;
  defaultValue?: Option;
  onChange: React.ChangeEvent | any;
}> = ({ className, name, options, value, defaultValue, onChange }) => {
  return (
    <Select
      name={name}
      styles={customStyles}
      className={`${className}`}
      options={options}
      value={value}
      inputId={name}
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
