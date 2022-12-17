//pseudocode

// A. first you have to take the cc number (that is passed as an argument into your validCard function )and convert it into an array:
////////1. convert the cc number (integer) into a string, returning "12345"
////////2. use Number function to convert each string character into a number
////////3. a string is an iterable  object, so we can create an array from it using Array.from() method which will add the numbers one by one to a new array
////////4. return the new array

// B. Starting with the next to last digit and continuing with every other digit going back to the beginning of the card number, double the digit.

// C. Sum all digits in the altered number.

// D. If that total is a multiple of 10, the number is valid.

function validCard(cardNum) {
    let sumDd = 0;
    let sumRegDigits = 0;
    //pseudocode A. 1-4:
    const cardNumbArray = Array.from(String(cardNum), Number)
    //console.log(cardNumbArray)
    //pseudocode B. :
    for (let i = cardNumbArray.length - 2; i >= 0; i -= 2) {
        let doubledDigits = (cardNumbArray[i] *= 2)
        //console.log(doubledDigits)
        //pseudocode C. :
        if (doubledDigits >= 10) {
            doubledDigits = doubledDigits - 10
            doubledDigits = doubledDigits + 1
        }
        //console.log(doubledDigits)
        sumDd += doubledDigits
        //console.log("sum of the dd is", sumDd);
    }

    for (let x = cardNumbArray.length - 1; x >= 0; x -= 2) {
        //console.log(cardNumbArray[x])
        let regularDigits = cardNumbArray[x]
        sumRegDigits += regularDigits
        //console.log("sum of the rd is", sumRegDigits)

    }
    //pseudocode C. complete
    let total = (sumDd + sumRegDigits)
    //console.log(total)

    //pseudocode D. If that total is a multiple of 10, the number is valid.
    if (total % 10 == 0) {
        console.log(true)
        return true;
    } else {
        console.log(false)
        return false;
    }
};

//validCard(123456); // false
//validCard(1234567890123456); // false
//validCard(4408041234567893); // true
//validCard(38520000023237); // true
validCard(4222222222222); //true


//--------------------------------------------------------------------------------//

//validCard(123456)
//[1, 2, 3, 4, 5]  A
//[1, 4, 3, 8, 5]  B


// Orig  : 4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3
// Step 1: 8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3
// Step 2: 8 + 4 + 0 + 8 + 0 + 4 + 2 + 2 + 6 + 4 + 1 + 0 + 6 + 1 + 4 + 8 + 1 + 8 + 3 = 70
// Step 3: 70 % 10 == 0

// Orig  : 1 2 3
// Step 1: 1 4 3
// Step 2: 1+4+3 = 8
// Step 3: 8 % 10 = .8 = false = invalid card number

//validCard(1234567890123456); //should be false
// validCard(4408041234567893); //should be true
// validCard(38520000023237); //should be true
// validCard(4222222222222); //should be true

// const numToSeparate = 12345;
// const arrayOfDigits = Array.from(String(numToSeparate), Number);
// console.log(arrayOfDigits);   //[1,2,3,4,5]