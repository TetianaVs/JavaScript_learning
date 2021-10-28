// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
    const arrCapital = [];
    // for loop
    for (let i = 0; i < word.length; i ++){
    //   check Unicode of capital letters and add to array
      if (word[i].charCodeAt () >= 65 && word[i].charCodeAt () <=90) {
        arrCapital.push(i);
      }
    }
    return arrCapital;
  };