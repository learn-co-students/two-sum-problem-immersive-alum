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

function binaryMatch(array, target){
  return array.includes(target)
}

function binarySearchTwoSum(array, target){
  var result =[]
  let start = array.shift()
  for(let i=1; i<array.length-1; i++){
    if(target - start === array[i]) result.push([start, array[i]])
  }
  if (array.length > 1) {
    binarySearchTwoSum(array, target)
  }
  return mergeSort(result)
}

function hashTwoSum(array, target){
  var result = []
  for(let i=0; i<array.length; i++){
    let dif = target-array[i]
    if(array.includes(dif)) {
      result.push([array[i],dif])
      array.splice(i, 1)
    }
    else console.log("none")
  }
  return mergeSort(result)
}
