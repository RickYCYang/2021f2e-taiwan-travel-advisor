import { createOptions, Option } from "utils/option";

const options: Array<Option> = [
  { label: "label1", value: "value1" },
  { label: "label2", value: "value2" },
];

const option: Option = {
  label: "label0",
  value: "value0",
};

describe("utils/option", () => {
  test("createOptions", () => {
    const _options = createOptions(options, option);
    expect(_options.map((option) => JSON.stringify(option)).join()).toBe(
      '{"label":"label0","value":"value0"},{"label":"label1","value":"value1"},{"label":"label2","value":"value2"}'
    );
  });
});
