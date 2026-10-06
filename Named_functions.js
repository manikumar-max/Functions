// Named Functions without Input and without Return

// function sayHello(){
//     console.log("Hello")
// }

// sayHello();

// function addThreeNumbers(){
//     let a = 10;
//     let b = 20;
//     let c = 30;
//     console.log(a+b+c)
// }

// addThreeNumbers();

// Named Function with input and without return

// function displayName(fname){
//     console.log("my name is ",fname)
// }

// displayName("mani");

// function evenOdd(num){
//     if(num % 2 == 0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }

// evenOdd(6);

// function averageOfThreeNumbers(num1,num2,num3){
//     console.log((num1+num2+num3)/3)
// }

// averageOfThreeNumbers(1,2,3)

// Named Function with out input and with return

// function Name(){
//     let name = "hero";
//     return name;
// }

// let a = Name();
// console.log(a)

// function factorial(){
//     n = 5
//     let fact = 1;
//     for(let i = n;i > 0; i--){
//         fact = fact * i;
//     }
//     return fact
// }

// fact_5 = factorial();
// console.log(fact_5)

// Named Function with input and with return

// function name(fname){
//     return fname
// }

// myName = name("mani");
// console.log(myName)

function evenOdd(num){
    if(num % 2 == 0){
        return "even"
    }else{
        return "odd"
    }
}

num1 = evenOdd(2)
console.log(num1)