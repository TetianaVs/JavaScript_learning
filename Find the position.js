// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
    const abc = ['a', 'b','c', 'd', 'e','f', 'g','h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x' ,'y', 'z'];
    // for loop
    for (i = 0; i < abc.length; i++) {
      if (letter == abc[i])
      return "Position of alphabet: " + (i + 1);
    }
     
   }