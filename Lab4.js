// 1
function sum1(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

// 2
function sum2(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

// 3
function sum3(...args) {
  let sum = 0;
  let i = 0;
  while (i < args.length) {
    sum += args[i];
    i++;
  }
  return sum;
}

// 4
function sum4(...args) {
  let sum = 0;
  let i = 0;
  if (args.length > 0) {
    do {
      sum += args[i];
      i++;
    } while (i < args.length);
  }
  return sum;
}

// 5
function sum5(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

//6
function max(arr) {
  let maxElement = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maxElement) {
        maxElement = arr[i][j];
      }
    }
  }

  return maxElement;
}
const m = max([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

//7
const persons = {
  Mark: { birth: 1930, death: 1980 },
  Ann: { birth: 1970, death: 1995 },
  Michael: { birth: 1905, death: 2000 },
  Emily: { birth: 1901, death: 1978 },
};

function lengthOfLife(dates) {
  const result = {};

  for (const person in dates) {
    if (dates[person]?.birth && dates[person]?.death) {
      result[person] = dates[person].death - dates[person].birth;
    }
  }

  return result;
}
const result = lengthOfLife(persons);
