//! cllabacks
// setTimeout(fun,2000)
// function fun(){
//     console.log("I am a function")
// }
//? or 
// var timer = function(){
//     console.log(`I am a function`)
// }
// setTimeout(timer,2000)

//!Promises
// if u make a succsessfull payment to us we will reserve a seat for you 

// const buyTicket = () => {
//     return new Promise( (resolve,reject) =>{
//         setTimeout( () => {                                 //todo its to simulate a payment to a server with a delay of 3 seconds
//             const error = true;
//             if (error) {
//                 reject(" Sorry your payment was not successful")
//             }else{
//                 resolve(" Thank you your payment was succsessful")
//             }
//         },3000)
//     })
// }

// buyTicket().then((success)=> console.log(success)).catch((error)=>  console.log(error));


// const information = () => {
//     return new Promise( (resolve,reject)=>{
//         const error = false;
//         if (error){
//             reject("Sorry we could not find the information you were looking for")
//         }else{
//             resolve({
//                 firstName:'aditya',
//                 lastName:'Khedekar',
//                 age: 22,
//                 email: 'adityakhedekar98906@gmail.com'
//             });
//         }
//     })
// }

// information()
// .then((lavda)=> console.log(lavda))
// .catch((error)=> console.log(error))

//todo ANALOGY A JOB INTERVIEW For Promises
//? when u go to the interview u have to wait for the result of the interview ( ok we will get back to u) 
//! Pending
//! Fulfilled
//! Rejected

//! FUNCTIONS are first class citizens in javascript
// let muNum = 42
// let myNum2 = muNum


// let myFunction = function(){
//     console.log("I am a function")
// }

// let myFunction2 = myFunction
// myFunction2()

//! calback using Filter method in ARRAY
// const people = [
//     {name:'aditya',age:22,position:'developer'},
//     {name:'aditya',age:21,position:'Frontend developer'},
//     {name:'aditya',age:20,position:'Backend developer'},

// ]

// function adults(iterator){
//     return iterator.age >20
// }

// const ages = people.filter(adults)
// console.log(ages) 

//! Event-loop Settimeout 1 3 2 o/p

// console.log(1)
// setTimeout(function(){
//     console.log(2)
// },0)

// console.log(3)
//todo 1 3 2  so why does it prints 1 3 2 and not 1 2 3 

//? when the time ends and goes inside a task queue in js engine 
//todo there is something called as event loop this looks at both the task queue and the call stack
//todo and if the call stack is empty it will take the first task from the task queue and put it in the call stack

//! Async Await

// const photos =[];

// async function photoUpload (){
//     let uploadStatus= new Promise ((resolve,reject) => {
//         setTimeout( function(){
//             photos.push(`Profile Pic`)
//             resolve(`Photo Uploaded`)
//         },3000)
//     })
//     let result = await uploadStatus;

//     console.log(result)            //? when u run the funcion it will print the promise object and length 0
//     console.log(photos.length)     //todo cz the the promise is not resolved runs for 3sec and goes to the task queue
//     console.log(photos)            //todo and the next line of code is executed and the length is 0 cz the promise is not resolved
                                   
//     //! but when u use Async Await it will wait for the promise to resolve and then execute the next line of code
// }

// photoUpload()

//! Async Await with fetch
// const apiurl = " https://api.chucknorris.io/jokes/random"
// async function joke (){
//    const response = await fetch(apiurl);
//    const data = await response.json();  //todo this is a promise so we have to use await to resolve it and the data is 
//                                         // todo the data is parsed to data variable   
//    console.log(data.value)
// }

// joke();

//! filter method in array
let numbers = [-23,12, -17, 19, -20, 0, 1,-12, -5, 5, 20];
let even = numbers.filter(value => value%2==0);
console.log(even);
