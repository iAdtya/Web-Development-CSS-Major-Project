//! General JS Advance Concepts 

//? old concepts

// var var1 = 10;
// var a = 10;

// what ever we create in global scope is a property of window object and 
// if u do window in console it will print all the properties of window object and 
// var will be there with var1 = 10 as value  
// flexical environmet is the place where the variable is defined physically\

//? Closures Self practised set
// var i= 10;
// function outer(){
//   var j=20;
//   // console.log(i,j);
//   var inner = function(){
//     // function inner(){
//     var k=30;
//     console.log(i,j,k);
//     i++
//     k++;
//     j++;
//   }
//   // console.log(i,j,"check");
//   return inner;
//   // inner();
//   // inner();
// }
// var inner = outer();
// // outer();
// // inner();
// // inner();

// inner();
// var inner = outer();
// inner();


//! practise questions
// var a =10;
// var b;
// function outer(){
//     var b = 30;
//         function inner(a){
//             var a = 30;
//             console.log(a++ ,b++,"3")
//             }
//     console.log(a, ++b,"1");
//     inner(a);
// }
// outer();
// console.log(a++,b++,"2");


// var a =10;
// function outer(){
//     var a = 20;
//     var b = 30;
//     function inner(a){
//         var a = 30;
//         console.log(a++ ,b++)
//         }
//     console.log(a, ++b);
//     inner(a);
// }
// outer();
// console.log(a++);

//! Avoid Global variables

// var name = "John";
// var name = "albert";

// console.log(name);

//* so if we have multiple js files and we have same variable name in both the files then it will override the value of the variable
//* so to avoid this we use IIFE

//! IIFE - Immediately Invoked Function Expression

//  (function(){
//     var name = "John";
//     console.log(name);
//  })();
//? (); adding this will invoke the function at the end of the function
//todo  this is how we create IIFE and it will not override the value of the variable

//! we can solve this by using let and const

// {
//     let name = "John";
//     setTimeout(function(){
//         console.log(name);
//     },1000);
// }
// //* Examples 
// {
//     var a = 10 ;
//     let b = 20 ;
//   }
  
//   c = 30 ;
  
//   if(c===30){
//       let d = 50 ;
//       console.log(d) ;
//   }
//   else{
//        var e = 20;
//        console.log(e) ;
//   }

//! Closures In DEPTH
//? let in for loops 

// for (var i = 0; i <= 3; i++) {
//     setTimeout(function() {
//       console.log(i); 
//     },1000);
//     console.log("check",i)
 
//   }    

  // ans = 4 4 4 4

//! Arrow Functions better way to write functions

// var multiply =(x,y) => {return x * y};
// console.log(multiply(2,3)); 

//? so if there is only one parameter passing then we can remove the paranthesis x => {return x * y};
//? if there is only one line of code then we can remove the curly braces and return keyword x => x * y;

//todo its represented as this in the background

// var multiply = function multiply(x, y) {
//   return x * y;
// };

// console.log(multiply(2, 3));

//todo arrow functions are always anonymous functions

// var double = x=> x*2;
// console.log(double(2));

//? if we have to return an object then we have to wrap it in paranthesis
 

function Person(name){
  this.name = name;
  console.log(this);
  // setTimeout(function(){
  //   console.log(this);
  // },1000);

  //  setTimeout( () => console.log(this),1000);
}

// var passing = new Person("John");

var func =( a , b , c) => (1);