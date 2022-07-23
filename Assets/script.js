// declare the arrays that the password will pick from

var lowerArr = ['a', 'b', 'c', 'd', 'e'];
var upperArr = ['A', 'B', 'C', 'D', 'E'];
var numericArr = ['1', '2', '3', '4', '5'];
var specialArr = ['@', '#', '$', '*', ')'];


// clicking the button starts the code because the button id is generate in the index.html
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generate_Password();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button test, runs the writePassword function when button is clicked
generateBtn.addEventListener("click", writePassword);


//ask the prompts to the user in this section
function getPasswordOpts() {

  //asks the user for length of password
  var length = parseInt(prompt('How many characters do you want the password to be? Enter a number between 8 and 128:'));

  //alerts user if password length is too short
  if (length < 8) {
    alert('Password length must be more than 8 characters. Click the "Generate Password" button to start over.')
    return;
  };

  //alerts user if password length is too long
  if (length > 128) {
    alert('Password length must be less than 128 characters.')
    return;
  };

  //asks user to enter a number if they have entered a letter
  if (isNaN(length) === true) {
    alert('Please enter a number. Click the "Generate Password" button to begin again.');
    return;
  }

  //asks the user to click ok or cancel for special characters, numeric characters, lower case characters, upper case characters
  var specialChar = confirm('Click ok to include special characters or click cancel for no special characters.');

  var numericChar = confirm('Click ok to include numeric characters or click cancel for no numeric characters.');

  var lowerChar = confirm('Click ok to include lower case characters, or click cancel for no lower case characters.');

  var upperChar = confirm('Click ok to include upper case characters, or click cancel for no upper case characters.');

  //console log left in to test if above is working, console logs true or false for each option the user chose
  console.log(length, specialChar, numericChar, lowerChar, upperChar)

  //asks user to choose at least one option of special characters, numeric characters, lower case characters, upper case characters 
  if (specialChar === false &&
    numericChar === false &&
    lowerChar === false &&
    upperChar === false) {
    alert('Please select at least one option.');
    return;
  };

  // stores the users choices about which options they have chosen
  var objectOptions = {
    passwordLength: length,
    hasSpecial: specialChar,
    hasNumeric: numericChar,
    hasLower: lowerChar,
    hasUpper: upperChar

  }

  // stops the function and shows the values of the objectOptions object
  return objectOptions;

}

// runs function to create password and guarantee that the values chosen will be included in the password
function generate_Password() {
  var pwordOptions = getPasswordOpts();

  //console log left in to test if above is working
  console.log(pwordOptions);

  // use an empty array to store the possible results
  var result = [];
  var possibleArr = [];
  var guarantee = []

  // If user selected to have a lower case character, below code randomly generates an index position to choose a lower case value from the lowerArr 
  if (pwordOptions.hasLower) {
    possibleArr = possibleArr.concat(lowerArr)
    var index = Math.floor(Math.random() * lowerArr.length)
    guarantee.push(lowerArr[index])
    console.log(possibleArr)
  }


  // If user selected to have an upper case character, below code randomly generates an index position to choose an upper case value from the upperArr
  if (pwordOptions.hasUpper) {
    possibleArr = possibleArr.concat(upperArr)
    var index = Math.floor(Math.random() * upperArr.length)
    guarantee.push(upperArr[index])
    console.log(possibleArr)
  }

  // If user selected to have a special character, below code randomly generates an index position to choose a special character value from the specialArr
  if (pwordOptions.hasSpecial) {
    possibleArr = possibleArr.concat(specialArr)
    var index = Math.floor(Math.random() * specialArr.length)
    guarantee.push(specialArr[index])
    console.log(possibleArr)
  }

  // If user selected to have a number, below code randomly generates an index position to choose a number from the numericArr
  if (pwordOptions.hasNumeric) {
    possibleArr = possibleArr.concat(numericArr)
    var index = Math.floor(Math.random() * numericArr.length)
    guarantee.push(numericArr[index])
    console.log(possibleArr)
  }

  // console logs the possible array and the pasword length
  console.log(possibleArr)
  console.log(pwordOptions.passwordLength)

  // runs a for loop to create randomNum to choose the values from the array randomly
  for (var i = 0; i < pwordOptions.passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * possibleArr.length)


    // console.log(possibleArr[randomNum])

    // adds the current value of possible array to the result
    result.push(possibleArr[randomNum])


  }
  console.log(guarantee)

  // runs a for loop to guarantee a value from the chosen array is included in the result
  for (var i = 0; i < guarantee.length; i++) {
    result[i] = guarantee[i];

  }
  console.log(result.join(''))

  // returns the final results of the function generate_Password
  return result.join('')

}

// Internal note for developer to do:

//find a function that calls a variable instead of repeating the code 4x in the ifs - will need help with this.
