// let displayName = () => {
//     console.log("mani")
// }

// displayName()

// let displayName = (name) => {
//     console.log(name)
// }

// displayName("mani");

// let oddNumber = (a,b) =>{
//     for(let i = a; i<=b; i++){
//         if(i % 2 != 0){
//             console.log(i)
//         }
//     }
// }
// oddNumber(1,10);

// arrow function without input (argument) and with return

// let displayName = () => {
//     name = "mani"
//     return "hello world " + name
// }

// let greet = displayName()
// console.log(greet)

// console.log(displayName())

// consized code of arrow function

// let displayNames = () => {
//     return "hero";
// }
// console.log(displayNames())

// let displayName = () => "hero";
// console.log(displayName())

// arrow function with input and with return

// let displayName = (name) => {
//     return name;
// }

// console.log(displayName("hero"))

// let displayName = name => name 

// console.log(displayName("hero"))

let odd = num => {
    if(num % 2 != 0){
        return "odd number "+num 
    }else{
        return "even number "+num
    }
}

console.log(odd(3))