// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript


// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  
// sort with the smallest value first and largest value last
  
   ages.sort ((a,b) => a - b);
  
//  The slice() method returns a copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. 
//  A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
   
  return ages.slice (-2)
}