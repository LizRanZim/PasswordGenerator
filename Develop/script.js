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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function getPasswordOpts() {
  //ask the prompts to the user in here

  //asks the usere for length of password
  var length = parseInt(prompt('Length of password?'));

  //alerts user if password length is too short
  if (length < 8) {
    alert('Password length must be more than 8 characters')
    return;
  };

  //alerts user if password length is too long
  if (length > 128) {
    alert('Password length must be less than 128 characters')
    return;
  };

  //asks user to enter a number if they have entered a letter
  if (isNaN(length) === true) {
    alert('enter a integer');
    return;
  }

  //asks the user to click ok or cancel for special characters, numeric characters, lower case characters, upper case characters
  var specialChar = confirm('Click ok to include special char');

  var numericlChar = confirm('Click ok to include numeric char');

  var lowerChar = confirm('Click ok to include lower char');

  var upperChar = confirm('Click ok to include upper char');

  //console log left in to test if above is working
  console.log(length, specialChar, numericlChar, lowerChar, upperChar)

  //asks user to choose at least one option of special characters, numeric characters, lower case characters, upper case characters 
  if (specialChar === false &&
    numericlChar === false &&
    lowerChar === false &&
    upperChar === false) {
    alert('must select one option');
    return;
  };

  // stores the users choices about which options they have chosen
  var objectOptions = {
    length: length,
    hasSpecial: specialChar,
    hasNumeric: numericlChar,
    hasLower: lowerChar,
    hasUpper: upperChar

  }

  // stops the function and shows the values of the objectOptions object
  return objectOptions;

}


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
  }

  // If user selected to have an upper case character, below code randomly generates an index position to choose an upper case value from the upperArr
  if (pwordOptions.hasUpper) {
    possibleArr = possibleArr.concat(upperArr)
    var index = Math.floor(Math.random() * upperArr.length)
    guarantee.push(upperArr[index])
  }

  // If user selected to have a special character, below code randomly generates an index position to choose a special character value from the specialArr
  if (pwordOptions.hasSpecial) {
    possibleArr = possibleArr.concat(specialArr)
    var index = Math.floor(Math.random() * specialArr.length)
    guarantee.push(specialArr[index])
  }

  // If user selected to have a number, below code randomly generates an index position to choose a number from the numericArr
  if (pwordOptions.numericArr) {
    possibleArr = possibleArr.concat(numericArr)
    var index = Math.floor(Math.random() * numericArr.length)
    guarantee.push(numericArr[index])
  }
  console.log(possibleArr)


  for (var i = 0; i < pwordOptions.length; i++) {


    var randomNum = Math.floor(Math.random() * possibleArr.length)

    // console.log(possibleArr[randomNum])
    result.push(possibleArr[randomNum])


  }
  console.log(guarantee)
  for (var i = 0; i < guarantee.length; i++) {
    result[i] = guarantee[i];

  }
  console.log(result.join(''))

  return result.join('')

}


