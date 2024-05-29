function fibs(n) {
  let sequence = [];
  let prev = 0;
  let current = 1;
  if (n === 0) {
    return sequence;
  } else if (n === 1) {
    sequence.push(prev);
  } else if (n === 2) {
    sequence.push(prev);
    sequence.push(current);
  } else {
    sequence.push(prev);
    sequence.push(current);
    for (let i = 3; i <= n; i++) {
      let next = prev + current;
      sequence.push(next);
      prev = current;
      current = next;
    }
  }
  return sequence;
}

let sequence = fibs(8);
console.log(sequence);

function betterFibs(n) {
  let sequence = [];
  if (n === 0) return sequence;
  sequence.push(0);
  if (n > 1) {
    sequence.push(1);
    let prev = 0;
    let current = 1;
    for (let i = 2; i < n; i++) {
      let next = prev + current;
      sequence.push(next);
      prev = current;
      current = next;
    }
  }
  return sequence;
}

let betterSequence = betterFibs(8);
console.log(betterSequence);

function fibsRecursive(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let prevSequence = fibsRecursive(n - 1);
  prevSequence.push(
    prevSequence[prevSequence.length - 1] +
      prevSequence[prevSequence.length - 2]
  );
  return prevSequence;
}

let sequenceRecursive = fibsRecursive(8);
console.log(sequenceRecursive);
