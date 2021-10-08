const myEach = function(collection, callback) {
    // this means that regardless of IF statement, we use the right collection in next part of the logic
    let updatedCollection = collection
    // if the collection is NOT an array
    if (!Array.isArray(collection)) {
        updatedCollection = Object.values(collection);
    }

    updatedCollection.forEach(element => callback(element))
    return collection
}

const myMap = function(collection, callback) {
    let updatedCollection = collection
    if (!Array.isArray(collection)) {
        updatedCollection = Object.values(collection);
    }

    return updatedCollection.map(element => callback(element))
}

const myReduce = function(collection, callback, acc) {
    let updatedCollection = collection
    if (!Array.isArray(collection)) {
        updatedCollection = Object.values(collection);
    }
    // The if statement addresses if no start value is passed in for the accumulator
    if (!acc) {
      acc = updatedCollection[0];
      updatedCollection = updatedCollection.slice(1);
    }

    const len = updatedCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, updatedCollection[i], updatedCollection);
    }
    return acc;
}

const myFind = function(collection, predicate) {
    let updatedCollection = collection
    if (!Array.isArray(collection)) {
        updatedCollection = Object.values(collection);
    }

    return updatedCollection.find(element => predicate(element))
}

const myFilter = function(collection, predicate) {
    let updatedCollection = collection
    if (!Array.isArray(collection)) {
        updatedCollection = Object.values(collection);
    }

    return updatedCollection.filter(element => predicate(element))
}

const mySize = function(collection) {
    let updatedCollection = collection
    if (!Array.isArray(collection)) {
        updatedCollection = Object.values(collection);
    }

    return updatedCollection.length
}

const myFirst = function (arr, elements) {
    return elements ? arr.slice(0, elements) : arr[0];
}

const myLast = function (arr, elements) {
    if (!elements) {
        return arr[arr.length - 1];
    } else {
        return arr.slice(arr.length - elements, arr.length);
    } 
}

const myKeys = function(object) {
    return Object.keys(object)
}

const myValues = function(object) {
    return Object.values(object)
}