# getWithDecimalShifted(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numPlacesToMoveDecimal<br>): number

Returns `num` with decimal shifted by `numPlacesToMoveDecimal`.  
`numPlacesToMoveDecimal` can be negative (to move the decimal to the left)  
or positive (to move the decimal to the right).

## Examples
```
getWithDecimalShifted(111.2345,  1);
    // --> 1112.345

getWithDecimalShifted(111.2345,  2);
    // --> 11123.45

getWithDecimalShifted(111.2345,  3);
    // --> 111234.5
 
 getWithDecimalShifted(1112345,  -1);
    // --> 111234.5
 
 getWithDecimalShifted(1112345,  -2);
    // --> 11123.45
 
 getWithDecimalShifted(1112345,  -3);
    // --> 1112.345
```

## Installation
`npm i  @writetome51/get-with-decimal-shifted`


## Loading
```
// if using TypeScript:
import { getWithDecimalShifted } from '@writetome51/get-with-decimal-shifted'; 
// if using ES5 JavaScript:
var getWithDecimalShifted = 
	require('@writetome51/get-with-decimal-shifted').getWithDecimalShifted;
```