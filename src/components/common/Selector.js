import Select from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected || state.isFocused ? "white" : "black",
    backgroundColor: state.isSelected
      ? "#FF1D6C"
      : state.isFocused
      ? "#FFB72C"
      : "white",
  }),
  control: (base, state) => ({
    ...base,
    border: "none", // default border color
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // no box-shadow
  }),
};

const Selector = ({ className, options, value, defaultValue, onChange }) => {
  return (
    <Select
      styles={customStyles}
      className={className}
      options={options}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default Selector;
