/**
 * Given a string that contains words seperated by digits(0-9). Reverse words in place
 * Eg: asd1fa -> dsa1af
**/

/**
 * Algorithm:
 * step1: Get the input in the function
 * step2: Check if the input is a valid string or not
 *   2.1: If not a string, return 'not a valid string'
 * step3: Create a variable and convert a string into array with the split method
 * step4: Create a another variable with empty string
 *   4.1: Loop the value of an array
 * step5: Then create another variable and store the value using split method
 *   5.1: Check if the value of an array is string and value is not equal to number
 *   5.2: If the value is string then reverse the value and convert it into string using reverse() and join() function
 *   5.3: If the value is a number, Then return as it is
 */

 const reverseWords = (str) => {
     
    if (typeof str !== "string") {
        return "not a string";
    }
    let arr1 = str.split(/(\d+)/);
    let empty_str = "";

    for (let val of arr1){
        let arr2 = val.split('');
        if (typeof val === 'string' && !Number(val)) {
            empty_str += arr2.reverse().join('');
        }else {
            empty_str += val;
        }
    }
    return empty_str;
};


console.log(reverseWords("abcd123efgg")); // stsa7gh8dertgsj5ssaayl
console.log(reverseWords("asts77hg8jsgtred5lyaass")); // stsa77gh8dertgsj5ssaayl
console.log(reverseWords("123")); // 123
console.log(reverseWords("asd")); // dsa
console.log(reverseWords("asd1f")); // dsa1f