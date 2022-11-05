import { option } from 'types/common';
export const createOptions = (options: Array<option>, option: option) => {
  const newOptions = options.slice();
  newOptions.unshift(option);
  return newOptions;
};
