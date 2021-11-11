// Given a sequence of numbers, find the largest pair sum in the sequence.
// For example:
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.
// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

function largestPairSum(numbers)
{
//sort with the largest value first and smallest value last
  const result = numbers.sort((a,b) => b - a);
  
  return result[0] + result[1];
}