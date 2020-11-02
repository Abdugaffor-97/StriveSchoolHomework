/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

function strangeSum(number0, number1) {
    const sum = number1 + number0;
    if (number1 === number0) {
        return 3 * sum;
    }
    return sum;
}

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

function checkNums(num1, num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    }
    return false;
}

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

function removeChar(string, position) {
    if (string.length >= position) {
        const new_str = string.replace(string[position], "");
        return new_str;
    }
    return "Invalit position";
}

/*
4)
Create a function to find the largest of three given integers.
*/

function maxInt(num1, num2, num3) {
    nums = [num1, num2, num3];
    let maxNum = nums[0];
    nums.forEach((num) => {
        if (num > maxNum) {
            maxNum = num;
        }
    });
    return maxNum;
}

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

function checkNumsInInterval(num1, num2) {
    if (
        ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) &&
        ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100))
    ) {
        return true;
    }
    return false;
}

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
function newStr(string) {}
/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function displayCity(string) {
    if (string.slice(0, 3) === "Los" || string.slice(0, 3) === "New") {
        return string;
    }
    return "";
}

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
function sum3Digit(array) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i].toString().length === 3) {
            count++;
            sum += array[i];
            if (count === 3) {
                return sum;
            }
        }
    }
    return sum;
}
/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

function test(array) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i].toString().length == 2) {
            if (
                array[i].toString().includes("1") ||
                array[i].toString().includes("3")
            ) {
                return true;
            }
        }
    }
    return false;
}

// 10)
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
function test(array) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i].toString().length == 2) {
            if (
                !array[i].toString().includes("1") ||
                !array[i].toString().includes("3")
            ) {
                return true;
            }
        }
    }
    return false;
}

// 11)
// Create a function to find the longest string from a given array of strings.

function findLongest(array) {
    let longest = array[0];
    array.forEach(function (str) {
        if (str.length > longest.length) {
            longest = str;
        }
    });
    return longest;
}

// 12)
// Create a function to find the types of a given angle.
// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
function typeAngle(angle) {
    if (0 < angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (90 < angle < 180) {
        return "btuse angle";
    } else if (angle === 90 * 2) {
        return "Straight angle";
    }
}
// 13)
// Create a function to find the index of the greatest element of a given array of integers
function indexMax(arr) {
    return arr.indexOf(Math.max(...arr));
}

// 14)
// Create a function to get the largest even number from an array of integers.
function largestEven(array) {
    let largestEven = -1;
    array.forEach((num) => {
        if (num % 2 === 0 && num > largestEven) {
            largestEven = num;
        }
    });
    return largestEven;
}
// 15)
// Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function checkNums(num1, num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    }
    return false;
}

// 16)
// Create a function to check from two given integers, whether one is positive and another one is negative.
function checkNumsPosNeg(num1, num2) {
    return (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0);
}

// 17)
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.
function newSTR(string) {
    let str = "";
    if (string.length < 3) {
        str = string.toUpperCase();
    } else {
        str = string.slice(0, 3).toLowerCase() + string.slice(3).toUpperCase();
    }
    return str;
}

// 18)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
function calcSum(num, num1) {
    if (50 < num + num1 < 80) {
        return 65;
    }
    return 80;
}
// 19)
// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".
function findFactor(number) {
    factors = [];
    for (let i = 0; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

function convSTR(number) {
    if (findFactor(number).includes(3)) {
        return "Diego";
    } else if (findFactor(number).includes(5)) {
        return "Ricardo";
    } else if (findFactor(number).includes(7)) {
        return "Stefano";
    } else {
        return number;
    }
}

// 20)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

function acronym(phrase) {
    let acronym = "";
    phrase.split(" ").forEach((word) => {
        acronym += word[0].toUpperCase();
    });
    return acronym;
}
