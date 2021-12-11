// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"
// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript

// Solution1:
function position(letter){
    const alphabet ="abcdefghijklmnopqrstuvwxyz";
      return  "Position of alphabet: " + (alphabet.indexOf(letter) + 1)
    }

// Solution2:
function position(letter){
    const abc = ['a', 'b','c', 'd', 'e','f', 'g','h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x' ,'y', 'z'];
    for (i = 0; i < abc.length; i++) {
      if (letter == abc[i])
      return "Position of alphabet: " + (i + 1);
    }  
   }
// Solution3:
function position(letter){
    return `Position of alphabet: ${letter.charCodeAt()-96}`;
    }

