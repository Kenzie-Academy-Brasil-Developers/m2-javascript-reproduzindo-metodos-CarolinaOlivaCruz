array = [1, 2, 3, 4, 5]

// For Each
let minhaCallBackForEach = (element, i, array) => array[i] = `Número ${element} na posição: ${i}, veio desse array: ${array}`;

function meuMetodoforEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        callback(currentValue, i, array)
    }
}
meuMetodoforEach(array, minhaCallBackForEach)
// console.table(array)



// Map
function minhaCallBackMap(element, index, array) {
    return `Número ${element} no index: ${index}, veio desse array: ${array}`;
}

function meuMetodoMap(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let elementos = array[i]
        newArray.push(callback(elementos, i, newArray))
    }
    return newArray
}
// console.log(meuMetodoMap(array, minhaCallBackMap))


// Filter
function minhaCallBackFilter(element, i, array) {

    if (element > 2 && i && array.length > 2) {
        return true
    }

}

function meuMetodoFilter(array, callback) {
    let newArray = []
    for (i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i])
        }
    }
    return newArray
}
// console.log(meuMetodoFilter(array, minhaCallBackFilter))


// Reduce
let total = 0
function minhaCallBackReduce(element) {
    total = total += element
    return total
}

function meuMetodoReduce(array, callback) {

    for (let i = 0; i < array.length; i++) {
        element = array[i]
        callback(element)
    }
   
}
console.log(meuMetodoReduce(array, minhaCallBackReduce))


