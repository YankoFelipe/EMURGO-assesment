/* EMURGO coding assesment
 * Problem c
 * Author: Yanko Arevalo
 * Wrote in Javascfript(ES5)
 */

// c)
/* Problem description
 * You have an array of characters (string) that may be '1', '0' o '*'. e.g. 10*00*0. The program needs to generate an output of all the possible combinations by replacing * with an 0 and 1. I.e. input> 10**0 output> 10000, 10010, 10100, 10110. Input > *0 output > 00, 10.
 *
 * While your program will take longer to run based on the number of possible combinations, your program shouldn't crash (or hang) on an input with many Xs. Or explain how you technically would approach this further.
 *
 * What is the big 0 notation for your program?
 */
function asteriskExpander(word) {
	// Check that input is a string
	if (!(typeof word === 'string' || word instanceof String)) {
		throw new Error ('Invalid input. It must be a string.');
	}
	// Check that there is only ones, zeros and asterisks
	if (/[^10\*]/.test(word)) {
		throw new Error ('Invalid input. The string can contain only ones, zeros and asterisks.');
	}

	let arrayOfCombinations = [];

	word.split("").forEach(character => arrayOfCombinations = addCharacterToCombinations(arrayOfCombinations, character));

	return arrayOfCombinations;
}

function addCharacterToCombinations(arrayOfCombinations, character) {
	if (character !== '*') {
		return arrayOfCombinations.length === 0 ?
                       arrayOfCombinations.concat(character) :
                       arrayOfCombinations.map(combination => combination.concat(character));
	}
	const newOnes = addCharacterToCombinations(arrayOfCombinations, '1');
	const newZeros = addCharacterToCombinations(arrayOfCombinations, '0');
	return newZeros.concat(newOnes);
}

/* Q: While your program will take longer to run based on the number of possible combinations, your program shouldn't crash (or hang) on an input with many Xs. Or explain how you technically would approach this further.// What is the big 0 notation for your program?
 * A: There are 3 ways that could make this code crash
 *    1: The input is not a string (see the first assert at the beggining of asteriskExpander()).
 *       This is an input issue and is out of the scope of the problem description.
 *    2: The input contains a character different than '0', '1' or '*' (see the second assert at the beggining of asteriskExpander()).
 *       This is an input issue and is out of the scope of the problem description.
 *    3: The Machine run out of memory. This can be fixed by writing arrayOfCombinations into disk after some memory threshold,
 *       then writing into the file the new ones and zeros and duplicating the file when a new asterisk appears.
 *       This approach would made the program slower but it would not crash.
 */
/* Q: What is the big 0 notation for your program?
 * A: The worst case would be when the input are only asterisks and the output would duplicate for each one of these asterisks,
 *    then the complexity would be O(2^n) */


module.exports.asteriskExpander = asteriskExpander;
