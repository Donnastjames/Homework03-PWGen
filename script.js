// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharChoices = ['!','"','#','$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', "^", '_', '`', '{', '|', '}', '~'];

// Generate a password ...
function generatePassword() {
  console.log('Called generatePassword()');
  var charCount = window.prompt("How long does your password need to be? Between 8 and 128:");
  console.log('charCount:', charCount);
  var useLowerCase = window.confirm(`Do you need lower case letters? OK for Yes, Cancel for No\n${lowerCaseChoices.join('')}`);
  console.log('useLowerCase:', useLowerCase);
  var useUpperCase = window.confirm(`Do you need upper case letters? OK for Yes, Cancel for No\n${upperCaseChoices.join('')}`);
  console.log('useUpperCase', useUpperCase);
  var useNumbers = window.confirm(`Do you need numbers? OK for Yes, Cancel for No\n${numberChoices.join('')}`);
  console.log('useNumbers', useNumbers);
  var useSpecialChars = window.confirm(`Do you need special characters? OK for Yes, Cancel for No\n${specialCharChoices.join('')}`);
  console.log('useSpecialChars', useSpecialChars);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
