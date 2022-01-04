const test1 = `R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`;

const part1 = input => {
  const [wire1, wire2] = test1.split('\n').map(wire => wire.split(','));
  console.log(wire1)
}

part1(test1)
