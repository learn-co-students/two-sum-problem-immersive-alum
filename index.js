

function bruteForceTwoSum(array, sum){
  let pairs = []
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if(array[i] + array[j] === sum){
        pairs.push([array[i], array[j]])
      }
    }
  }
  return pairs
}



function binarySearchTwoSum(array, sum){
  array.sort()
  let pairs = []
  let i = 0
  let j = array.length - 1
  while(i !== j){
    if(array[i] + array[j] === sum){
      pairs.push([array[i], array[j]])
      j--
    }
    if(array[i] + array[j] > sum){
      j--
    }
    if(array[i] + array[j] < sum){
      i++
    }
  }
  return pairs
}



function binaryMatch(array, missingNum){
  let mid = Math.round(array.length/2)
  if(array[mid] === missingNum){
    return true
  }
  if(array[mid] > missingNum){
    return binaryMatch(array.slice(0, mid), missingNum)
  }
  if(array[mid] < missingNum){
    return binaryMatch(array.slice(mid, array.length), missingNum)
  }
  if(array.length < 2 ){
    return false
  }
}



function hashTwoSum(array, sum){
  let object = {}
  let pairs = []
  for(let i = 0; i < array.length; i++){
    if(object[array[i]]){
      object[array[i]] = object[array[i]] + 1
    } else {
      object[array[i]] = 1
    }
  }
  for(let i = 0; i < array.length; i++){
    let diff = sum - array[i]
    if(object[diff] && object[diff] >= 1){
      pairs.push([array[i], diff])
      object[diff] = object[diff] - 1
      object[array[i]] = object[array[i]] - 1
    }
  }
  return pairs
}
