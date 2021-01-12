
library = {}

library.each = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i)
    }
}

library.filter = (array, fn) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray
}

library.map = (array, fn) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]));
    }
    return newArray
}


library.find = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i]), i) {
            return array[i]
        }
    }
}


library.findIdex = (array, value) => {
    const newArray = []

    for (let i = 0; i < array.length; i++) {
        if (arr[i]== value) {
            newArray.push(i)
        }
    }
    return newArray
}


library.contains = (array, value, fromIndex) => {
    for (fromIndex = 0; fromIndex < array.length; fromIndex++) {
        if (array[fromIndex] == value) {
            return true
        }
    }
    return false
}

library.pluck = (array, key) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {

        if (array[i].hasOwnProperty(key)) {
            newArray.push(array[i][key])
        }
    }
    return newArray
}

library.without = (array, value1, value2) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== value1 && array[i] !== value2) {
            newArray.push(array[i])
        }

    }

    return newArray
}


const arr = [12, 85, 60, 80, 120]
const stooges = [{nombre: 'moe', edad: 40}, {nombre: 'larry', edad: 50}, {nombre: 'rizado', edad: 60}];

//Call methods
const forEach = library.each(arr, (element) => {
    console.log("metodo forEach: " + element)
})

const filtrado = library.filter(arr, (element) => element > 60);
console.log("metodo filter: " + filtrado)

const map = library.map(arr, (element) => element * 2)
console.log("metodo map: "+ map)

const find = library.find(arr, (element) => element)
console.log("metodo find: "+ find)

const busqueda = library.findIdex(arr, 60)
console.log("metodo find Index: "+ busqueda)

const content = library.contains(arr, 12);
console.log("metodo containts: "+ content)

const pluck= library.pluck(stooges,'nombre');
console.log("metodo de pluck: "+ pluck)

const without = library.without(arr, 60,12)
console.log("metodo without: "+ without)