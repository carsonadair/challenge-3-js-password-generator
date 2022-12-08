// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["@","$","#","_","-","%","!","&"]

var alpha = Array.from(Array(26)).map((e, i) => i + 65);
var upLetters = alpha.map((x) => String.fromCharCode(x));
console.log(upLetters);

var lowLetters = [];

upLetters.forEach(element => {
  lowLetters.push(element.toLowerCase());
});

console.log(lowLetters);

function generatePassword(){
  console.log("Hey! You clicked the button!");
  return "Generated Password";
  /* 
  When the button "generate password" is clicked, an alert should pop up.
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
