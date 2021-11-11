// Your task is to make two functions, max and min that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.
// #Examples:
// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function(list){
    //sort with the smallest value first and largest value last
      list.sort((a,b) => a - b)
      
      return list[0];
  }
  
  var max = function(list){
    //sort with the largest value first and smallest value last
      list.sort((a,b) => b - a)
      
      return list[0];
  }