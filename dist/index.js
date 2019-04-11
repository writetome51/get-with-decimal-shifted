"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_integer_1 = require("error-if-not-integer");
var error_if_not_finite_number_1 = require("error-if-not-finite-number");
// To move decimal to left, have numPlacesToMoveDecimal be a negative number.
function getWithDecimalShifted(num, numPlacesToMoveDecimal) {
    error_if_not_finite_number_1.errorIfNotFiniteNumber(num);
    error_if_not_integer_1.errorIfNotInteger(numPlacesToMoveDecimal);
    var factor = 1, i = -1, positiveNumPlaces = Math.abs(numPlacesToMoveDecimal);
    while (++i < positiveNumPlaces)
        factor *= 10;
    if (numPlacesToMoveDecimal < 0)
        return (num / factor);
    else
        return (num * factor);
}
exports.getWithDecimalShifted = getWithDecimalShifted;
