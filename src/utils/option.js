export const createOptions = (options, firstOption) => {
  const selectOptions = options.slice();
  selectOptions.unshift(firstOption);
  return selectOptions;
};
