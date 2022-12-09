// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ("0123456789");
var symbols = ("!@#$%&.()^");
var lowLetters = ("abcdefghijklmnopqrstuvwxyz");
var upLetters =("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

function askLength() {
  var charLength = prompt ("How many characters should your password be?");
  if (charLength<8) {
    alert("Password too small, please pick a number between 8 and 128.")
    askLength();
  } else if (charLength>128){
    alert("Password too long, please pick a number between 8 and 128.")
    askLength();
  } else if (isNaN(charLength)) {
    alert("Not valid. Please select a number between 8 and 128.")
    askLength();
  } else {
    return charLength;
  }

};

function generatePassword(){
  console.log("Hey! You clicked the button!");
  askLength();
  
  return "Generated Password";
  /* 
  The alert should ask how many characters the password should have - minimum 8, maximum 128
  The alert should then ask if it should use special characters.
  The alert should then ask if it should include numbers.
  The alert should then ask if it should include upper case letters.
  The alert should then ask if it should use lowercase letters.
  

  */
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //make this function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
