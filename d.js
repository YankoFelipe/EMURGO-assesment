/* EMURGO coding assesment
 * Problem d
 * Author: Yanko Arevalo
 * Wrote in Javascfript(ES5)
 */

// d)
/* Problem description
 * You have an array of lists e.g.; [[1,3], ['a'], [4,5]]. We would like to obtain all the permutations between the lists. The answer for this example is: (1,a,4) (1,a,5) (3,a,4) (3,a,5). Code a program that does this for any quantity of lists and elements on them.
 */
function permutateArrayOfList(arrayOfLists) {
    // Check that the input is an array
    if (!Array.isArray(arrayOfLists)) {
        throw new Error ('Invalid input. The input must be an array.');
    }
    // Check that the elements of the inputs are arrays too
    if (arrayOfLists.some(list => !Array.isArray(list))) {
        throw new Error ('Invalid input. The elements of the input must be arrays.');
    }

    let mixedArray = [];

    arrayOfLists.forEach(list => mixedArray = mixer(mixedArray, list));
    return mixedArray;
}

function mixer(mixedArray, list) {
    if (mixedArray.length === 0 && list.length === 1) {
        return mixedArray.concat([list]);
    } else if (list.length === 1) {
        return mixedArray.map(mixedArrayElement => mixedArrayElement.concat(list));
    }

    let newArrays = [];
    list.forEach(function(listElement) {
        newArrays = newArrays.concat(mixer(mixedArray, [listElement]));
    });
    return newArrays;
}

module.exports.permutateArrayOfList = permutateArrayOfList;
