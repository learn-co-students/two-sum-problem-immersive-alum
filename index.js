var array = [2, 3, 4, 3, 6, 7]

function hashTwoSum(array, target) {
  let hashTable = new Object;
  let results = [];
  let alreadyChecked = [];
  for (var i = 0; i < array.length; i++){
    hashTable[array[i]] = array[i]
  }
  for (var j = 0; j < array.length; j++){
    let comp = target - array[j];
    if (hashTable[comp] && !alreadyChecked.includes(hashTable[comp]) && !alreadyChecked.includes(array[j])){
      results.push([array[j], hashTable[comp]])
      alreadyChecked.push(array[j], hashTable[comp]);
    }
  }
  return results
}

function bruteForceTwoSum(array, target) {
  let results = [];
  let alreadyChecked = [];
  let counter = 0;
  while (counter < array.length){
    for (var i = 1; i < array.length; i++){
      if (array[counter] + array[i] === target && !alreadyChecked.includes(array[counter]) && !alreadyChecked.includes(array[i])){
        results.push([array[counter], array[i]])
        alreadyChecked.push(array[counter], array[i])
      }
    }
    counter++
  }
  return results;
}

function binaryMatch(array, target) {
  let match = array.filter(el => {
    return el === target
  })[0]
  return !!match
}


function merge(left, right) {
  let sorted = [];
  while(left.length && right.length){
    if (left[0] < right[0]){
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }
  return sorted.concat(left).concat(right)
}


function sort(array) {
  if (array.length < 2){
    return array
  }
  var left = array.slice(0, array.length / 2);
  var right = array.slice(array.length / 2)
  return merge(sort(left), sort(right))
}

function binarySearchTwoSum(array, target) {
  let results = [];
  for (var i = 0; i < array.length; i++){
    let comp = target - array[i];
    if (binaryMatch(sort(array), comp)){
      results.push([array[i], comp])
      array.splice(i,1)
    }
  }
  return sort(results)
}
