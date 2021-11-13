// Assignment code here
function prompts () {
  var helloPrompt = window.alert("Hello! Complete the following prompts to generate your password.");

  var lowerCasePrompt = window.prompt("CONFIRM if you want LOWER CASE letters in your password. Enter YES or NO.");
  var upperCasePrompt = window.prompt("CONFIRM if you want UPPER CASE letters in your password. Enter YES or NO.");
  var numericPrompt = window.prompt("CONFIRM if you want NUMBERS in your password. enter YES or NO.");
  var specialCharPrompt = window.prompt("CONFIRM if you want SPECIAL CHARACTERS in your password. Enter YES or NO.");

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  prompts ();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
