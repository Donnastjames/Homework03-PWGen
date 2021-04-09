// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseChoices = Object.freeze(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);

const upperCaseChoices = Object.freeze(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);

const numberChoices = Object.freeze(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

const specialCharChoices = Object.freeze(['!','"','#','$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', "^", '_', '`', '{', '|', '}', '~']);

/**
 * Given the length of an array, return a random index
 * from anywhere between 0 and arrayLength - 1.
 * 
 * @param arrayLength the length of an array
 * @returns a random index from anywhere between 0 and arrayLength - 1
 */
function pickRandArrayIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

/**
 * Given an array of chars, return a random character from that array.
 * @param arrayOfChars 
 * @returns a random character from that arrayOfChars
 */
function pickRandCharFromArray(arrayOfChars) {
  const randIndex = pickRandArrayIndex(arrayOfChars.length);
  return arrayOfChars[randIndex];
}

/**
 * Given an array, randomly pick an index within the array
 * that is known to contain a null element.  If no such element
 * can be found, show a window.alert() and return -1.
 * 
 * @param array,
 * return a random index that is known to contain a null element,
 * or -1 if no null element could be found.
 */
function pickIndexContainingNull(array) {
  let index = pickRandArrayIndex(array.length);

  for (let attempt = 0; attempt < array.length; attempt += 1) {
    if (array[index] === null) {
      return index;
    }

    index = (index + 1) % array.length;
  }

  window.alert("pickIndexContainingNull() called on array without any null elements!");
  return -1;
}


// Generate a password ...
function generatePassword() {
  console.log('Called generatePassword()');
  const charCount = window.prompt("How many characters does your password need to have? Between 8 and 128:");
  console.log('charCount:', charCount);
  // TODO: Show an error if the charCount is not a number between 8 and 128.
  const useLowerCase = window.confirm(`Do you need lower case letters? OK for Yes, Cancel for No\n${lowerCaseChoices.join('')}`);
  console.log('useLowerCase:', useLowerCase);
  const useUpperCase = window.confirm(`Do you need upper case letters? OK for Yes, Cancel for No\n${upperCaseChoices.join('')}`);
  console.log('useUpperCase', useUpperCase);
  const useNumbers = window.confirm(`Do you need numbers? OK for Yes, Cancel for No\n${numberChoices.join('')}`);
  console.log('useNumbers', useNumbers);
  const useSpecialChars = window.confirm(`Do you need special characters? OK for Yes, Cancel for No\n${specialCharChoices.join('')}`);
  console.log('useSpecialChars', useSpecialChars);

  // The following will ultimately contain all chars that we may choose from
  // as we generate our password.  It will keep growing as we discover which
  // choices are available ...
  let allPossibleChoices = [];
  console.log('allPossibleChoices starting off as:', allPossibleChoices);

  // This array will represent the final returned password.
  // It will start off filled with charCount null(s), where
  // null(s) mean we haven't chosen the character yet ...
  let generatedPassword = new Array(charCount).fill(null);

  if (useLowerCase) {
    allPossibleChoices.push(...lowerCaseChoices);
    // Pick a random element of generatedPassword, and then place a random
    // lower case letter there to make sure we always have at least one
    // lower case character ...
    const randomIndex = pickIndexContainingNull(generatedPassword);
    if (randomIndex === -1) {
      console.log("Couldn't find a place for our first lower case character.");
      return null;
    }
    const randLowerCaseChar = pickRandCharFromArray(lowerCaseChoices);
    generatedPassword[randomIndex] = randLowerCaseChar;
  }

  if (useUpperCase) {
    allPossibleChoices.push(...upperCaseChoices);
    const randomIndex = pickIndexContainingNull(generatedPassword);
    if (randomIndex === -1) {
      console.log("Couldn't find a place for our first upper case character.");
      return null;
    }
    const randUpperCaseChar = pickRandCharFromArray(upperCaseChoices);
    generatedPassword[randomIndex] = randUpperCaseChar;
  }

  if (useNumbers) {
    allPossibleChoices.push(...useNumbers);
    const randomIndex = pickIndexContainingNull(generatedPassword);
    if (randomIndex === -1) {
      console.log("Couldn't find a place for our first number character.");
      return null;
    }
    const randNumberChar = pickRandCharFromArray(numberChoices);
    generatedPassword[randomIndex] = randNumberChar;
  }

  if (useSpecialChars) {
    allPossibleChoices.push(...useSpecialChars);
    const randIndex = pickIndexContainingNull(generatedPassword);
    if (randIndex === -1) {
      console.log("Couldn't find a place for our first special character.")
      return null;
    }
    const randSpecialChar = pickRandCharFromArray(useSpecialChars);
    generatedPassword[randomIndex] = randSpecialChar;
  }

  // TODO: Use a for loop to pick chars for all remaining
  //   null elements within the generatedPassword[] array.

  console.log('generatedPassword() returning:', generatedPassword.join(''));
  return generatedPassword.join('');
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
