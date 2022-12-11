// Assignment Code

//Stating all the global variables.
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var symbols = "!@#$%&.()^";
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//The function asking how many characters the password should be.
function askLength() {
  var charLength = prompt("How many characters should your password be?");
  if (charLength < 8) {
    alert("Password too small, please pick a number between 8 and 128.")
    askLength();
  } else if (charLength > 128) {
    alert("Password too long, please pick a number between 8 and 128.")
    askLength();
  } else if (isNaN(charLength)) {
    alert("Not valid. Please select a number between 8 and 128.")
    askLength();
  } else {
    return charLength;
  };
};

//The function asking if any uppercase letters should be in the password.
function askUpletters() {
  var askUpLettersv = confirm("Do you want uppercase letters in your password?");
  if (askUpLettersv) {
    return upLetters.split("");
  } else {
    return "";
  };
};

//The function asking if any lowercase letters should be in the password.
function askLowletters() {
  var askLowLettersv = confirm("Do you want lowercase letters in your password?");
  if (askLowLettersv) {
    return lowLetters.split("");
  } else {
    return "";
  };
};

//The function asking if any numbers should be in the password.
function askNum() {
  var askNumv = confirm("Do you want numbers in your password?");
  if (askNumv) {
    return numbers.split("");
  } else {
    return "";
  };
};

//The function asking if any symbols should be in the password.
function askSym() {
  var askSymv = confirm("Do you want special symbols in your password?");
  if (askSymv) {
    return symbols.split("");
  } else {
    return "";
  };
};

//The function to generate the password into a string.
function generatePassword() {
  var characters = [];
  var pass = [];
  var pwLength = askLength();
  characters.push(...askUpletters());
  characters.push(...askLowletters());
  characters.push(...askNum());
  characters.push(...askSym());
  if (characters.length === 0) {
    alert("You must choose at least one type of character.")
    characters.push(...askUpletters());
    characters.push(...askLowletters());
    characters.push(...askNum());
    characters.push(...askSym());
  }; 
  for (i = 0; i < pwLength; i++) {
    var random = Math.floor(Math.random() * (characters.length - 1));
    pass.push(characters[random]);
  };

  return pass.join("");

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //make this function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
