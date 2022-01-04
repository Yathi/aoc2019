const start = 137683;
const end = 596253;

const test = 111111;
const test2 = 223450;
const test3 = 123789;

const numArray = num =>
  num
    .toString()
    .split('')
    .map(Number);

const only2Match = (numArray, i) => {
  const baseCondition = numArray[i] === numArray[i+1];
  let lowerCondition = true, upperCondition = true;
  if (i > 0) {
    lowerCondition = numArray[i-1] !== numArray[i]
  }
  if (i < numArray.length - 2) {
    upperCondition = numArray[i+1] !== numArray[i+2]
  }

  return baseCondition && lowerCondition && upperCondition;
}

const validNum = numArray => {
  let equalMatcher = false;
  let greaterMatcher = true;
  for (let i = 0; i < numArray.length - 1; i++) {
    if (numArray[i] > numArray[i + 1]) {
      greaterMatcher = false;
      break;
    } else if (numArray[i] === numArray[i + 1]) {
      equalMatcher = true;
    }
  }
  return equalMatcher && greaterMatcher;
};


let total = 0;
for (let i = start; i <= end; i++) {
  if (validNum(numArray(i))) {
    total = total + 1;
  }
}

// console.log(total)
// console.log(numArray(234234234))
