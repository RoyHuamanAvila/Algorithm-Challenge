const {indexSum} = require("./indexSum.js");

describe("indexSum", () => {
  test("test 1", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = [0, 1];
    expect(indexSum(nums, target)).toStrictEqual(result);
  });

  test("test 2", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = [1, 2];
    expect(indexSum(nums, target)).toStrictEqual(result);
  });

  test("test 3", () => {
    const nums = [3, 3];
    const target = 6;
    const result = [0, 1];
    expect(indexSum(nums, target)).toStrictEqual(result);
  });

  test("test 4", () => {
    const nums = [3, 1, 10, 12, 13, -1, 68, 2, 33];
    const target = 9;
    const result = [2, 5];
    expect(indexSum(nums, target)).toStrictEqual(result);
  });
});
