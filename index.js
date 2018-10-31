
const bruteForceTwoSum = (array, sum)=>{
  let ans = []
  for( let i = 0; i<array.length; i++){
    for( let j = i+1; j < array.length;j++){
      let s = array[i] + array[j];
      if( s == sum )
        ans.push([array[i], array[j]])
    }
  }
  return ans;
}

const binarySearchTwoSum = (array, sum)=>{
  array.sort((a,b)=>a-b)
  let ans = []
  for(let i = 0; i<array.length; i++){
    let n = array[i];
    let l = i+1, r = array.length-1;
    let m = sum - n;
    while( l<= r){
      let mid = parseInt((l+r)/2);
      if( array[mid] == m ){
        ans.push([n, m]);
        break;
      }else if( array[mid] > m )
        r = mid-1;
      else
        l = mid+1;
    }
  }
  return ans;
}

const binaryMatch = (array, sum)=>{
  return binarySearchTwoSum(array, sum).length > 0
}

const hashTwoSum = (array, sum)=>{
  let hash={}
  let ans = []
  for( let i = 0; i<array.length; i++ ){
    let n = array[i];
    let m = sum - n;
    if( hash[m] )
      ans.push([m, n]);
    hash[n] = 1
  }
  return ans;
}