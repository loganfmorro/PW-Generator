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
    const length = prompt("How long do you want the password to be? (Must be 8-128 characters)");
    
    var all = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_~[]?;:{}'
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    var numeric = '0123456789'
    var char = '!@#$%^&*()_~[]?;:{}'

    if (numbers){
        for(var i=0; i < length; i++){
            password += numeric.charAt(Math.floor(Math.random() * numeric.length));
        }
    }
    if (upper){
        for(var i=0; i < length; i++){
            password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        }
    }
    if (lower) {
        for(var i=0; i < length; i++){
            password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
        }
    }
    if (special){
        for(var i=0; i < length; i++){
            password += char.charAt(Math.floor(Math.random() * char.length));
        }
    }

    if (upper) {
        passwordChars.concat(upperCase); // Now passwordChars contains all uppercase chars
       }

  return password;
}

