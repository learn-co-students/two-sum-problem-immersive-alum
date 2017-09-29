function bruteForceTwoSum(array, target) {
  let result = []
  // For each number in the array
  for (let i = 0; i < array.length; i++) {
    // Add it with every following number
    for (let j = 1; j < array.length - i; j++)
    // If the sum is the target, push it into results array
    if (array[i] + array[i + j] === target) {
      result.push([array[i], array[i + j]])
    }
  }
  return result
}

function hashTwoSum(array, target) {
  let result = []
  let pairs = {}

  array.forEach( num => {
    pairs[num] = target - num
  })

  array.forEach( num => {
    if (array.includes(pairs[num])) {
      result.push([num, pairs[num]])
    }
  })

  return result
}

////// ********* ////////

function twoSum(array, target) {
  let result = []
  // For each number in the array
  for (let i = 0; i < array.length; i++) {
    // Add it with every following number
    for (let j = 1; j < array.length - i; j++)
    // If the sum is the target, push it into results array
    if (array[i] + array[i + j] === target) {
      result.push([array[i], array[i + j]])
    }
  }
  return result
}

// hashTwoSum(myNums, myTarget)




function findMinAndRemove(sortedArray1, sortedArray2) {
  let result = []

  while (sortedArray1.length > 0 && sortedArray2.length > 0)
  if (sortedArray1[0] < sortedArray2[0]) {
    result.push(sortedArray1.splice(0, 1)[0])
  } else {
    result.push(sortedArray2.splice(0, 1)[0])
  }

  return result.concat(sortedArray1).concat(sortedArray2)

}
// findMinAndRemove([1, 2, 5], [3, 6, 8])

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }

  let midpoint = Math.floor(array.length / 2)
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint)

  let result = findMinAndRemove(mergeSort(firstHalf), mergeSort(secondHalf))

  return result
}

function binaryMatch(sortedArray, target) {
  if (sortedArray.length <= 1) {
    if (sortedArray[0] === target) {
      return true
    } else {
      return false
    }
  }

  let midpoint = Math.floor(sortedArray.length / 2)
  let firstHalf = sortedArray.slice(0, midpoint)
  let secondHalf = sortedArray.slice(midpoint)
  let value = sortedArray[midpoint]

  if (value === target) {
    return true
  } else if (target > value) {
    // console.log("Target is larger")
    return true && binaryMatch(secondHalf, target)
  } else if (target < value) {
    // console.log("Target is smaller")
    return true && binaryMatch(firstHalf, target)
  }
  // return false
}

function binarySearchWithIndex(sortedArray, target) {

  let left = 0
  let right = sortedArray.length - 1
  let midpoint

  while (true) {
    if (left > right) {
      return false
    }
    midpoint = Math.floor((left + right) / 2)
    if (target > sortedArray[midpoint]) {
      left = midpoint + 1
    } else if (target < sortedArray[midpoint]) {
      right = midpoint - 1
    } else if (target === sortedArray[midpoint]) {
      return midpoint
    }
  }
}
// console.log(binarySearchWithIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 7))

// mergeSort([2, 4, 3, 5, 1])

function binarySearchTwoSum(array, target) {
  let sorted = mergeSort(array)
  let result = []

  for (let i = 0; i < sorted.length; i++) {
    let index = binarySearchWithIndex(sorted, target - sorted[i])
    if (index) {
      sorted.splice(index, 1)
      result.push([sorted[i], target - sorted[i]])
    }
  }
  return result
}

// console.log("the result is", binarySearchTwoSum([2, 4, 3, 0], 7))


function hashTwoSum(array, sum) {
  let result = []
  let hash = {}
  array.forEach( (e, index) => {
    hash[e] = index
  })

  let counter = 0

  for (let i = 0; i < array.length; i++) {
    console.log("array", array);
    let curr = array[i]
    let diff = sum - curr
    if (hash[diff]) {
      counter ++
      let index = hash[diff]
      array.splice(index - counter, 1)
      result.push([curr, diff])
    }
  }
  return result
}

// 
// let myNums = [1, -2, 5, 4, 2]
// let myTarget = 6
//
// console.log(hashTwoSum(myNums, myTarget))
