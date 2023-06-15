// Assignment code here
var passwordLength = 0;
var upperCase = true;
var lowerCase = true;
var specialCharacters = true;


function generatePassword() {
  passwordLength = window.prompt("Choose your password length. Any number between 8 and 128 ", "8");
  console.log(passwordLength);

  upperCase = window.confirm("Do you want any uppercase letters? Ok for yes, Cancel for no");
  console.log(upperCase); // Yes = true, No = false
  
  lowerCase = window.confirm("Do you want any lowercase letters? Ok for yes, Cancel for no");
  console.log(lowerCase); // Yes = true, No = false

  specialCharacters = window.confirm("Do you want any special characters in your password? Special characters include \"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  console.log(specialCharacters); // Yes = true, No = false

  if ((upperCase == false) && (lowerCase == false)){
    alert("Minimum requirements: You need have an upper or lowercase letters");
    return;
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


/*function startPrompts() {
  var passwordLength = prompt("Choose your password length. Any number between 8 and 128 ", "8");
  console.log(passwordLength);

  var upperCase = confirm("Do you want any uppercase letters? Ok for yes, Cancel for no");
  console.log(upperCase); // Yes = true, No = false
  
  var lowerCase = confirm("Do you want any lowercase letters? Ok for yes, Cancel for no");
  console.log(lowerCase); // Yes = true, No = false

  var specialCharacters = confirm("Do you want any special characters in your password? Special characters include \"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  console.log(specialCharacters); // Yes = true, No = false

  if ((upperCase == false) && (lowerCase == false)){
    alert("Minimum requirements: You need have an upper or lowercase letters");
  }
}*/