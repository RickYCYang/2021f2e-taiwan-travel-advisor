import { option } from "types/common";
export const createOptions = (options: Array<option>, option: option) => {
  const _options = options.slice();
  _options.unshift(option);
  return _options;
};
