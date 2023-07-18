//! there are 7 type of data types in JS
//? Primitive data types    
//? 1. Number            Object
//? 2. String
//? 3. Boolean
//? 4. Undefined
//? 5. Null
//? 6. Symbol
//? 7. Null


// function showAlert(msg){  // ! msg is called parameter
//     console.log(msg)
// }

// showAlert('heloo world');  // ! heloo world is called arguments 


// function sum(a,b){
//     console.log(a+b);
//     return a+b;
// }

// var result = sum(10,5,6);
// console.log(result);  // ? 10 + undefined = NaN if we don't pass the value of b then it will be undefined || or we give more than they
// ? required then it will be ignored   


//! FUNCTION HOUISTING

// function hoistDemo(){
//     console.log(i);
//     var i = 10; 
// }

// hoistDemo();

// ? it will print undefined because it will take the variable i but it will not take the value of i because it is not defined yet
// ? so it will print undefined || as in the satck the variable is declared at the top and then the value is assigned to it

// function demo() {
//     console.log(x);
//     var x = 10;
// }

// demo();

// ? it will print undefined because it will take the variable x but it will not take the value of x because it is not defined yet
// ? so it will print undefined

// function isFibonacciNumber(number) {
    // Special case for numbers 0 and 1, which are considered Fibonacci numbers
//     if (number === 0 || number === 1) {
//       return true;
//     }
  
//     var prev = 0;
//     var curr = 1;
  
//     while (curr <= number) {
//       if (curr === number) {
//         return true;
//       }
  
//       var next = prev + curr;
//       prev = curr;
//       curr = next;
//     }
  
//     return false;
//   }

// let x= isFibonacciNumber(5);
// console.log(x);

//! FUNCTION DECLARATION

// #AskAbhijit ( HITLER, CHINA, JAPAN ) Started/Created narrative of nation 
// empowerment and the countries has landed in war 
// ( INDIA is also doing that Sone ki Chidya what make u think we wont create WW3)

//! FUNCTION Declaration

// function factorial(n){
//     var ans=1;
//     for(var i=1;i<=n;i++){
//         ans=ans*i;
//     }
// }

// //! FUNCTION EXPRESSION

// var factorial = function fac(n) {
//     var ans= 1;
//     for (var i = 1; i <= n; i++){
//     ans = ans * i;
//     }
//     return ans;
//  };

//  var factorial2=function(n){
//     var ans=1;
//     for(var i=1;i<=n;i++){
//         ans=ans*i;
//     }
//     return ans;
//  }
//  console.log(factorial(5));

//! functions is arguments

// var factorial = function fac(n) {
//     var ans=1;
//     for(var i=1;i<=n;i++){
//         ans=ans*i;
//     }
//     return ans;
// };

//     n!
// r!      (n-r)!

// function nCr(n,r,factorial){
//     var ans= factorial(n)/(factorial(r)*factorial(n-r));
//     return ans;
// }

// console.log(nCr(5,2,factorial)); //? so we can pass the function as an argument in another function

// //! arrays

// var arrInline =[1,2,3,4,5,6,7,8,9,10];
// var arrNewarray = new Array(1,2,3,4,5,6,7,8,9,10);

// console.log(arrInline);
// console.log(arrNewarray[11]);
// console.log(arrInline.length);

// var arr2 = new Array(10);  //? if u pass only pass one argument then it will be its size not elements inside that but if u pass more than 
// console.log(arr2.length);  //? then those will be the elements inside that array

//! arrays are hetregenous in JS like in python we can store any type of data in array 

// var arr =["abc",10,true,20]; //? we can store any type of data in array
// console.log(arr);
// arr.shift(); //todo it will remove the first element of the array
// arr.unshift(100); //todo it will add the element at the first position of the array

//! Scling of array

//todo take 3 inputs 
//? 1. start index | how many elements to delete | elements to insert

// var arr=[1,2,3,4,5,6,7,8,9,10];
// arr.splice(3,1) //todo it will delete the element from the 3rd index and it will delete 1 element
// console.log(arr);
// arr.splice(3,0,100); //todo it will delete the element from the 3rd index and it will delete 0 element and it will insert 100 at the 3rd index
// console.log(arr);
// arr.splice(3,1,100); //todo it will delete the element from the 3rd index and it will delete 1 element and it will insert 100 at the 3rd index
// console.log(arr);

//! Iterating over array

// var arr=[1,2,3,4,5,6,7,8,9,10];

// for(var i=0; i<=arr.length; i++){  //? Good old method
//     console.log(arr[i]);
// }

// function print(element , index , arr){ //? this is the callback function
//     console.log(element);
// }

// arr.forEach(print); //? to iterate over the array we have forEach method which takes a callback function as an argument

//! OBJECtS
//todo u can have function as value in object
// var student={name:"aditya",
//             marks:20,
//             rollno:101};   //? this is the object  its a collection of key value pairs(properties)


// console.log(student);             //? to print the object
// console.log(typeof(student));   //? to check the type of the object
// console.log(student.name);      //? to access the property of the object we use dot operator

// console.log(student.sem);       //? if we try to access the property which is not present in the object then it will print undefined

// student.sem=1;                  //? to add the property in the object we use dot operator
// console.log(student);

// //! objects helps us in warraping data and functions together
// //todo all the keys in the object are string

// //* 2 ways to create object

// var onj={}
// var obj1=new Object();
// console.log(obj1,onj,typeof(obj1),typeof(onj));

// //! ways to access the property of the object

// console.log(student.name);    //? it wont work if the property name is invalid like -name but niche wala chalega
// console.log(student["name"]); //? this is the other way to access the property of the object

// function printproperty(onj,prop){
//     console.log(onj[prop]);
// }

// printproperty(student,"name"); //? this is the way to access the property of the object using function

// //! to delete the property of the object

// delete student.sem;
// console.log(student);

// delete student["name"];
// console.log(student);

//! how are objects stored in memory
// var obj={
//     apple:"me_garib_hu",
//     name:"aditya"
// }

// var obj2=obj;
// console.log(obj2,obj); //todo this will print the same object because obj2 is pointing to the same object as obj

// //! Iterating over object 
// for(var prop in obj){
//     console.log(prop,obj[prop]); //? this will print the property of the object but dont use dot method because it will print undefined
// }                                //todo the property is dynamical decided so using [] is better

// var keys= Object.keys(obj)
// console.log(keys); //? this will print the keys of the object in the form of array

//! Nested objects

// var student={
//     name:"aditya",
//     marks:20,
//     "roll no":101,
//     address:{
//         city:"delhi",
//         state:"delhi"
//     }
// }
// //todo   use dot or [] to access the property of the nested object like student.name or student.address["city"]
// console.log(student);

//! Array of objects

// var arr= [1,2,3,4,5,6,7,8,9,10];    
 
// //todo is equal to obj like this 

// var obj={   
//     "0":1,
//     "1":2,
//     "2":3,
//     "3":4,
//     "5":5,
// }
// //! Iterating over array of objects

// obj.lavda="demo";   //? this will add the property in the object but it will not print the property
// console.log(obj);

// arr.lavda="demo"; //? this will add the property in the array but it will not print the property
// console.log(arr,arr.length);

// for(var key in arr){
//     console.log(key); //? this will print the index of the array and the lavda property);
// }

//! Timming functions
//todo count down timer
// var sec=10;
// function sayHello(){
//     console.log("after :", sec);
//     sec--;
//     if (sec==0){
//         console.log("Time Up lavde");
//         clearInterval(id); //? this will stop the setInterval function
//     }
// }

// setTimeout(sayHello,1000); //? this will call the function after 1 sec
// var id=setInterval(sayHello,1000); //? call after every 1 sec

//! Deep copy and shallow copy
//todo to make a copy of the object we use spread operator
// var obj={...student};  //? this will make a copy of the object
// var obj=Object.assign({},student); //? this will make a copy of the object
// var obj=JSON.parse(JSON.stringify(student)); //? this will make a copy of the object

// var obj=[...arr]; //? this will make a copy of the array
// var obj=obj.map(el=>el) //? this will make a copy of the array
