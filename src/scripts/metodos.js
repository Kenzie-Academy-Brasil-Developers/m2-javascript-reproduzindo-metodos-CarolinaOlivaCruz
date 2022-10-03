array = [1, 2, 3, 4, 5, 2]

// For Each
let minhaCallBackForEach = (element, i, array) => array[i] = `Número ${element} na posição: ${i}, veio desse array: ${array}`;

function meuMetodoforEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        callback(currentValue, i, array)
    }
}
meuMetodoforEach(array, minhaCallBackForEach)




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



//Reduce
function minhaCallBackReduce(total, element) {
    return total + element
}

function meuMetodoReduce(array, callback) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        element = array[i]
        total = callback(total, element)
    }
    return total
}




//Find

function minhaCallBackFind(element,    num){
    if(element > num) {
        return true
    }
}

function meuMetodoFind(array, callback){
    let elementEncontrado = false
    for(let i = 0; i < array.length; i++){
        element = array[i]
        elementEncontrado = callback(element, 2)
        if(elementEncontrado){
            return array[i]
        }
    }
     
}




//Includes
function minhaCallBackIncludes(num, elemento){
    if (elemento === num) {
        return true
    } else {
        return false
    }
}

function meuMetodoIncludes(array, num) {
    let elemento

    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            elemento = array[i]
        }
    }

   return minhaCallBackIncludes(num, elemento)
 
}





// IndexOf

// function minhaCallBackIndex(){

// }

// function index(array){
//     let arrayIndex = []

//         for(let i = 0; i < array.length; i++){
//             if(array[i] !== -1){
//                 arrayIndex.push(i)
//             }
                
//     return arrayIndex
// }
// }
// console.log(index(array, -1))
