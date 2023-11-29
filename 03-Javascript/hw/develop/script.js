// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Define the generatePassword function
function generatePassword() {
    // Set the password length
    const passwordLength = 12;
  
    // Define the characters allowed in the password
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+={}[]|\:;',<.>/?";
  
    // Initialize an empty password string
    let password = "";
  
    // Generate random characters for the password
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
  
    // Return the generated password
    return password;
  }
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);