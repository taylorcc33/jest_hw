//SAMPLE FUNCTIONS
export const TEST_STRING = "test string";

export function testFunction() {
  return TEST_STRING;
}

// EXPORT ALL AS FUNCTIONS AND KEEP THE NAMES THE SAME

// ways to export

// export const methodName = (param) => {
// }

// ----or---------

// export methodName function(param){
// }

// ARRAY ITERATOR METHODS
export const numberArray = [1, 2, 3, 4];

// return array with double values in array
// => [2,4,6,8];  hint use map
export const doubleArray = (numberArray) => {
  return numberArray.map((num) => {
    return num * 2;
  });
};

// // return array with all even numbers
// => [2,4];  hint use filter
export const evensOnlyArray = (numberArray) => {
  return numberArray.filter((num) => {
    return num % 2 === 0;
  });
};

// // return array with sum of numbers
// => 10;  hint use reduce
export const arraySum = (numberArray) => {
  return numberArray.reduce((total, num) => {
    return total + num;
  }, 0);
};

// // return true if every item greater than 0
// => true; use every
export const allNumbersGreaterThanZero = (numberArray) => {
  return numberArray.every((num) => {
    return num > 0;
  });
};

// // return true if one or more items in array are odd
// => true; use some
export const someNumbersAreOdd = (numberArray) => {
  return numberArray.some((num) => {
    return num % 2 === 1;
  });
};

// // return array double and even
// => [4,8]; // use map and filter
export const evensOnlyAndDoubleArray = (numberArray) => {
  return numberArray
    .filter((num) => {
      return num % 2 === 0;
    })
    .map((num) => {
      return num * 2;
    });
};

// // find an item method return 'not found' if not found
//=> 1
export const findItem = (numberArray, value) => {
  if (numberArray.includes(value)) {
    return "good";
  } else {
    return "not found";
  }
};

// // sort array desc order
//=> [4,3,2,1] *desc*
export const sortArray = (numberArray) => {
  return numberArray.sort((a, b) => {
    return b - a;
  });
};
