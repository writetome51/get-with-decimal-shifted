# getWithDecimalShifted(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numPlacesToMoveDecimal<br>): number

Returns `num` with decimal shifted by `numPlacesToMoveDecimal`.  
`numPlacesToMoveDecimal` can be negative (to move the decimal left) or positive  
(to move the decimal right).

## Examples
```
getWithDecimalShifted(111.2345,  1);
    // --> 1112.345

getWithDecimalShifted(111.2345,  2);
    // --> 11123.45
 
 getWithDecimalShifted(1112345,  -1);
    // --> 111234.5
 
 getWithDecimalShifted(1112345,  -2);
    // --> 11123.45
```

## Installation
`npm i  @writetome51/get-with-decimal-shifted`


## Loading
```js
import { getWithDecimalShifted } from '@writetome51/get-with-decimal-shifted'; 
```
