// Given that

// f0 = '0'
// f1 = '01'
// f2 = '010' = f1 + f0
// f3 = '01001' = f2 + f1

// You will be given a number and your task is to return the nth fibonacci string. For example:

// solve(2) = '010'
// solve(3) = '01001'
// Sample Tests:
// describe("Basic tests", function(){
//     Test.assertEquals(solve(0),'0');
//     Test.assertEquals(solve(1),'01');
//     Test.assertEquals(solve(2),'010');
//     Test.assertEquals(solve(3),'01001');
//     Test.assertEquals(solve(5),'0100101001001');
//     });

function solve(n){
  
    let f0 = '0';
    let f1 = '01';
    let result = ' ';
   
    if (n == 0) return f0;
    if (n == 1) return f1;
    for (let i = 2; i <= n; i++) {
     result  = f1 + f0;
     f0 = f1;
     f1 = result;
     }
   return result;
   
 }

//  or

const solve = (n) => n === 0 ? '0' : n === 1 ? '01' : solve(n - 1) + solve(n - 2);