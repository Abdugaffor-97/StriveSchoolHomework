/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const findArea = function (l1, l2) {
    return l1 * l2;
};

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum = function (num1, num2) {
    let result = num1 + num2;
    if (num1 === num2) {
        result = 3 * (num1 + num2);
    }
    return result;
};

const crazySum2 = function (num1, num2) {
    return num1 === num2 ? (num1 + num2) * 3 : num1 + num2;
};

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = function (num) {
    let result = Math.abs(num - 19);
    if (num > 19) {
        result = 3 * Math.abs(num - 19);
    }
    return result;
};

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = function (n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true;
    }
    return false;
};

function boundary2(n) {
    if ((n > 20 && n <= 100) || n === 400) {
        return true;
    }
    return false;
}

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.   
*/

const strivify = function (S) {
    let result = "Strive " + S;
    if (S.slice(0, "Strive".length) == "Strive") {
        result = S;
    }
    return result;
};

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (num) {
    if (num % 3 == 0 || num % 7 == 0) {
        return true;
    }
    return false;
};

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

const reverseString = function (str) {
    return str.split("").reverse().join("");
};

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const upperFirst = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function (str) {
    return str.slice(1, -1);
};

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

const giveMeRandom = function (n) {
    rand_nums = [];
    for (let i = 0; i < n; i++) {
        rand_nums.push(Math.floor(Math.random() * Math.floor(10)));
    }
    return rand_nums;
};

console.log(giveMeRandom(3));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
