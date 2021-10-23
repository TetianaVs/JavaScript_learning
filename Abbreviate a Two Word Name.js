// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let letter1  = name [0];
    let letter2;
       // for loop
       for (let i = 0; i < name.length; i++) {
           //if index == space, return next index[i+1] as letter2
         if (name [i] == " ") {
           letter2 = name[i+1]
       } 
      }
      return (letter1 + '.' + letter2).toUpperCase();
    }