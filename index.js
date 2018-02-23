function bruteForceTwoSum(array, sum) {
  // O(n^2), nested loop
  let pairs = [];
  for (let i in array) {
    if (!pairs.join(",").includes(array[i])) {
      for (let j in array) {
        if (array[i] + array[j] === sum) {
          if (!pairs.join(",").includes(array[j])) {
            pairs.push([array[i], array[j]]);
          }
        }
      }
    }
  }
  return pairs;
}
function bruteForceTwoSum2(array, sum) {
  // O(n), no nested loop
  let pairs = [];
  for (let i in array) {
    if (!pairs.join(",").includes(array[i])) {
      let target = sum - array[i];
      if (array.includes(target)) {
        pairs.push([array[i], target]);
      }
    }
  }
  return pairs;
}

function mergeSort(first, second) {
  let sorted = [];
  while (first.length && second.length) {
    first[0] > second[0]
      ? sorted.push(second.shift())
      : sorted.push(first.shift());
  }
  return [...sorted, ...first, ...second];
}
function sortArray(array) {
  let midPoint = array.length / 2;
  if (array.length > 1) {
    return mergeSort(
      sortArray(array.slice(0, midPoint)),
      sortArray(array.slice(midPoint, array.length))
    );
  } else {
    return array;
  }
}
function binaryMatch(sortedArray, element) {
  let midPoint = sortedArray.length / 2;
  let match = false;
  let counter = sortedArray.length;
  while (!match && counter > 1) {
    let leftSide = sortedArray.slice(0, midPoint);
    let rightSide = sortedArray.slice(midPoint, sortedArray.lenght);
    if (
      leftSide[leftSide.length - 1] === element ||
      rightSide[rightSide.length - 1] === element
    ) {
      match = true;
      return match;
    } else {
      if (leftSide[leftSide.length - 1] > element) {
        counter--;
        return binaryMatch(leftSide, element);
      } else {
        counter--;
        return binaryMatch(rightSide, element);
      }
    }
  }
  return match;
}
function binarySearchTwoSum(array, sum) {
  // Using binarySearch with sorted array O(n log n)
  let matches = [];
  let sortedArray = sortArray(array);
  for (let i in sortedArray) {
    let target = sum - sortedArray[i];
    if (
      !matches.join(",").includes(target) &&
      !matches.join(",").includes(sortedArray[i])
    ) {
      if (binaryMatch(sortedArray, target)) {
        matches.push([sortedArray[i], target]);
      }
    }
  }
  return matches;
}

function hashTwoSum(array, sum) {
  let hash = {};
  let matches = [];
  for (let i in array) {
    let target = sum - array[i];
    hash[array[i]] = target;
  }
  for (let j in array) {
    if (
      !matches.join(",").includes(array[j]) &&
      !matches.join(",").includes(hash[array[j]])
    ) {
      if (hash[sum - array[j]]) {
        matches.push([array[j], hash[array[j]]]);
      }
    }
  }
  return matches;
}
//
// let array = [2, 3, 4, 3, 6, 7];
// // let array = [7, 6, 3, 4, 3, 2];
// let sum = 6;
// //
// // console.log(bruteForceTwoSum(array, sum));
// console.log(binarySearchTwoSum(array, sum));
// // console.log(bSearch(sortArray(array), 8));
// console.log(hashTwoSum(array, sum));
