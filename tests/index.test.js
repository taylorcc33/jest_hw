// SAMPLE
import { testFunction, TEST_STRING } from "../src";

it("returns test string", () => {
  const expected = TEST_STRING;
  const result = testFunction();

  expect(result).toBe(expected);
});

// HOMEWORK TESTS
import {
  numberArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray,
} from "../src";

describe("doubleArray test", () => {
  test("array will double", () => {
    expect(doubleArray(numberArray)).toEqual([2, 4, 6, 8]);
  });
});

describe("evensOnlyArray test", () => {
  test("array contains only even values", () => {
    expect(evensOnlyArray(numberArray)).toEqual([2, 4]);
  });
});

describe("arraySum test", () => {
  test("array contains sum of array values", () => {
    expect(arraySum(numberArray)).toEqual(10);
  });
});

describe("allNumbersGreaterThanZero test", () => {
  test("all values greater than zero", () => {
    expect(allNumbersGreaterThanZero(numberArray)).toEqual(true);
  });
});

describe("someNumbersAreOdd test", () => {
  test("one or more value is odd", () => {
    expect(someNumbersAreOdd(numberArray)).toEqual(true);
  });
});

describe("evensOnlyAndDoubleArray test", () => {
  test("only evens that are doubled", () => {
    expect(evensOnlyAndDoubleArray(numberArray)).toEqual([4, 8]);
  });
});

describe("findItem test", () => {
  test("find item, else return 'not found'", () => {
    expect(findItem(numberArray, 5)).toEqual("not found");
  });
});

describe("sortArray test", () => {
  test("sort array in desc order", () => {
    expect(sortArray(numberArray)).toEqual([4, 3, 2, 1]);
  });
});
