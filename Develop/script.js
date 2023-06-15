// Assignment code here
var questionPasswordLength;
var questionNum;
var alphaUpper = "ABCDEFGHIJKLMONOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "\"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var num =  "0123456789"
var userChoice;

function generatePassword() {
  questionPasswordLength = window.prompt("Choose your password length. \nAny number between 8 and 128 ");
  console.log(questionPasswordLength);
  if (questionPasswordLength < 8 || questionPasswordLength > 128) {
    alert("Please choose a range from 8 to 128 characters")
  } else {
    questionUpperCase = window.confirm("Do you want any uppercase letters? \nOk for yes, Cancel for no");
    console.log(questionUpperCase); // Yes = true, No = false
    
    questionLowerCase = window.confirm("Do you want any lowercase letters? \nOk for yes, Cancel for no");
    console.log(questionLowerCase); // Yes = true, No = false

    questionSpecialCharacters = window.confirm("Do you want any special characters in your password? \n Special characters include \"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
    console.log(questionSpecialCharacters); // Yes = true, No = false

    questionNum = window.confirm("Do you want to include any numbers? \n Ok for yes, Cancel for no");
    console.log(questionNum); // Yes = true, No = false
    
    if (!questionUpperCase && !questionUpperCase && !questionSpecialCharacters && !questionSpecialCharacters){
    // ⬇ if no selections are made
    alert("Minimum requirements not met: \nYou need have select at least one criteria");
    generatePassword();}
  
  // ⬇ if all 4 choices are selected yes
    else if (questionUpperCase  && questionLowerCase && questionNum && questionSpecialCharacters ) {
      userChoice = alphaUpper.concat(alphaLower,num,specialCharacters);
    
    //⬇ List all possibilities if user doesn't want upper case
    }else if (!questionUpperCase) { 
      
        // if statement is if all the other options are yes
        if (questionLowerCase && questionSpecialCharacters && questionNum){
          userChoice = alphaLower.concat(specialCharacters,num);
          
        } // ⬇  lower case yes, special characters yes, numbers no
          else if (questionLowerCase && questionSpecialCharacters && !questionNum){
          userChoice = alphaLower.concat(specialCharacters);
          
        } // ⬇ lower case yes, special characters no, number yes
          else if(questionLowerCase && !questionSpecialCharacters && questionNum){
          userChoice = alphaLower.concat(num);
          
        } // ⬇ lower case no, special characters yes, numbers yes
          else if(!questionLowerCase && questionSpecialCharacters && questionNum){
          userChoice = specialCharacters.concat(num);

        }
          // ⬇ lower case no, special characters no, numbers yes
          else if (!questionLowerCase && !questionSpecialCharacters && questionNum){
          userChoice = num;
          
        } // ⬇ lower case no, special characters yes, numbers no
          else {
          userChoice = specialCharacters;};
      
       //⬇ options if lower case is no
    }else if (!questionLowerCase){
      // ⬇ if upper yes, special characters yes, number yes
      if (questionUpperCase && questionSpecialCharacters && questionNum){
        userChoice = alphaUpper.concat(specialCharacters,num);
      } // ⬇ if upper yes, special characters no, number yes 
      else if (questionUpperCase && !questionSpecialCharacters && questionNum){
        userChoice = alphaUpper.concat(num);
      } // ⬇ if upper yes, special characters no, number no
      else {
        userChoice = alphaUpper;
      };
      // ⬇ if no special characters
    } else if (!questionSpecialCharacters){
      // yes to upper case, lower case and numbers 
      if (questionUpperCase && questionLowerCase && questionNum){
        userChoice = alphaUpper.concat(alphaLower, num);
      } // yes to upper case,  yes to lower, no to numbers
      else if (questionUpperCase && questionLowerCase && !questionNum){
        userChoice = alphaUpper.concat(alphaLower);
      } 
    }
  
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
