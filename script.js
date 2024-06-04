function betterFibs(n) {
  // initializes an empty array that will store the Fibonacci sequence
  let sequence = [];

  // handles the special case when no Fibonacci numbers are requested
  if (n === 0) return sequence;

  // function adds the first Fibonacci number, 0, to the sequence array
  sequence.push(0);

  // if n is greater than 1, function adds the second Fibonacci number, 1
  if (n > 1) {
    sequence.push(1);

    // initializes the previous number to 0
    let prev = 0;

    // initializes the current number to 1
    let current = 1;

    // if n is greater than 2, loop will generate the remaining Fibonacci numbers beyond the first two
    for (let i = 2; i < n; i++) {
      // each next number is the sum of the two preceding numbers
      let next = prev + current;

      // calculated next value is added to the sequence array
      sequence.push(next);

      // prev variable is updated to the value of current
      prev = current;

      // current variable is updated to the value of next
      current = next;
    }
  }

  // sequence array containing the Fibonacci numbers up to n terms is returned
  return sequence;
}

let betterSequence = betterFibs(8);
console.log(betterSequence);

function fibsRecursive(n) {
  // if n is 0, return an empty array
  if (n === 0) return [];

  // if n is 1, return the first Fibonacci number
  if (n === 1) return [0];

  // if n is 2, return the first two Fibonacci numbers
  if (n === 2) return [0, 1];

  // recursive fibsRecursive calls to return the previous sequence without the last Fibonacci number
  let prevSequence = fibsRecursive(n - 1);

  /* calculate the last Fibonacci number for the current sequence by adding the last two numbers for the
  previous sequence, push that sum value into the previous sequence, resulting in the current sequence */
  prevSequence.push(
    prevSequence[prevSequence.length - 1] +
      prevSequence[prevSequence.length - 2]
  );

  // previous sequence, with the sum value, is now the current sequence
  let currentSequence = prevSequence;

  // sequence array containing the Fibonacci numbers up to n terms is returned
  return currentSequence;
}

let sequenceRecursive = fibsRecursive(8);
console.log(sequenceRecursive);

function mergeSort(array) {
  // assign h the value of the array's highest index
  let h = array.length - 1;

  // assign l the value of the array's lowest index
  let l = 0;

  // initialize mergedArray to an empty array
  let mergedArray = [];

  // if the array has more than one element
  if (l < h) {
    // assign m the value of a rounded down midpoint
    mid = Math.floor((l + h) / 2);

    /* leftSubArray is assigned to the array resulting from a slice that starts at index 0 and goes up to,
    but not including, index mid + 1 */
    let leftSubArray = array.slice(l, mid + 1);

    /* rightSubArray is assigned to the array resulting from a slice that starts at index mid + 1 and goes up to,
    but not including, index h + 1 */
    let rightSubArray = array.slice(mid + 1, h + 1);

    // recursive calls to sort the subarrays and return the sorted results
    let sortedLeftSubArray = mergeSort(leftSubArray);
    let sortedRightSubArray = mergeSort(rightSubArray);

    // merge the sorted results
    merge(sortedLeftSubArray, sortedRightSubArray);

    function merge(leftSubArray, rightSubArray) {
      // assign m and n to the values of the leftSubArray and rightSubArray's highest indices, respectively
      let m = leftSubArray.length - 1;
      let n = rightSubArray.length - 1;

      // initialize the index for the leftSubArray, the rightSubArray, and the combined, sorted mergedArray
      let i = 0;
      let j = 0;
      let k = 0;

      // as long as either the leftSubArray oe the rightSubArray have an element
      while (i <= m && j <= n) {
        // compare the first remaining element of the leftSubArray to the first remaining element of the rightSubArray
        if (leftSubArray[i] < rightSubArray[j]) {
          // if the former is less, copy that element of the leftSubArray to mergedArray, and increment their indices
          mergedArray[k++] = leftSubArray[i++];
        } else {
          /* otherwise, the latter is less, so
          copy that element of the rightSubArray to mergedArray, and increment their indices */
          mergedArray[k++] = rightSubArray[j++];
        }
      }

      /* for any remaining elements in either the leftSubArray or the rightSubArray that have nothing to be 
      compared to, copy them to the mergedArray and increment the mergedArray's index */
      for (; i <= m; i++) {
        mergedArray[k++] = leftSubArray[i];
      }
      for (; j <= n; j++) {
        mergedArray[k++] = rightSubArray[j];
      }
    }

    // otherwise, the array only has one element and is already sorted
  } else {
    mergedArray = array;
  }

  // return the sorted arrays
  return mergedArray;
}

let mergedArray = mergeSort([105, 79, 100, 110]);
console.log(mergedArray);

function betterMergeSort(array) {
  // if the array only has one element, it is already sorted
  if (array.length <= 1) {
    return array;
  }

  // find the midpoint of the array
  const mid = Math.floor(array.length / 2);

  /* leftSubArray is assigned to the array resulting from a slice that starts at index 0 and goes up to,
      but not including, index mid + 1 */
  const leftSubArray = array.slice(0, mid);

  /* rightSubArray is assigned to the array resulting from a slice that starts at index mid + 1 and goes up to,
      but not including, index h + 1 */
  const rightSubArray = array.slice(mid);

  // recursive calls to sort the subarrays and return the sorted results
  const sortedLeftSubArray = mergeSort(leftSubArray);
  const sortedRightSubArray = mergeSort(rightSubArray);

  // merge the sorted results
  return merge(sortedLeftSubArray, sortedRightSubArray);
}

function merge(leftSubArray, rightSubArray) {
  // initialize mergedArray to an empty array
  let mergedArray = [];

  // initialize the index for the leftSubArray, the rightSubArray, and the combined, sorted mergedArray
  let i = 0;
  let j = 0;

  // as long as either the leftSubArray oe the rightSubArray have an element
  while (i < leftSubArray.length && j <= rightSubArray.length) {
    // compare the first remaining element of the leftSubArray to the first remaining element of the rightSubArray
    if (leftSubArray[i] < rightSubArray[j]) {
      // if the former is less, copy that element of the leftSubArray to mergedArray, and increment their indices
      mergedArray.push(leftSubArray[i]);
      i++;
    } else {
      /* otherwise, the latter is less, so
            copy that element of the rightSubArray to mergedArray, and increment their indices */
      mergedArray.push(rightSubArray[j]);
      j++;
    }
  }

  // concatenate any remaining elements from both subarrays
  return mergedArray
    .concat(leftSubArray.slice(i))
    .concat(rightSubArray.slice(j));
}

let betterMergedArray = betterMergeSort([105, 79, 100, 110]);
console.log(betterMergedArray);
