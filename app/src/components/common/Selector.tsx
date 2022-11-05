import Select, { ActionMeta } from 'react-select';
import { option } from 'types/common';

interface SelectorProps {
  className?: string;
  name: string;
  options: Array<option>;
  value: option | null;
  defaultValue?: option;
  onChange: (
    // eslint-disable-next-line
    option: option | null | any,
    actionMeta: ActionMeta<option>
  ) => void;
}

const Selector = ({
  className,
  name,
  options,
  value,
  defaultValue,
  onChange,
}: SelectorProps) => {
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
  // eslint-disable-next-line
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected || state.isFocused ? 'white' : 'black',
    backgroundColor: state.isSelected
      ? '#FF1D6C'
      : state.isFocused
      ? '#FFB72C'
      : 'white',
  }),
  // eslint-disable-next-line
  control: (base: any, state: any) => ({
    ...base,
    //border: "none", // default border color
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  }),
};

export default Selector;
