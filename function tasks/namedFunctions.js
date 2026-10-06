    // named functions without return and without arguments

    // 1. Find the smallest digit in a number N.

    // function smallestDigit() {
    //     smallest = 9
        
    //     for (let i = 1234567; i > 0; i = parseInt(i / 10)) {
            
    //         currentDigit = i % 10;
            
    //         if (currentDigit < smallest) {
    //             smallest = currentDigit
    //         }
    //     }
        
    //     console.log("your smallest digit is :", smallest);
    // }

    // smallestDigit()

    // 2. Count how many digits in a number N are greater than 5.

    // function digitsGreaterThan5() {
    //     greaterThan5 = 0
        
    //     for (let i = 24356765432; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10;

    //         if (currentDigit > 5) {
    //             greaterThan5++
                
    //         }
            
    //     }
        
    //     console.log("the digits in a number N greater than 5 are :", `"${greaterThan5}"`);
    // }

    // digitsGreaterThan5();

    // 3. Given a number N, check if all digits are either 0 or 1 (binary number check).

    // function binaryOrNot() {

    //     let binary = true
        
    //     for (let i = 110101010101; i > 0; i = parseInt(i / 10)) {

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

    //     binaryOrNot();

    // 4. Find the sum of digits at even positions in a number (from right to left).

    // function sumOfEvenPositionDigits() {

    //     let coun = 0
    //     let res = 0
        
    //     for (let i = 3465; i > 0; i = parseInt(i / 10)) {
            
    //         currentDigit = i % 10;
    //         coun++
            
    //         if (coun % 2 === 0) {
    //             res = res + currentDigit
    //         }
            
    //     }
        
    //     console.log("the  sum of digits at even positions in a number (from right to left):", res);
    // }
    // sumOfEvenPositionDigits();

    // 5.Find the sum of digits at odd positions in a number.

    // function oddPositionDigits() {

    //     let resul = 0;
        
    //     for (let i = 3465678; i > 0; i = parseInt(i / 100)) {
    //         resul += i % 10;
    //     }

    //     console.log("Sum:", resul);
    // }

    // oddPositionDigits();


    // 6.Count how many digits in a number are prime (2, 3, 5, 7).

    // function primeDigit() {

    //     cou = 0
        
    //     for (let i = 123467987654312; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10

    //         if (currentDigit === 2 || currentDigit === 3 || currentDigit === 5 || currentDigit === 7) {
    //             cou++
    //         }

    //     }

    //     console.log( `the num of prime numbers in your code are: ${cou}`)
    // }

    // primeDigit()

    // 7.From 1 to N, print:
        //"Small" if number < 10
        //"Medium" if number is between 10 and 50
        //"Large" if number > 50.

    //  function volume() {

    //      i = 100
         

    //         if (i >= 1 && i < 10) {
    //             return ("small");

    //         } else if (i >= 10 && i <= 50) {
    //             return ("medium");

    //         } else if (i > 50) {
    //             console.log( ("large"))

    //         }

    //     }

    // volume()

    // 8. Given a number N, count how many times a specific digit d appears.
        //Let N = 167822865219482; d = 2
        //Output: 4

    //     function repeatDigit() {

            
    //     let N = 16782286521948222
    //     d = 2
    //     count = 0

    //     for (let i = N; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10
            
    //         if (currentDigit == d) {
    //             count++
    //         }
            
    //     }
        
    //     console.log(("the count of your number is: "+ count))
    // }

    // repeatDigit()

    // 9. Find the sum of all even numbers between 1 and N.

        // function evenSum() {
        //     num = 100
        // totalSum = 0

        // for (a = 1; a <= num; a++) {
        //     if (a % 2 == 0) {
        //         totalSum = totalSum + a
        //     }
        // }

        //    console.log((totalSum))
        // }

        // evenSum()

        
        //10. Find the sum of all odd numbers between 1 and N.

        // function oddSum() {
        //     num = 100
        //     totalSum = 0

        //     for (a = 1; a <= num; a++) {
        //         if (a % 2 != 0) {
        //             totalSum = totalSum + a
        //         }
        //     }
            
        //     console.log((totalSum))
        // }

        // oddSum()


    // 11. Given a non‑negative integer n, compute the sum of its decimal digits using numeric operations and loops only. 
	// Example: 
	// Input: n = 4729 
	// Output: 22 

    // function sumOfDigits() {

        
    // let sum = 0

    // for (let i = 123; i > 0; i = parseInt(i / 10)) {
    
    //      currentDigit = i % 10
         
    //      sum = sum + currentDigit
    
    //     }
        
    //     console.log((sum))
    // }

    //  sumOfDigits()

    
   // 12. Given a positive integer n, count how many positive integers divide n exactly (i.e., number of divisors) using loops and numeric checks. 
   // 	Example: 
   // 	Input: n = 36 
   	Output: 9 


//    function factorsOfGivenNumber() {

//        num = 36
//        divisorsOfNum = []
       
//        for (let i = 1; i <= num; i++) {
           
//            if (num % i == 0) {
//                divisorsOfNum.push(i)
//             }   
            
//         }
        
//         console.log(`the divisors of your number is : \n [${divisorsOfNum}]`)
//     }

//     factorsOfGivenNumber()


// 13. Determine whether a non‑negative integer n is a palindrome in decimal form using only numeric operations and loops (no string conversion). 
// 	Note: palindrome means reversing the given number is also the same as the given number.
// 	Example: 
// 	Input: n = 1221 
// 	Output: true 

// function palindrome() { 
// let num = 1221
// let rev = 0

// for (let i = num; i > 0; i = parseInt(i / 10)) {

//     currentDigit = i % 10
    
//       rev = rev * 10 + currentDigit

// }

// if (rev == num) {
//     console.log(("true"))
    
// }else {
//     console.log(("false"))
    
// }

// }

// palindrome()


// 14. Compute the nth Fibonacci number (0‑indexed: F(0)=0, F(1)=1) using an iterative loop and numeric variables only. [Indexed : 0,1]
// 	Fibonacci  : sum of previous two numbers is the current number: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 
// 	Example: 
// 	Input: n = 10 
	Output: 55 

// function fibbanocciSeries() {

// let num = 10
// let first = 0

// let second = 1

// for (let i = 0; i < num; i++) {

//     [first , second] = [second , first + second]

// }

//    console.log((first))

// }

// fibbanocciSeries()


// 15. Given positive integers N and k, compute the sum of all positive multiples of k that are ≤ N using loops and arithmetic only. 
// 	Example: 
// 	Input: N = 20, k = 3 
// 	Output: 63 (3 + 6 + 9 + 12 + 15 + 18 = 63) 

// function multiplesOfKandN() {

//     let k = 3
//     let n = 20;
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
//     console.log( `${add} (${sum.join(" + ")} = ${add})`)
// }

// multiplesOfKandN()

// named functions with input(arguments) and without return

     // 1. Find the smallest digit in a number N.

    // let smallestDigit = function(num){
    //     smallest = 9
        
    //     for (let i = num; i > 0; i = parseInt(i / 10)) {
            
    //         currentDigit = i % 10;
            
    //         if (currentDigit < smallest) {
    //             smallest = currentDigit
    //         }
    //     }
        
    //     console.log("your smallest digit is :", smallest);
    // }

    // smallestDigit(12345)

    // 2. Count how many digits in a number N are greater than 5.

    // let digitsGreaterThan5 = function(num){
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

    // let sumOfEvenPositionDigits = function(num){

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

    // let oddPositionDigits = function(num){

    //     let resul = 0;
        
    //     for (let i = num; i > 0; i = parseInt(i / 100)) {
    //         resul += i % 10;
    //     }

    //     console.log("Sum:", resul);
    // }

    // oddPositionDigits(3465678);


    // 6.Count how many digits in a number are prime (2, 3, 5, 7).

    // function primeDigit(num) {

    //     cou = 0
        
    //     for (let i = num; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10

    //         if (currentDigit === 2 || currentDigit === 3 || currentDigit === 5 || currentDigit === 7) {
    //             cou++
    //         }

    //     }

    //     console.log( `the num of prime numbers in your code are: ${cou}`)
    // }

    // primeDigit(123467987654312)

    // 7.From 1 to N, print:
        //"Small" if number < 10
        //"Medium" if number is between 10 and 50
        //"Large" if number > 50.

    //  function volume(num) {

    //      i = num
         

    //         if (i >= 1 && i < 10) {
    //             return ("small");

    //         } else if (i >= 10 && i <= 50) {
    //             return ("medium");

    //         } else if (i > 50) {
    //             console.log( ("large"))

    //         }

    //     }

    // volume(100)

    // 8. Given a number N, count how many times a specific digit d appears.
        //Let N = 167822865219482; d = 2
        //Output: 4

    //     function repeatDigit(num) {

            
    //     let N = num
    //     d = 2
    //     count = 0

    //     for (let i = N; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10
            
    //         if (currentDigit == d) {
    //             count++
    //         }
            
    //     }
        
    //     console.log(("the count of your number is: "+ count))
    // }

    // repeatDigit(16782286521948222)

    // 9. Find the sum of all even numbers between 1 and N.

        // function evenSum(num) {
            
        // totalSum = 0

        // for (a = 1; a <= num; a++) {
        //     if (a % 2 == 0) {
        //         totalSum = totalSum + a
        //     }
        // }

        //    console.log((totalSum))
        // }

        // evenSum(100)

        
        //10. Find the sum of all odd numbers between 1 and N.

        // function oddSum(num) {
            
        //     totalSum = 0

        //     for (a = 1; a <= num; a++) {
        //         if (a % 2 != 0) {
        //             totalSum = totalSum + a
        //         }
        //     }
            
        //     console.log((totalSum))
        // }

        // oddSum(100)


    // 11. Given a non‑negative integer n, compute the sum of its decimal digits using numeric operations and loops only. 
	// Example: 
	// Input: n = 4729 
	// Output: 22 

    // function sumOfDigits(num) {

        
    // let sum = 0

    // for (let i = num; i > 0; i = parseInt(i / 10)) {
    
    //      currentDigit = i % 10
         
    //      sum = sum + currentDigit
    
    //     }
        
    //     console.log((sum))
    // }

    //  sumOfDigits(123)

    
   // 12. Given a positive integer n, count how many positive integers divide n exactly (i.e., number of divisors) using loops and numeric checks. 
   // 	Example: 
   // 	Input: n = 36 
   	Output: 9 


//    function factorsOfGivenNumber(num) {

       
//        divisorsOfNum = []
       
//        for (let i = 1; i <= num; i++) {
           
//            if (num % i == 0) {
//                divisorsOfNum.push(i)
//             }   
            
//         }
        
//         console.log(`the divisors of your number is : \n [${divisorsOfNum}]`)
//     }

//     factorsOfGivenNumber(36)


// 13. Determine whether a non‑negative integer n is a palindrome in decimal form using only numeric operations and loops (no string conversion). 
// 	Note: palindrome means reversing the given number is also the same as the given number.
// 	Example: 
// 	Input: n = 1221 
// 	Output: true 

// function palindrome(num) { 

// let rev = 0

// for (let i = num; i > 0; i = parseInt(i / 10)) {

//     currentDigit = i % 10
    
//       rev = rev * 10 + currentDigit

// }

// if (rev == num) {
//     console.log(("true"))
    
// }else {
//     console.log(("false"))
    
// }

// }

// palindrome(1221)


// 14. Compute the nth Fibonacci number (0‑indexed: F(0)=0, F(1)=1) using an iterative loop and numeric variables only. [Indexed : 0,1]
// 	Fibonacci  : sum of previous two numbers is the current number: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 
// 	Example: 
// 	Input: n = 10 
	Output: 55 

// function fibbanocciSeries(num) {


// let first = 0

// let second = 1

// for (let i = 0; i < num; i++) {

//     [first , second] = [second , first + second]

// }

//    console.log((first))

// }

// fibbanocciSeries(10)


// 15. Given positive integers N and k, compute the sum of all positive multiples of k that are ≤ N using loops and arithmetic only. 
// 	Example: 
// 	Input: N = 20, k = 3 
// 	Output: 63 (3 + 6 + 9 + 12 + 15 + 18 = 63) 

// function multiplesOfKandN(k,n) {

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
//     console.log( `${add} (${sum.join(" + ")} = ${add})`)
// }

// multiplesOfKandN(3,20)

// named functions with out parameters and with return types


    
    // 1. Find the smallest digit in a number N.

    // function smallestDigit() {
    //     smallest = 9
        
    //     for (let i = 1234567; i > 0; i = parseInt(i / 10)) {
            
    //         currentDigit = i % 10;
            
    //         if (currentDigit < smallest) {
    //             smallest = currentDigit
    //         }
    //     }
        
    //     return ("your smallest digit is :", smallest);
    // }

    //     console.log( smallestDigit())


    // 2. Count how many digits in a number N are greater than 5.

    // function digitsGreaterThan5() {
    //     greaterThan5 = 0
        
    //     for (let i = 24356765432; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10;

    //         if (currentDigit > 5) {
    //             greaterThan5++
                
    //         }
            
    //     }
        
    //     return `"the digits in a number N greater than 5 are :" "${greaterThan5}"`
    // }

    // console.log(digitsGreaterThan5())

    // 3. Given a number N, check if all digits are either 0 or 1 (binary number check).

    // function binaryOrNot() {

    //     let binary = true
        
    //     for (let i = 110101010101; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10;

    //         if ((currentDigit !== 0) && (currentDigit !== 1)) {

    //             binary = false;
    //             break;
                
    //         }
            
    //     }
        
    //     if (binary) {
    //         return("your number is a binary number");

    //     } else {
    //         return("your number is not a binary number");

    //     }
    //     }

    //     console.log(binaryOrNot())

    // 4. Find the sum of digits at even positions in a number (from right to left).

    // function sumOfEvenPositionDigits() {

    //     let coun = 0
    //     let res = 0
        
    //     for (let i = 3465; i > 0; i = parseInt(i / 10)) {
            
    //         currentDigit = i % 10;
    //         coun++
            
    //         if (coun % 2 === 0) {
    //             res = res + currentDigit
    //         }
            
    //     }
        
    //     return `"the  sum of digits at even positions in a number (from right to left):", ${res } `;
    // }
    // console.log(sumOfEvenPositionDigits())

    // 5.Find the sum of digits at odd positions in a number.

    // function oddPositionDigits() {

    //     let resul = 0;
        
    //     for (let i = 3465678; i > 0; i = parseInt(i / 100)) {
    //         resul += i % 10;
    //     }

    //     return `"Sum:" ${resul}`
    // }

    // console.log(oddPositionDigits())


    // 6.Count how many digits in a number are prime (2, 3, 5, 7).

    // function primeDigit() {

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

    // 7.From 1 to N, print:
        //"Small" if number < 10
        //"Medium" if number is between 10 and 50
        //"Large" if number > 50.

    //  function volume() {

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

    // 8. Given a number N, count how many times a specific digit d appears.
        //Let N = 167822865219482; d = 2
        //Output: 4

    //     function repeatDigit() {

            
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

    // 9. Find the sum of all even numbers between 1 and N.

        // function evenSum() {
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

        
        //10. Find the sum of all odd numbers between 1 and N.

        // function oddSum() {
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

        // arrow functions with arguments and with return statements




    // 11. Given a non‑negative integer n, compute the sum of its decimal digits using numeric operations and loops only. 
	// Example: 
	// Input: n = 4729 
	// Output: 22 

    // function sumOfDigits(num) {

        
    // let sum = 0

    // for (let i = num; i > 0; i = parseInt(i / 10)) {
    
    //      currentDigit = i % 10
         
    //      sum = sum + currentDigit
    
    //     }
        
    //     return (sum)
    // }

    //  console.log(sumOfDigits(123))

    
   // 12. Given a positive integer n, count how many positive integers divide n exactly (i.e., number of divisors) using loops and numeric checks. 
   // 	Example: 
   // 	Input: n = 36 
   	Output: 9 


//    function factorsOfGivenNumber(num) {

       
//        divisorsOfNum = []
       
//        for (let i = 1; i <= num; i++) {
           
//            if (num % i == 0) {
//                divisorsOfNum.push(i)
//             }   
            
//         }
        
//         return (`the divisors of your number is : \n [${divisorsOfNum}]`)
//     }

//     console.log(factorsOfGivenNumber(36))


// 13. Determine whether a non‑negative integer n is a palindrome in decimal form using only numeric operations and loops (no string conversion). 
// 	Note: palindrome means reversing the given number is also the same as the given number.
// 	Example: 
// 	Input: n = 1221 
// 	Output: true 

// function palindrome(num) { 

// let rev = 0

// for (let i = num; i > 0; i = parseInt(i / 10)) {

//     currentDigit = i % 10
    
//       rev = rev * 10 + currentDigit

// }

// if (rev == num) {
//     return(("true"))
    
// }else {
//     return(("false"))
    
// }

// }

// console.log(palindrome(1221))


// 14. Compute the nth Fibonacci number (0‑indexed: F(0)=0, F(1)=1) using an iterative loop and numeric variables only. [Indexed : 0,1]
// 	Fibonacci  : sum of previous two numbers is the current number: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 
// 	Example: 
// 	Input: n = 10 
	Output: 55 

// function fibbanocciSeries(num) {


// let first = 0

// let second = 1

// for (let i = 0; i < num; i++) {

//     [first , second] = [second , first + second]

// }

//    return((first))

// }

// console.log(fibbanocciSeries(10))


// 15. Given positive integers N and k, compute the sum of all positive multiples of k that are ≤ N using loops and arithmetic only. 
// 	Example: 
// 	Input: N = 20, k = 3 
// 	Output: 63 (3 + 6 + 9 + 12 + 15 + 18 = 63) 

// function multiplesOfKandN(k,n) {

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
//     return ( `${add} (${sum.join(" + ")} = ${add})`)
// }

// console.log(multiplesOfKandN(3,20))


// Named functions with (arguments) and with return 


    
    // 1. Find the smallest digit in a number N.

    // function smallestDigit(num) {
    //     smallest = 9
        
    //     for (let i = num; i > 0; i = parseInt(i / 10)) {
            
    //         currentDigit = i % 10;
            
    //         if (currentDigit < smallest) {
    //             smallest = currentDigit
    //         }
    //     }
        
    //     return ("your smallest digit is :", smallest);
    // }

    //     console.log( smallestDigit(1234567))


    // 2. Count how many digits in a number N are greater than 5.

    // function digitsGreaterThan5(num) {
    //     greaterThan5 = 0
        
    //     for (let i = num; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10;

    //         if (currentDigit > 5) {
    //             greaterThan5++
                
    //         }
            
    //     }
        
    //     return `"the digits in a number N greater than 5 are :" "${greaterThan5}"`
    // }

    // console.log(digitsGreaterThan5(24356765432))

    // 3. Given a number N, check if all digits are either 0 or 1 (binary number check).

    // function binaryOrNot(num) {

    //     let binary = true
        
    //     for (let i = num; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10;

    //         if ((currentDigit !== 0) && (currentDigit !== 1)) {

    //             binary = false;
    //             break;
                
    //         }
            
    //     }
        
    //     if (binary) {
    //         return("your number is a binary number");

    //     } else {
    //         return("your number is not a binary number");

    //     }
    //     }

    //     console.log(binaryOrNot(110101010101))

    // 4. Find the sum of digits at even positions in a number (from right to left).

    // function sumOfEvenPositionDigits(num) {

    //     let coun = 0
    //     let res = 0
        
    //     for (let i = num; i > 0; i = parseInt(i / 10)) {
            
    //         currentDigit = i % 10;
    //         coun++
            
    //         if (coun % 2 === 0) {
    //             res = res + currentDigit
    //         }
            
    //     }
        
    //     return `"the  sum of digits at even positions in a number (from right to left):", ${res } `;
    // }
    // console.log(sumOfEvenPositionDigits(3465))

    // 5.Find the sum of digits at odd positions in a number.

    // function oddPositionDigits(num) {

    //     let resul = 0;
        
    //     for (let i = num; i > 0; i = parseInt(i / 100)) {
    //         resul += i % 10;
    //     }

    //     return `"Sum:" ${resul}`
    // }

    // console.log(oddPositionDigits(3465678))


    // 6.Count how many digits in a number are prime (2, 3, 5, 7).

    // function primeDigit(num) {

    //     cou = 0
        
    //     for (let i = num; i > 0; i = parseInt(i / 10)) {

    //         currentDigit = i % 10

    //         if (currentDigit === 2 || currentDigit === 3 || currentDigit === 5 || currentDigit === 7) {
    //             cou++
    //         }

    //     }

    //     return `the num of prime numbers in your code are: ${cou}`
    // }

    // console.log(primeDigit(123467987654312))

    // 7.From 1 to N, print:
        //"Small" if number < 10
        //"Medium" if number is between 10 and 50
        //"Large" if number > 50.

    //  function volume(num) {

    //      i = num
         

    //         if (i >= 1 && i < 10) {
    //             return ("small");

    //         } else if (i >= 10 && i <= 50) {
    //             return ("medium");

    //         } else if (i > 50) {
    //             return ("large");

    //         }

    //     }

    // console.log(volume(100))

    // 8. Given a number N, count how many times a specific digit d appears.
        //Let N = 167822865219482; d = 2
        //Output: 4

    //     function repeatDigit(num) {

            
    //     let N = num
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

    // console.log(repeatDigit(16782286521948222))

    // 9. Find the sum of all even numbers between 1 and N.

        // function evenSum(num) {
        
        // totalSum = 0

        // for (a = 1; a <= num; a++) {
        //     if (a % 2 == 0) {
        //         totalSum = totalSum + a
        //     }
        // }

        //    return(totalSum)
        // }

        // console.log(evenSum(100))

        
        //10. Find the sum of all odd numbers between 1 and N.

        // function oddSum(num) {

        //     totalSum = 0

        //     for (a = 1; a <= num; a++) {
        //         if (a % 2 != 0) {
        //             totalSum = totalSum + a
        //         }
        //     }
            
        //     return(totalSum);
        // }

        // console.log(oddSum(100))

        // arrow functions with arguments and with return statements




    // 11. Given a non‑negative integer n, compute the sum of its decimal digits using numeric operations and loops only. 
	// Example: 
	// Input: n = 4729 
	// Output: 22 

    // function sumOfDigits(num) {

        
    // let sum = 0

    // for (let i = num; i > 0; i = parseInt(i / 10)) {
    
    //      currentDigit = i % 10
         
    //      sum = sum + currentDigit
    
    //     }
        
    //     return (sum)
    // }

    //  console.log(sumOfDigits(123))

    
   // 12. Given a positive integer n, count how many positive integers divide n exactly (i.e., number of divisors) using loops and numeric checks. 
   // 	Example: 
   // 	Input: n = 36 
   	Output: 9 


//    function factorsOfGivenNumber(num) {

       
//        divisorsOfNum = []
       
//        for (let i = 1; i <= num; i++) {
           
//            if (num % i == 0) {
//                divisorsOfNum.push(i)
//             }   
            
//         }
        
//         return (`the divisors of your number is : \n [${divisorsOfNum}]`)
//     }

//     console.log(factorsOfGivenNumber(36))


// 13. Determine whether a non‑negative integer n is a palindrome in decimal form using only numeric operations and loops (no string conversion). 
// 	Note: palindrome means reversing the given number is also the same as the given number.
// 	Example: 
// 	Input: n = 1221 
// 	Output: true 

// function palindrome(num) { 

// let rev = 0

// for (let i = num; i > 0; i = parseInt(i / 10)) {

//     currentDigit = i % 10
    
//       rev = rev * 10 + currentDigit

// }

// if (rev == num) {
//     return(("true"))
    
// }else {
//     return(("false"))
    
// }

// }

// console.log(palindrome(1221))


// 14. Compute the nth Fibonacci number (0‑indexed: F(0)=0, F(1)=1) using an iterative loop and numeric variables only. [Indexed : 0,1]
// 	Fibonacci  : sum of previous two numbers is the current number: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 
// 	Example: 
// 	Input: n = 10 
	Output: 55 

// function fibbanocciSeries(num) {


// let first = 0

// let second = 1

// for (let i = 0; i < num; i++) {

//     [first , second] = [second , first + second]

// }

//    return((first))

// }

// console.log(fibbanocciSeries(10))


// 15. Given positive integers N and k, compute the sum of all positive multiples of k that are ≤ N using loops and arithmetic only. 
// 	Example: 
// 	Input: N = 20, k = 3 
// 	Output: 63 (3 + 6 + 9 + 12 + 15 + 18 = 63) 

// function multiplesOfKandN(k,n) {

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
//     return ( `${add} (${sum.join(" + ")} = ${add})`)
// }

// console.log(multiplesOfKandN(3,20))