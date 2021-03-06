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

    //Confirm and Prompts for password criteria
    let password = '';
    const numbers = confirm('Do you want numbers?');
    const upper = confirm('Do you want upper case letters?');
    const lower = confirm('Do you want lower case letters?');
    const special = confirm('Do you want special characters?');
    const charlength = prompt("How long do you want the password to be? (Must be 8-128 characters)");
    //If the length number entered doesn't meet requirements, page refreshes
    if (charlength != Number && charlength < 8 || charlength > 128) {
        alert ("You have not entered a valid number, please try again and enter a number between 8 and 128");
        setTimeout(function(){ location.reload(); }, 0000);
    }
    
    //Criteria Strings for Password
    var charPool = ""
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    var numeric = '0123456789'
    var specChar = '!@#$%^&*()_~[]?;:{}'

   

    if (numbers) {
   
        charPool+=numeric; // Now charPool contains all numeric chars
    }

    if (upper) {
  
        charPool+=upperCase; // Now charPool contains all uppercase chars
    }

    if (lower) {
      
        charPool+=lowerCase; // Now charPool contains all lowercase chars
       
    }

    if (special) {

        charPool+=specChar; // Now charPool contains all special chars
    }

    for(var i=0; i < charlength; i++){
        password += charPool.charAt(Math.floor(Math.random() * charPool.length)); //looping all criteria included to generate random password
    }

  return password;
}

