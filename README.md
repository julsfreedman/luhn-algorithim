**The Luhn Algorithm**

Credit card numbers can be validated with a process called the Luhn algorithm. The Luhn algorithm works like this:

Starting with the next to last digit and continuing with every other digit going back to the beginning of the card number, double the digit.</br>
Sum all digits in the altered number.</br>
If that total is a multiple of 10, the number is valid.</br>
For example, given the card number 4408 0412 3456 7893:</br>

Orig : 4 4 0 8 0 4 1 2 3 4 5 6 7 8 9 3</br>
Step 1: 8 4 0 8 0 4 2 2 6 4 10 6 14 8 18 3</br>
Step 2: 8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70</br>
Step 3: 70 % 10 == 0</br>

Code</br>
Write a function validCardthat takes a number as an argument and returns true for a valid number and false for an invalid number.

validCard(1234567890123456); //should be false</br>
validCard(4408041234567893); //should be true</br>
validCard(38520000023237); //should be true</br>
validCard(4222222222222); //should be true</br>
