// Array
let array1: Array<number> = [1, 2, 3];
let array2: number[] = [4, 5, 6, 7];
let array3: number[] = [10];

array3 = [11];
array3 = [12, 13];
/*
src/arrays.ts:14:11 - error TS2322: Type 'string' is not assignable to type 'number'.

8 array3 = ['Hello'];
            ~~~~~~~
*/
// array3 = ['Hello'];