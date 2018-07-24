function bruteForceTwoSum(array, sum) {
  let pairs = []
  for (let x = 0; x < array.length; x++) {
    for (let y = x+1; y < array.length; y++) {
      array[x] + array[y] == sum ?
      pairs.push([array[x], array[y]]) : null
    }
  }
  return pairs
}

function binarySearchTwoSum(array, sum) {
  let pairs = []
  for (let x = 0; x < array.length; x++) {
    for (let y = x+1; y < array.length; y++) {
      array[x] + array[y] == sum ?
      pairs.push([array[x], array[y]]) : null
    }
  }
  return pairs
}

function binaryMatch(array, sum) {
  for (let x = 0; x < array.length; x++) {
    for (let y = x+1; y < array.length; y++) {
      if (array[x] + array[y] == sum) {
        return true
      }
    }
  }
}

function hashTwoSum(array, sum) {
  let pairs = []
  for (let x = 0; x < array.length; x++) {
    for (let y = x+1; y < array.length; y++) {
      array[x] + array[y] == sum ?
      pairs.push([array[x], array[y]]) : null
    }
  }
  return pairs
}
