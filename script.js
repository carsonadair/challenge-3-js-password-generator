// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var symbols = "!@#$%&.()^";
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

function askUpletters() {
  var askUpLettersv = confirm("Do you want uppercase letters in your password?");
  if (askUpLettersv) {
    return upLetters.split("");
  } else {
    return "";
  };
};

function askLowletters() {
  var askLowLettersv = confirm("Do you want lowercase letters in your password?");
  if (askLowLettersv) {
    return lowLetters.split("");
  } else {
    return "";
  };
};

function askNum() {
  var askNumv = confirm("Do you want numbers in your password?");
  if (askNumv) {
    return numbers.split("");
  } else {
    return "";
  };
};

function askSym() {
  var askSymv = confirm("Do you want special symbols in your password?");
  if (askSymv) {
    return symbols.split("");
  } else {
    return "";
  };
};

function generatePassword() {
  var characters = [];
  var pass = [];
  console.log("Hey! You clicked the button!");
  var pwLength = askLength();
  characters.push(...askUpletters());
  characters.push(...askLowletters());
  characters.push(...askNum());
  characters.push(...askSym());
  console.log(characters);
  if (characters.length === 0) {
    alert("You must choose at least one type of character.")
    generatePassword();
  }; 
  for (i = 0; i < pwLength; i++) {
    var random = Math.floor(Math.random() * (characters.length - 1));
    pass.push(characters[random]);
    console.log(random);
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
