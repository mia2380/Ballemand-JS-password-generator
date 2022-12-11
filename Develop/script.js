// Assignment code here
var password = document.getElementById("password");

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return;
  }
  var passwordLowercase = confirm("Click OK to confirm including lowercase characters");
  var passwordUppercase = confirm("Click OK to confirm including uppercase characters");
  var passwordNumeric = confirm("Click OK to confirm including numeric characters");
  var passwordSpecial = confirm("Click OK to confirm including special characters");
  if (passwordLowercase === false && passwordUppercase === false && passwordNumeric === false && passwordSpecial === false) {
    alert("You must select at least one character type");
    return;
  }
  var passwordCharacters = "";
  if (passwordLowercase === true) {
    passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (passwordUppercase === true) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (passwordNumeric === true) {
    passwordCharacters += "0123456789";
  }
  if (passwordSpecial === true) {
    passwordCharacters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return password;
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
