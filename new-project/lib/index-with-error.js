"use strict";
/*
 [00:00:00] File change detected. Starting incremental compilation...

src/index-with-error.ts:31:5 - error TS2322: Type 'number' is not assignable to type 'string'.

31 let message: string = 123;
       ~~~~~~~

src/index-with-error.ts:31:5 - error TS2451: Cannot redeclare block-scoped variable 'message'.

31 let message: string = 123;
       ~~~~~~~

  src/index.ts:9:5
    9 let message: string = 'Hello Developer, this is a TypeScript!';
          ~~~~~~~
    'message' was also declared here.

src/index.ts:9:5 - error TS2451: Cannot redeclare block-scoped variable 'message'.

9 let message: string = 'Hello Developer, this is a TypeScript!';
      ~~~~~~~

  src/index-with-error.ts:31:5
    31 let message: string = 123;
           ~~~~~~~
    'message' was also declared here.

[00:00:00] Found 3 errors. Watching for file changes.
*/
var message = 123;
message += ' , Hi again';
console.log(message);
