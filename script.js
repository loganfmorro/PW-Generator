// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    
function generatePassword() {

    let password = '';
    const numbers = confirm('Do you want numbers?');
    const upper = confirm('Do you want upper case letters?');
    const lower = confirm('Do you want lower case letters?');
    const special = confirm('Do you want special characters?');
    var charlength = prompt("How long do you want the password to be? (Must be 8-128 characters)");
    
    var charPool = ""
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    var numeric = '0123456789'
    var specChar = '!@#$%^&*()_~[]?;:{}'

    if (numbers) {
        password +=
        charPool.concat(numeric); // Now charPool contains all numeric chars
    }

    if (upper) {
        password +=
        charPool.concat(upperCase); // Now charPool contains all uppercase chars
    }

    if (lower) {
        password +=
        charPool.concat(lowerCase); // Now charPool contains all lowercase chars
       
    }

    if (special) {
        password+=
        charPool.concat(specChar); // Now charPool contains all special chars
    }

    for(var i=0; i < length; i++){
        password += charPool.charAt(Math.floor(Math.random() * charPool.length));
    }

  return password;
}

