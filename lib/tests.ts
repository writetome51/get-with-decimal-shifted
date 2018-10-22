import { getWithDecimalShifted } from './getWithDecimalShifted';


console.log(getWithDecimalShifted(1, 111.2345));

console.log(getWithDecimalShifted(2, 111.2345));

console.log(getWithDecimalShifted(3, 111.2345));

console.log(getWithDecimalShifted(4, 111.2345));

console.log(getWithDecimalShifted(5, 111.2345));

console.log(getWithDecimalShifted(-1, 111.2345));

console.log(getWithDecimalShifted(-2, 111.2345));

console.log(getWithDecimalShifted(-3, 111.2345));

console.log(getWithDecimalShifted(-4, 111.2345));

console.log(getWithDecimalShifted(-5, 111.2345));

console.log(getWithDecimalShifted(-1, 0.004555));

console.log(getWithDecimalShifted(-2, 0.004555));

console.log(getWithDecimalShifted(-3, 0.004555));

console.log(getWithDecimalShifted(-4, 0.004555));

console.log(getWithDecimalShifted(-5, 0.004555));


console.log(getWithDecimalShifted(-4, -11100.2345));

console.log(getWithDecimalShifted(-5, -11100.2345));


console.log(getWithDecimalShifted(-4, -111000000));

console.log(getWithDecimalShifted(-5, -111000000));


console.log(getWithDecimalShifted(4, 11.10000));

console.log(getWithDecimalShifted(5, 11.10000));
