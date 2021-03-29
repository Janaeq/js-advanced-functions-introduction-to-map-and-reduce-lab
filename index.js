// Your code here

// Map-like methods

function mapToNegativize(arr) {
    return arr.map(e => e * -1)
}

function mapToNoChange(arr) {
    return arr.map(e => e)
}

function mapToDouble(arr) {
    return arr.map(e => e * 2)
}

function mapToSquare(arr) {
    return arr.map(e => e * e)
}

// reduce-like methods
// current value = the element position in the arr
// accumulator is set to whatever number you want to start at. In this case, it is 'start' passed in as an arg
function reduceToTotal(arr, start = 0) {
    return arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, start) 
}

function reduceToAllTrue(arr) {
    return arr.reduce((accumulator, currentValue) => {
        if (!!currentValue === true)
            return !!currentValue
        else
            return false
    }, 0)
}

function reduceToAnyTrue(arr) {
    return arr.reduce((accumulator, currentValue) => {
        if (!!currentValue === true)
            return true
        else
            return false
    }, 0)
}