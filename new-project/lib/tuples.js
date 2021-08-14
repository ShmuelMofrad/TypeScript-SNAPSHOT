"use strict";
// Tuple
let tuple = [0, 0];
tuple = [1, 1];
/**
 * src/tuples.ts:18:1 - error TS2322: Type '[number]' is not assignable to type '[number, number]'.
  Source has 1 element(s) but target requires 2.

 tuple = [1];
  ~~~~~

src/tuples.ts:19:1 - error TS2322: Type '[number, number, number]' is not assignable to type '[number, number]'.
  Source has 3 element(s) but target allows only 2.

 tuple = [1, 1, 2];
 *
 */
// tuple = [1];
// tuple = [1, 1, 2];
/**
 * src/tuples.ts:26:10 - error TS2322: Type 'string' is not assignable to type 'number'.

 tuple = ['Hello', 1];
 *
 */
// tuple = ['Hello', 1];
