const input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,10,19,23,1,6,23,27,1,5,27,31,1,10,31,35,2,10,35,39,1,39,5,43,2,43,6,47,2,9,47,51,1,51,5,55,1,5,55,59,2,10,59,63,1,5,63,67,1,67,10,71,2,6,71,75,2,6,75,79,1,5,79,83,2,6,83,87,2,13,87,91,1,91,6,95,2,13,95,99,1,99,5,103,2,103,10,107,1,9,107,111,1,111,6,115,1,115,2,119,1,119,10,0,99,2,14,0,0];

const test1 = [1,0,0,0,99]
const test2 = [2,4,4,5,99,0]
const test3 = [1,9,10,3,2,3,11,0,99,30,40,50]
const test4 = [1,1,1,4,99,5,6,0,99]


const add = (pos1, pos2, outpos, array) => {
  array[outpos] = array[pos1] + array[pos2];
  return array;
}

const multiply = (pos1, pos2, outpos, array) => {
  array[outpos] = array[pos1] * array[pos2];
  return array;
}

const parse = (array, start) => {
  const opcode = array[start];
  let resultArray;
  if (opcode === 1) {
    resultArray = add(array[start+1], array[start+2], array[start+3], array);
  }
  if (opcode === 2) {
    resultArray = multiply(array[start+1], array[start+2], array[start+3], array);
  }
  if (opcode === 99) {
    return {resultArray: array, terminate: true};
  }

  return {resultArray, terminate: false};
}

const runner = array => {
  let index = 0;
  let resultArray = array, terminate;
  while (index < array.length && !terminate) {
    ({resultArray, terminate} = parse(resultArray, index));
    // console.log(`index: ${index}`);
    // result = parse(resultArray, index);
    // resultArray = result.resultArray;
    // terminate = result.terminate;
    index = index + 4;
  }
  return resultArray;
}

const secondRunner = array => {
  for (let i = 0; i<100; i++) {
    for (let j = 0; j < 100; j++) {
      let new_array = [...array];
      new_array[1] = i;
      new_array[2] = j;
      const ans = runner(new_array)[0];
      if (ans === 19690720) {
        console.log(`i is ${i}`);
        console.log(`j is ${j}`);
        break;
      }
    }
  }
}

// console.log(runner(input));
secondRunner(input);
