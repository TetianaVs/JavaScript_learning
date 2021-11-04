// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bMi = weight / height**2
    
    if (bMi <= 18.5) {
      return "Underweight";
    } else if (bMi <= 25.0) {
      return "Normal";
    } else if ( bMi <= 30.0) {
      return "Overweight";
    } else {
      return "Obese";
  }
}