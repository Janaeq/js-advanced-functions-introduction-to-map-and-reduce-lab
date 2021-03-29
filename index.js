// Your code here

// Map-like methods, not exactly map

function mapToNegativize(arr) {
    let newArr = [] // non-destructive changes
    for (let i = 0; i < arr.length; i++ ) {
        newArr.push(-1 * arr[i])
    }
  return newArr
}

function mapToNoChange(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    return newArr
}

function mapToDouble(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    return newArr
}

function mapToSquare(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i])
    }
    return newArr
}

// reduce-like methods
// current value = the element position in the arr
// accumulator is set to whatever number you want to start at. In this case, it is 'start' passed in as an arg
// function reduceToTotal(arr, start = 0) {
//     return arr.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue
//     }, start) 
// }

function reduceToTotal(arr, start = 0) {
    let sum = start
    for (let e of arr) {
        sum += e
    }
    return sum
}

// function reduceToAllTrue(arr) {
//     return arr.reduce((accumulator, currentValue) => {
//         if (!!currentValue === true)
//             return !!currentValue
//         else
//             return false
//     }, 0)
// }

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i] === false)
            return false
    }
    return true
}

// function reduceToAnyTrue(arr) {
//     return arr.reduce((accumulator, currentValue) => {
//         if (!!currentValue === true)
//             return true
//         else
//             return false
//     }, 0)
// }

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true)
            return true
    }
    return false
}