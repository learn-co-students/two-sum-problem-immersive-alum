function bruteForceTwoSum(a, sum) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] === sum) {
        result.push([a[i], a[j]])
      }
    }
  }
  return result;
}

function binarySearchTwoSum(a, sum) {
  let result = [];
  let sortedArray = mergeSort(a);
  // using while loop and .shift() avoids duplicates
  while (sortedArray.length > 0) {
    let currentNum = sortedArray.shift();
    let searchResult = binarySearch(sortedArray, sum - currentNum);
    if (searchResult !== -1) {
      result.push([currentNum, sortedArray[searchResult]])
    }
  }

  return result;
}

function binaryMatch(sortedArray, target) {
  return binarySearch(sortedArray, target) !== -1 ? true : false
}

function hashTwoSum(array, sum) {
  let result = [];
  let hash = {};
  array.map((num, index) => {
    if (index == 0 || hash[`${(sum - num)}`] === undefined) {
      hash[`${num}`] = num;
    } else {
      result.push([sum - num, num]);
    }
  });

  return result;
}

function mergeSort(a) {
  if (a.length === 1) {
    return a;
  }

  // get middle index of the array and use it to split the array in half
  let midIndex = Math.floor(a.length/2);
  let left = a.slice(0, midIndex);
  let right = a.slice(midIndex);

  return merge(
    mergeSort(left),
    mergeSort(right),
  )
}

function merge(left, right) {
  let result = [];

  // shift lowest num into result
  while (left.length > 0 && right.length > 0) {
    left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift())
  }

  // concat any leftovers after comparison
  return result.concat(left).concat(right);
}

function binarySearch(sortedArray, target) {
  let startIndex = 0;
  let lastIndex = sortedArray.length - 1;
  let midIndex = Math.floor((startIndex + lastIndex) / 2);

  while(sortedArray[midIndex] !== target && startIndex < lastIndex) {
    if (target > sortedArray[midIndex]) {
      startIndex = midIndex + 1
    } else {
      lastIndex = midIndex - 1
    }

    midIndex = Math.floor((startIndex + lastIndex) / 2)
  }

  return sortedArray[midIndex] === target ? midIndex : -1
}
