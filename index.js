const bruteForceTwoSum = (target,arr2) => {
    let arr = [...new Set(arr2)]
    let result = []
    for (let inner=0;inner<arr.length;inner++) {
        for (let outer=0;outer<arr.length;outer++){
            if ((arr[inner] + arr[outer] === target) && (inner!=outer) ){
                if (!(result.flat().includes(arr[inner]) || result.flat().includes(arr[outer]))) {
                    result.push([arr[inner],arr[outer]])
                }
            }
        }
    }
    return [... new Set(result)]
}

const binarySearchTwoSum = (target,arr2) => {
    let arr = [...new Set(arr2.sort((a,b)=>(a-b ? 1 :-1)))]
    let result = []
    for (let i=0;i<arr.length;i++) {
        if (binaryMatch(target-arr[i],arr) && (!(result.flat().includes(arr[i]))) ) {
            result.push([arr[i],target-arr[i]])
        }
    }
    return result
}

const binaryMatch = (target,arr) => {
    if (arr.includes(target)) {
        return true
    } else {
        return false
    }
}

const constructAHash = (arr,key) => {
    let result = []
    arr.forEach(element => {result.push({key:element})
    })
    return result
}

let arr = [1,2,3,4,5,6,7,8,9,10,4,5,6,7]
let target = 7
// console.log(bruteForceTwoSum(target,arr))
// console.log(binarySearchTwoSum(target,arr))
console.log(constructAHash(arr,'k'))