#NPM pakage to determine if a number is odd or even
###Install with npm:
```
$ npm install --save oddoreven
```


###Usage:
```
const oddeven = require('oddoreven');
//isodd() and iseven() functions take integer as input and returns boolean

oddeven.iseven(3)  //returns false     

oddeven.isodd(3)   //returns true
```
```
//pickodd()  and pickeven() functions takes array as input and returns array

oddeven.pickodd([1,2,3,4,5,6,7,8,9])    // returns [1,3,5,7,9]

oddeven.pickeven([1,2,3,4,5,6,7,8,9])   // returns [2,4,6,8]

```
