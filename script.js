// Assignment code here
let lengthOfPassword, lowerCase, upperCase, numeric, specialCharacters;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

// Making questions for the password using a 'prompt'.
// https://www.w3schools.com/jsref/met_win_prompt.asp
function writePassword() {
  do {
    lengthOfPassword = prompt("Choose a length of at least 8 characters and no more than 128 characters?");
  } 
  while (lengthOfPassword < 8 || lengthOfPassword > 128) 
  // do
  lowerCase = prompt('Should your password include lower case? enter Yes/No')
  upperCase = prompt('Should your password include upper case? enter Yes/No')
  numeric = prompt('Should your password include numeric? enter Yes/No')
  specialCharacters = prompt('Should your password include speacial characters? enter Yes/No')
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Creating a function, also making arguments using 'Boolean if statments'.
// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

function generatePassword() {
  var result = '';
  var characters = '';
  // Booleans has one or two values either true or false.
  // https://www.w3schools.com/js/js_booleans.asp
  
  //concat returns a new array.
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  if (lowerCase === 'Yes') {
    characters = characters.concat('abcdefghijklmnopqrstuvwxyz') 
  } 
  if (upperCase === 'Yes') {
    characters = characters.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ') 
  }
  if (numeric === 'Yes') {
    characters = characters.concat('0123456789') 
  }
  if (specialCharacters === 'Yes') {
    characters = characters.concat('\.[]{}()<>*+-=!?^$|') 
  }
  var charactersLength = characters.length;
  for ( var i = 0; i < lengthOfPassword; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 } 
 // return function ends the function.
 return result
}
