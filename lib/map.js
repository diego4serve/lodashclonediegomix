/**
 * Returns a new array transformed with a callback function
 * @param {array} array 
 * @param {function} callback
 * @returns {array} 
 */
function map(array, callback) {
    const length = Array.isArray(array) ? array.length : 0
    const newArray = new Array(length)

    for (let i = 0; i < length; i++) {
        newArray[i] = callback(array[i])
    }

    return newArray
}

module.exports = map