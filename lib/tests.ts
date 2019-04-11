import { getWithDecimalShifted } from './index';


console.log(getWithDecimalShifted(111.2345, 1)); // 1112.345

console.log(getWithDecimalShifted(111.2345, 2)); // 11123.449999999999

console.log(getWithDecimalShifted(111.2345, 3)); // 111234.5

console.log(getWithDecimalShifted(111.2345, 4)); // 1112345

console.log(getWithDecimalShifted(111.2345, 5)); // 11123450

console.log(getWithDecimalShifted(111.2345, -1)); // 11.12345

console.log(getWithDecimalShifted(111.2345, -2)); // 1.112345

console.log(getWithDecimalShifted(111.2345, -3)); // 0.1112345

console.log(getWithDecimalShifted(111.2345, -4)); // 0.01112345

console.log(getWithDecimalShifted(111.2345, -5)); // 0.001112345

console.log(getWithDecimalShifted(0.004555, -1)); // 0.0004555

console.log(getWithDecimalShifted(0.004555, -2)); // 0.00004555

console.log(getWithDecimalShifted(0.004555, -3)); // 0.000004555

console.log(getWithDecimalShifted(0.004555, -4)); // 4.555e-7


console.log(getWithDecimalShifted(-11100.2345, -4)); // -1.11002345

console.log(getWithDecimalShifted(-11100.2345, -5)); // -0.111002345


console.log(getWithDecimalShifted(-111000000, -4)); // -11100

console.log(getWithDecimalShifted(-111000000, -5)); // -1110


console.log(getWithDecimalShifted(11.10000, 4)); // 111000

console.log(getWithDecimalShifted(11.10000, 5)); // 1110000
