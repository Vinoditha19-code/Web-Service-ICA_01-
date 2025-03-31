function getMaxValue(num) {
     if (num.toString().length < 2) {
         return "Input number must have at least 2 digits.";
     }
     return parseInt(num.toString().split("").sort((a, b) => b - a).join(""));
 }
 
 // Example usage:
 console.log(getMaxValue(215)); // Output: 521
 console.log(getMaxValue(1093)); // Output: 9310
 
 /* Function to rearrange digits to get the maximum possible value
function getMaxValue(num) {
    if (num < 10) {
        throw new Error("Number must have at least two digits");
    }
    
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
}

// Example usage
const inputNumber1 = 215;
console.log(`Input number = ${inputNumber1}, Max = ${getMaxValue(inputNumber1)}`);

const inputNumber2 = 1093;
console.log(`Input number = ${inputNumber2}, Max = ${getMaxValue(inputNumber2)}`);*/
