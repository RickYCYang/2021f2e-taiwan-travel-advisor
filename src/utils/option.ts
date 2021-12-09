interface Option {
  label: string;
  value: string;
}

export const createOptions = (options: Array<Option>, option: Option) => {
  const _options = options.slice();
  _options.unshift(option);
  return _options;
};

export type { Option };
