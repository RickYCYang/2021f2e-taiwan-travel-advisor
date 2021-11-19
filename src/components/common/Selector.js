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
