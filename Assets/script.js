var questionPasswordLength;
var questionNum;
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "\"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var num =  "0123456789"
var userChoice;
var finalPassword = "";

function generatePassword() {
  questionPasswordLength = parseInt(prompt("Choose your password length. \nAny number between 8 and 128 "));
  console.log(questionPasswordLength);

  // worked with tutor to incorporate the isNaN function 
  // if user entry is not an number, prompt will return null
  if(isNaN(questionPasswordLength)) {
    alert("Please choose a number");
    return null;
  }
  if (questionPasswordLength < 8 || questionPasswordLength > 128) {
    alert("Please choose a range from 8 to 128 characters");
    return null;
  } else {
    questionUpperCase = window.confirm("Do you want any uppercase letters? \nOk for yes, Cancel for no");
    //Yes = true, No = false
    
    questionLowerCase = window.confirm("Do you want any lowercase letters? \nOk for yes, Cancel for no");
    // Yes = true, No = false

    questionSpecialCharacters = window.confirm("Do you want any special characters in your password? \n Special characters include \"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
    // Yes = true, No = false

    questionNum = window.confirm("Do you want to include any numbers? \n Ok for yes, Cancel for no");
    // Yes = true, No = false
      
  // ⬇ if all 4 choices are selected yes
    if (questionUpperCase  && questionLowerCase && questionNum && questionSpecialCharacters ) {
      userChoice = alphaUpper + alphaLower +num +specialCharacters;
    
    // ⬇ if 3 choices are selected yes
    } else if(questionUpperCase && questionLowerCase && questionNum){
      userChoice = alphaUpper + alphaLower + num;

    } else if(questionUpperCase && questionLowerCase && questionSpecialCharacters){
      userChoice = alphaUpper + alphaLower + specialCharacters;
    
    } else if(questionUpperCase && questionNum && questionSpecialCharacters){
      userChoice = alphaUpper + num + specialCharacters;

    } else if(questionLowerCase && questionNum && questionSpecialCharacters){
      userChoice = alphaLower + num + specialCharacters;

    // ⬇ if all 2 choices are selected yes
    } else if(questionUpperCase && questionLowerCase){
      userChoice = alphaUpper + alphaLower;

    } else if(questionUpperCase && questionNum){
      userChoice = alphaUpper + num;

    } else if(questionUpperCase && questionSpecialCharacters){
      userChoice = alphaUpper + specialCharacters;

    } else if(questionLowerCase && questionNum){
      userChoice = alphaLower + num;
    
    } else if(questionLowerCase && questionSpecialCharacters){
      userChoice = alphaLower + specialCharacters;

    } else if(questionNum && questionSpecialCharacters){
      userChoice = num + specialCharacters;

    // ⬇ if  1 choice is selected yes 
    } else if(questionUpperCase){
      userChoice = alphaUpper;

    } else if(questionLowerCase){
      userChoice = alphaLower;

    } else if(questionNum){
      userChoice = num;

    } else if (specialCharacters){
      userChoice = specialCharacters;
    }

    else if (!questionUpperCase && !questionUpperCase && !questionSpecialCharacters && !questionSpecialCharacters){
      // ⬇ if no selections are made
      alert("Minimum requirements not met: \nYou need have select at least one criteria");
    }
    console.log(userChoice);
    

    // generates final concat password based off criteria
    // received help help from tutor center and ASK BCS for this portion
    for (var i = 0; i < questionPasswordLength-1; i++) {
      var passwordPlaceholder = Math.floor(Math.random() * userChoice.length);
      finalPassword += userChoice[passwordPlaceholder];
      console.log(finalPassword);
      }
    
  }; 
  return finalPassword;
};
// Get references to the #generate element in HTML
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
