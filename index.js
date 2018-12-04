function bruteForceTwoSum(array, sum) {
  const pairs = []
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const pair = [array[i], array[j]]
      pairs.push(pair)
    }
  }

  const correctPairs = []

  pairs.forEach(pair => {
    if (pair[0] + pair[1] === sum) {
      correctPairs.push(pair)
    }
  })
  return correctPairs
}

function binaryMatch(array, num) {

  if (array.length < 2 && array[0] === num) {
    return true
  } else if (array.length < 2 && array[0] !== num) {
    return false
  }

  let midpoint = Math.floor(array.length / 2)

  if (array[midpoint] === num) {
    return true
  } else if (num < array[midpoint]) {
    return binaryMatch(array.slice(0, midpoint), num)
  } else if (num > array[midpoint]) {
    return binaryMatch(array.slice(midpoint), num)
  }
}

function binarySearchTwoSum(array, sum) {
  const pairs = []

  array = array.sort()

  while(array[0]) {
    const value = array.shift()
    const missingValue = sum - value
    if (binaryMatch(array, missingValue)) {
      pairs.push([value, missingValue])
    }
  }
  return pairs
}

function hashTwoSum(array, sum) {
  const hash = {}
  const pairs = []

  array.forEach(num => {
    if (hash[num]) {
      hash[num] += 1
    } else {
      hash[num] = 1
    }
  })

  for (let num in hash) {
    num = parseInt(num)
    const missingValue = sum - num

    if (hash[missingValue]) {
      hash[missingValue] -= 1
      if (hash[missingValue] === 0) {
        delete hash[missingValue]
      }
      pairs.push([num, missingValue])
    }
  }
  return pairs
}
