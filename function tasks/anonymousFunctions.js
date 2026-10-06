
//  anonymous functions wtihout arguments and with out return statements


//1. Find the sum of all odd numbers between 1 and N.

// let oddSum = function() {
//     num = 100
//     totalSum = 0

//     for (a = 1; a <= num; a++) {
//             if (a % 2 != 0) {
//                     totalSum = totalSum + a
//                 }
//             }
        
//             console.log(totalSum);
//         }
        
//         oddSum();
        
    //2. Find the sum of all even numbers between 1 and N.
    
    // let evenSum = function() {
    //     num = 100
    // totalSum = 0
    
    // for (a = 1; a <= num; a++) {
    //     if (a % 2 == 0) {
    //         totalSum = totalSum + a
    //     }
    // }
    
    // console.log(totalSum)
    // }
    
    // evenSum();

        
    // 3. Count how many numbers between 1 and N are divisible by 3.

    //     let divisibleBy3 = function() {
    //         n = 100
    //         count = 0
            
    //         for (let i = 1; i <= n; i++) {

    //             if (i % 3 == 0) {
    //             count++;
    //         }
    //     }
        
    //     console.log(count);
    // }

    // divisibleBy3();

    // 4. fizzbuzz varient
    //     // For numbers 1 to N, print:
    //     //"Fizz" if divisible by 3
    //     //"Buzz" if divisible by 5
    //     //"FizzBuzz" if divisible by both
    //     //The number otherwise.

    // let fizzbuzz = function() {
    //     n = 100
        
    //     for (let i = 1; i <= n; i++) {
    //         if ((i % 3 == 0) && (i % 5 == 0)) {
    //             console.log(i, "fizzbuzz");
                
    //         } else if (i % 3 == 0) {
    //             console.log(i, "fizz");
                
    //         } else if (i % 5 == 0) {
    //             console.log(i, "buzz");
                
    //         }
    //     }
    // }
    // fizzbuzz();

    // 5. Given a number N, find the largest digit using a loop and if.

    // let largestNumber = function() {

    //     largest = 0
        
    //     for (let i = 21349738; i > 0; i = parseInt(i / 10)) {
            
    //         currentDigit = i % 10;
            
    //         if (currentDigit > largest) {
    //             largest = currentDigit
    //         }
    //     }
        
    //     console.log("your largest digit is :", largest);
    // }

    // largestNumber();

    // anonymous functions with arguments and without return

    // 1. Find the smallest digit in a number N.

    // let smallestDigit = function(num) {
    //     smallest = 9
        
    //     for (let i = num; i > 0; i = parseInt(i / 10)) {
            
    //         currentDigit = i % 10;
            
    //         if (currentDigit < smallest) {
    //             smallest = currentDigit
    //         }
    //     }
        
    //     console.log("your largest digit is :", smallest);
    // }

    // smallestDigit(12345)

    // 2. Count how many digits in a number N are greater than 5.

    // let digitsGreaterThan5 = function(num) {
    //     greaterThan5 = 0
        
    //     for (let i = num; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10;

    //         if (currentDigit > 5) {
    //             greaterThan5++
                
    //         }
            
    //     }
        
    //     console.log("the digits in a number N greater than 5 are :", `"${greaterThan5}"`);
    // }

    // digitsGreaterThan5(24356765432);

    // 3. Given a number N, check if all digits are either 0 or 1 (binary number check).

    // let binaryOrNot = function(num) {

    //     let binary = true
        
    //     for (let i = num; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10;

    //         if ((currentDigit !== 0) && (currentDigit !== 1)) {

    //             binary = false;
    //             break;
                
    //         }
            
    //     }
        
    //     if (binary) {
    //         console.log("your number is a binary number");

    //     } else {
    //         console.log("your number is not a binary number");

    //     }
    //     }

    //     binaryOrNot(110101010101);

    // 4. Find the sum of digits at even positions in a number (from right to left).

    // let sumOfEvenPositionDigits = function(num) {

    //     let coun = 0
    //     let res = 0
        
    //     for (let i = num; i > 0; i = parseInt(i / 10)) {
            
    //         currentDigit = i % 10;
    //         coun++
            
    //         if (coun % 2 === 0) {
    //             res = res + currentDigit
    //         }
            
    //     }
        
    //     console.log("the  sum of digits at even positions in a number (from right to left):", res);
    // }
    // sumOfEvenPositionDigits(3465);

    // 5.Find the sum of digits at odd positions in a number.

    // let oddPositionDigits = function(num) {

    //     let resul = 0;
        
    //     for (let i = num; i > 0; i = parseInt(i / 100)) {
    //         resul += i % 10;
    //     }

    //     console.log("Sum:", resul);
    // }

    // oddPositionDigits(3465678);

    //  anonymous functions without arguments and with return

    // 1.Count how many digits in a number are prime (2, 3, 5, 7).

    // let primeDigit = function() {

    //     cou = 0
        
    //     for (let i = 123467987654312; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10

    //         if (currentDigit === 2 || currentDigit === 3 || currentDigit === 5 || currentDigit === 7) {
    //             cou++
    //         }

    //     }

    //     return `the num of prime numbers in your code are: ${cou}`
    // }

    // console.log(primeDigit())

    // 2.From 1 to N, print:
        //"Small" if number < 10
        //"Medium" if number is between 10 and 50
        //"Large" if number > 50.

    //  let volume = function() {

    //      i = 100
         

    //         if (i >= 1 && i < 10) {
    //             return ("small");

    //         } else if (i >= 10 && i <= 50) {
    //             return ("medium");

    //         } else if (i > 50) {
    //             return ("large");

    //         }

    //     }

    // console.log(volume())

    // 3. Given a number N, count how many times a specific digit d appears.
        //Let N = 167822865219482; d = 2
        //Output: 4

    //     let repeatDigit = function() {

            
    //     let N = 16782286521948222
    //     d = 2
    //     count = 0

    //     for (let i = N; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10
            
    //         if (currentDigit == d) {
    //             count++
    //         }
            
    //     }
        
    //     return("the count of your number is: "+ count);
    // }

    // console.log(repeatDigit())

    // 4. Find the sum of all even numbers between 1 and N.

        // let evenSum = function() {
        //     num = 100
        // totalSum = 0

        // for (a = 1; a <= num; a++) {
        //     if (a % 2 == 0) {
        //         totalSum = totalSum + a
        //     }
        // }

        //    return(totalSum)
        // }

        // console.log(evenSum())

        
        //5. Find the sum of all odd numbers between 1 and N.

        // let oddSum = function() {
        //     num = 100
        //     totalSum = 0

        //     for (a = 1; a <= num; a++) {
        //         if (a % 2 != 0) {
        //             totalSum = totalSum + a
        //         }
        //     }
            
        //     return(totalSum);
        // }

        // console.log(oddSum())

        // anonymous functions with arguments and with return statements

    // 1. Given a non‑negative integer n, compute the sum of its decimal digits using numeric operations and loops only. 
	// Example: 
	// Input: n = 4729 
	// Output: 22 

    // let sumOfDigits = function(num) {

        
    // let sum = 0

    // for (let i = num; i > 0; i = parseInt(i / 10)) {
    
    //      currentDigit = i % 10
         
    //      sum = sum + currentDigit
    
    //     }
        
    //     return(sum);
    // }

    // console.log(sumOfDigits(123))
    // let ans = sumOfDigits(123);
    // console.log(ans)

    
   // 2. Given a positive integer n, count how many positive integers divide n exactly (i.e., number of divisors) using loops and numeric checks. 
   // 	Example: 
   // 	Input: n = 36 
   // 	Output: 9 


//    let factorsOfGivenNumber = function(num) {

       
//        divisorsOfNum = []
       
//        for (let i = 1; i <= num; i++) {
           
//            if (num % i == 0) {
//                divisorsOfNum.push(i)
//             }   
            
//         }
        
//         return `the divisors of your number is : \n [${divisorsOfNum}]`;
//     }

//     console.log(factorsOfGivenNumber(36));


// 3. Determine whether a non‑negative integer n is a palindrome in decimal form using only numeric operations and loops (no string conversion). 
// 	Note: palindrome means reversing the given number is also the same as the given number.
// 	Example: 
// 	Input: n = 1221 
// 	Output: true 

// let palindrome = function(num) { 
    
// let rev = 0

// for (let i = num; i > 0; i = parseInt(i / 10)) {

//     currentDigit = i % 10
    
//       rev = rev * 10 + currentDigit

// }

// if (rev == num) {
//     return("true");
    
// }else {
//     return("false");
    
// }

// }

// console.log(palindrome(1221))


// 4. Compute the nth Fibonacci number (0‑indexed: F(0)=0, F(1)=1) using an iterative loop and numeric variables only. [Indexed : 0,1]
// 	Fibonacci  : sum of previous two numbers is the current number: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 
// 	Example: 
// 	Input: n = 10 
	Output: 55 

// let fibbanocciSeries = function(num) {

// let first = 0

// let second = 1

// for (let i = 0; i < num; i++) {

//     [first , second] = [second , first + second]

// }

//    return(first);

// }

// console.log(fibbanocciSeries(10))


// 5. Given positive integers N and k, compute the sum of all positive multiples of k that are ≤ N using loops and arithmetic only. 
// 	Example: 
// 	Input: N = 20, k = 3 
// 	Output: 63 (3 + 6 + 9 + 12 + 15 + 18 = 63) 

// let multiplesOfKandN = function(k,n) {

// sum = []
// res = 0
// add = 0

// for (let i = 1; i < n; i++) {
    
//     res = k * i
//     if (res <= n) {
//         sum.push(res)
//         add = add + res 
        
//     }else {
//         break
//     }
    
// }
//     return `${add} (${sum.join(" + ")} = ${add})`;
// }

// console.log(multiplesOfKandN(3,20))