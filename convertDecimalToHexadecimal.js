function convertDecimalToHexadecimal(numberToConvert) {
  if (Array.isArray(numberToConvert)) {
      return handleArrayInput(numberToConvert);
  } else {
      return handleSingleInput(numberToConvert);
  }
}

function handleArrayInput(array) {
  var invalidElements = array.filter(function(element) {
      return element === undefined || element === null || typeof element !== "number" || isNaN(element);
  });

  if (invalidElements.length > 0) {
      return "Invalid input: all elements in the array must be valid numbers.";
  } else if (array.length === 0) {
      return "Invalid input: the array must have value.";
  }

  return array.map(decimalToHexadecimal);
}
function handleSingleInput(singleNumber) {
  if (singleNumber === null || singleNumber === undefined) {
      return "Invalid input: the input must be type Number.";
  } else if (typeof singleNumber !== "number" || isNaN(singleNumber)) {
      return "Invalid input: the input must be type Number.";
  }

  return decimalToHexadecimal(singleNumber);
}

function decimalToHexadecimal(decimalNumber) {
  if (decimalNumber === 0) {
      return "0";
  }
  var hexadecimalDigits = '0123456789ABCDEF';
  var resultString = "";
  while (decimalNumber > 0) {
      resultString = hexadecimalDigits[decimalNumber % 16] + resultString;
      decimalNumber = Math.floor(decimalNumber / 16);
  }
  return resultString;
}

  function testConvertDecimalToHexadecimal() {
    let testArrays = [
      [0, "0"],
      [1, "1"],
      [12, "C"],
      [1222, "4C6"],
      [22, "16"],
      ["String", "Invalid input: the input must be type Number."],
      [null, "Invalid input: the input must be type Number."],
      [{},"Invalid input: the input must be type Number."],
      [
        [12, 3, 1222],
        ['C', '3', '4C6']
      ],
      [
        [null, undefined],
        "Invalid input: all elements in the array must be valid numbers."
      ],
      [
        [{},"String"], 
        "Invalid input: all elements in the array must be valid numbers."
      ],
      [
        [], 
        "Invalid input: the array must have value."
      ],
      [
        [12,"String",null,1,3,12,15], 
        "Invalid input: all elements in the array must be valid numbers."
      ],
    ];
    
    for (let i = 0; i < testArrays.length; i++) {
      const [input, expectedOutput] = testArrays[i];
      const result = convertDecimalToHexadecimal(input);
      if(Array.isArray(expectedOutput)) {
        if (Array.isArray(result) && result.join() === expectedOutput.join()) {
          console.log(`Test case ${i}: Passed`);
        } else {
          console.log(`Test case ${i}: Failed`);
        }
      } else {
        if (result === expectedOutput) {
          console.log(`Test case ${i}: Passed`);
        } else {
          console.log(`Test case ${i}: Failed`);
      }
    }
  }
}

testConvertDecimalToHexadecimal();