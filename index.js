//Q1
function bruteForceTwoSum(array, sum) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++){
    let num1 = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let num2 = array[j];
      if (num1 + num2 === sum){
        result.push([num1, num2])
      }
    }
  }
  return result
}

//Q2
function binarySearchTwoSum(array, sum) {
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

//Q3
function mergeSort(first, second) {
  let sorted = [];
  while (first.length && second.length) {
    if (first[0] > second[0]) {
      sorted.push(second.shift())
    } else {
      sorted.push(first.shift());
    }
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

function binaryMatch(array, element) {
  let midPoint = array.length / 2;
  let counter = array.length;
  while (counter > 1) {
    let leftSide = array.slice(0, midPoint);
    let rightSide = array.slice(midPoint, array.lenght);
    if (
      leftSide[leftSide.length - 1] === element ||
      rightSide[rightSide.length - 1] === element
    ) {
      return true;
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
  return false;
}

//Q4
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
