// Assignment code here

var arraySpecial = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
var arrayNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var arrayLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var arrayUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var passwordArray = [];
 

function generatePassword() {

  //greetings, human. 
  var helloPrompt = window.alert("Hello! Complete the following prompts to generate your password.");

  //want some lower case letter?
  var lowerCaseConfirm = window.confirm("CONFIRM if you want LOWER CASE letters in your password.");

  //how about some upper case ones, too? 
  var upperCaseConfirm = window.confirm("CONFIRM if you want UPPER CASE letters in your password.");

  //gotta sprinkle in some numbers while we're at it...
  var numericConfirm = window.confirm("CONFIRM if you want NUMBERS in your password.");

  //and some special characters to keep it classy
  var specialCharConfirm = window.confirm("CONFIRM if you want SPECIAL CHARACTERS in your password.");

  //now let's generate all of those in the password 
    if (lowerCaseConfirm) {
      passwordArray = passwordArray.concat(arrayLowerCase);
    }

    if (upperCaseConfirm) {
      passwordArray = passwordArray.concat(arrayUpperCase);
    }

    if (numericConfirm) {
      passwordArray = passwordArray.concat(arrayNumbers);
    }

    if (specialCharConfirm) {
      passwordArray = passwordArray.concat(arraySpecial);
    }





return passwordArray;



}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

