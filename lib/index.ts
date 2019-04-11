import { errorIfNotInteger } from 'error-if-not-integer';
import { errorIfNotFiniteNumber } from 'error-if-not-finite-number';


// To move decimal to left, have numPlacesToMoveDecimal be a negative number.

export function getWithDecimalShifted(num, numPlacesToMoveDecimal): number {
	errorIfNotFiniteNumber(num);
	errorIfNotInteger(numPlacesToMoveDecimal);

	let factor = 1, i = -1, positiveNumPlaces = Math.abs(numPlacesToMoveDecimal);
	while (++i < positiveNumPlaces) factor *= 10;

	if (numPlacesToMoveDecimal < 0) return (num / factor);
	else return (num * factor);
}
