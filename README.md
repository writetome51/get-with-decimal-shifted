Takes number and returns it with decimal shifted by a given number places.

Examples:

getWithDecimalShifted(1, 111.2345);
 --> 1112.345

console.log(getWithDecimalShifted(2, 111.2345));
 --> 11123.45

console.log(getWithDecimalShifted(3, 111.2345));
 --> 111234.5
 
 getWithDecimalShifted(-1, 1112345);
  --> 111234.5
 
 console.log(getWithDecimalShifted(-2, 1112345));
  --> 11123.45
 
 console.log(getWithDecimalShifted(-3, 1112345));
  --> 1112.345
  