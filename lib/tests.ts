import { getWithDecimalShifted } from './index';


console.log(getWithDecimalShifted(111.2345, 1));

console.log(getWithDecimalShifted(111.2345, 2));

console.log(getWithDecimalShifted(111.2345, 3));

console.log(getWithDecimalShifted(111.2345, 4));

console.log(getWithDecimalShifted(111.2345, 5));

console.log(getWithDecimalShifted(111.2345, -1));

console.log(getWithDecimalShifted(111.2345, -2));

console.log(getWithDecimalShifted(111.2345, -3));

console.log(getWithDecimalShifted(111.2345, -4));

console.log(getWithDecimalShifted(111.2345, -5));

console.log(getWithDecimalShifted(0.004555, -1));

console.log(getWithDecimalShifted(0.004555, -2));

console.log(getWithDecimalShifted(0.004555, -3));

console.log(getWithDecimalShifted(0.004555, -4));

console.log(getWithDecimalShifted(0.004555, -5));


console.log(getWithDecimalShifted(-11100.2345, -4));

console.log(getWithDecimalShifted(-11100.2345, -5));


console.log(getWithDecimalShifted(-111000000, -4));

console.log(getWithDecimalShifted(-111000000, -5));


console.log(getWithDecimalShifted(11.10000, 4));

console.log(getWithDecimalShifted(11.10000, 5));
