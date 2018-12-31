function bruteForceTwoSum(array, sum){
  let orderedArray = array.sort().filter((number) => {
    return number <= sum;
  });

  let selection;
  let results = [];

  for(let i = 0; i < orderedArray.length; i++){
    selection = orderedArray[i];

    for(let j = 0; j < orderedArray.length; j++){
      if(selection + orderedArray[j] === sum){
        results.push([selection, orderedArray[j]]);
        orderedArray.splice(j, 1)
        orderedArray.splice(i, 1)
      }
    }
  }
  return results;
}

function binarySearch(sortedArray, val){
  let left = 0;
  let right = sortedArray.length - 1;
  let middle;

  if(sortedArray[left] === val){
    return left;
  } else if(sortedArray[right] === val){
    return right;
  } else{
    for(let i = left; i < right; i++){
      middle = Math.floor((left + right)/2);
      if(sortedArray[middle] === val){
        return middle;
      } else if(sortedArray[middle] > val){
        right = middle;
      } else if(sortedArray[middle] < val){
        left = middle;
      }
    }
    return -1;
  }
}

function binaryMatch(sortedArray, missingNum){
  if(binarySearch(sortedArray, missingNum) !== -1){
    return true;
  } else{
    return false;
  }
}

function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    } else{
      results.push(arr2[j]);
      j++
    }
  }
  while(i < arr1.length){
    results.push(arr1[i])
    i++;
  }

  while(j < arr2.length){
    results.push(arr2[j])
    j++;
  }
  return results;
}

function mergeSort(arr){
  if(arr.length <= 1){
    return arr;
  }

  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function binarySearchTwoSum(array, sum){
  //merge sort
  let sortedArray = mergeSort(array);
  console.log(sortedArray);

  let results = [];

  //binary search
  let selection;
  let search;
  let searchIndex;
  let counter = 0;

  while(counter < sortedArray.length) {
    selection = sortedArray.shift();
    search = sum - selection;

    if(binaryMatch(sortedArray, search)){
      results.push([selection, search]);
      searchIndex = sortedArray.indexOf(search);
      sortedArray.splice(searchIndex, 1);
    }
    ++counter;
  }
  return results;
}

function hashTwoSum(array, sum){
  //place each element into a hash
  let hash = {}

  array.forEach(number => {
    if(hash[number]) {
      hash[number].push(number)
    } else{
      hash[number] = [number]
    }
  })

  //go through each element & see if the matching element exists
  let results = [];

  let selection;
  let search;
  let searchIndex;
  let counter = 0;

  while(counter < array.length) {
    selection = array.shift();
    search = sum - selection;

    if(hash[search].length > 0){
      results.push([selection, search]);
      searchIndex = array.indexOf(search);
      array.splice(searchIndex, 1);

      hash[search].shift();
      hash[selection].shift();
    }
    ++counter;
  }
  return results;
}
