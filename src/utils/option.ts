type optionType = {
  label: string;
  value: string | null;
};

export const createOptions = (
  options: Array<optionType>,
  firstOption: optionType
) => {
  const selectOptions = options.slice();
  selectOptions.unshift(firstOption);
  return selectOptions;
};

export type { optionType };
