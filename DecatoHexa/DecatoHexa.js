function convertDecimalToHexaDecimal(numberToConvert) {
    const decimalToHexaDecimal = (num) => {
      if(num === 0) {
        return "0";
      }
      const hexDigits = '0123456789ABCDEF';
      let result = "";
      while (num > 0) {
        result = hexDigits[num % 16] + result;
        num = Math.floor(num / 16);
      }
      return result;
    };
    
    if (Array.isArray(numberToConvert)) {
      const invalidElements = numberToConvert.filter( (num) => num === undefined 
      || num === null || typeof num !== "number" || isNaN(num));
      if (invalidElements.length > 0) {
        return "Invalid input: all elements in the array must be valid numbers.";
      } else if (numberToConvert.length === 0) {
        return "Invalid input: the array must have value.";
      }
      return numberToConvert.map(decimalToHexaDecimal);
    } else if (typeof numberToConvert === "object" && !Array.isArray(numberToConvert)) {
      return "Invalid input: the input must be type Number.";
    } else if (numberToConvert === null || numberToConvert === undefined) {
      return "Invalid input: the input must be type Number.";
    } else if (typeof numberToConvert !== "number" || isNaN(numberToConvert)) {
      return "Invalid input: the input must be type Number.";
    }
  
    return decimalToHexaDecimal(numberToConvert);
  }

  function testConvertDecToHexa() {
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
      const result = convertDecimalToHexaDecimal(input);
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

testConvertDecToHexa();