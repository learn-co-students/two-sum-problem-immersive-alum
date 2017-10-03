function bruteForceTwoSum(array, target){
  var result = []
  array = array.sort()
  for (let i=0; i<array.length-1; i++){
    for(let j=i+1; j<array.length; j++){
      if(array[i]+array[j]===target){
        result.push([array[i], array[j]])
      }
    }
  }
  return result
}

function merge(first, second){
  let sorted = []
  while(first.length>0 && second.length>0){
    first[0]<second[0] ? sorted.push(first.shift()) : sorted.push(second.shift())
  }
  return sorted.concat(first).concat(second)
}

function mergeSort(array){
  let mid = array.length/2
  let first = array.slice(0, mid)
  let second = array.slice(mid, array.length)
  return array.length < 2 ? array : merge(mergeSort(first), mergeSort(second))
}

function binaryMatch(array, n){
  return array.includes(n)
}

function binarySearchTwoSum(array, target){
  let result = [], length = array.length, i
  for(i=0; i<length; i++){
    let dif = target-array[i]
    if(binaryMatch(mergeSort(array), dif)) {
      result.push([array[i],dif])
      array.splice(i, 1)
    }
  }
  return mergeSort(result)
}

function hashTwoSum(array, target){
  let result = [], hash = {}, length = array.length, i, diff
  for (i=0; i<length; i++){
    diff = target - array[i]
    if(hash[diff]) result.push([diff, hash[diff]])
    else hash[array[i]] = diff
  }
  return result
}

// var result =[]
//
// function recursiveTwoSum(array, target){
//   let start = array.shift()
//   for(let i=1; i<array.length-1; i++){
//     if(target - start === array[i]) result.push([start, array[i]])
//   }
//   if (array.length > 1) {
//     binarySearchTwoSum(array, target)
//   }
//   return mergeSort(result)
// }
