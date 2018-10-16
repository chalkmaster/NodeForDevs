const target = 8;
const sets = [
  [1, 2, 4, 4],
  [4, 2, 1, 4],
  [1, 2, 3, 9],
  [5, 3, 1, 3, 5, 7, 8, 9, 2],
];

function check(set = [], target = 0) {
  const temp = [];

  for (let i = 0; i < set.length; i++) {
    const diff = target - set[i];
    if (temp[diff] !== undefined) {
      return {hasPair: true, pair: `${set[i]} and ${set[temp[diff]]}`};
    } else {
      temp[set[i]] = i;
    }
  }
  return {hasPair: false};
}

sets.forEach((set, i) =>
  console.log(`test #${i} -> ${JSON.stringify(check(set, target))}`)
);
