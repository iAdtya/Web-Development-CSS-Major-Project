//! this keyword 
// this keyword refers to the object that is executing the current function

//todo the value of this keyword inside the function depends on how the function is called and the execution context of the function

// when determinig the value of this keyword we need to look at function call side 
//! RULES
//? New keyword

// function vechile(){
//     console.log(this);
// }

// new vechile();

//? rules of new keyword
//todo it logs newly created object to the console
// 1= new create a brand new object 
// 2= the new keyword will link the object to the prototype of vechile function via __proto__ property
// 3= calls the vechile function with this set to the new object
// 4= unless the function returns its own object, the new function will return the object created in step 1

//! Restaurent Example
// function MenuItem(name, price, ingredients) {
//     this.name = name;
//     this.price = price;
//     this.ingredients = ingredients;
//   }
  
//   MenuItem.prototype.getDescription = function() {
//     return `${this.name}: $${this.price} - ${this.ingredients.join(', ')}`;
//   };
  
//   const burger = new MenuItem('Burger', 9.99, ['Beef patty', 'Lettuce', 'Tomato', 'Onion']);
//   const pizza = new MenuItem('Pizza', 12.99, ['Cheese', 'Tomato sauce', 'Pepperoni', 'Mushrooms']);
  
//   console.log(burger.getDescription());
  // Output: Burger: $9.99 - Beef patty, Lettuce, Tomato, Onion
  
//   console.log(pizza.getDescription());
  // Output: Pizza: $12.99 - Cheese, Tomato sauce, Pepperoni, Mushrooms

//! Clash of Clans
  // Constructor function for a Village object
// function Village(name, gold) {
//     this.name = name;
//     this.gold = gold;
//   }
  
//   // Method to get the amount of gold in the village
//   Village.prototype.getGold = function() {
//     return this.gold;
//   }
  
//   // Create a new village using the new keyword and the Village constructor function
//   let myVillage = new Village('My Village', 12);
  
//   // Call the getGold method on the myVillage object
//   console.log(myVillage.getGold()); // Output: 1000
  
//   // Constructor function for a Barbarian object
//   function Barbarian(name, health, attack) {
//     this.name = name;
//     this.health = health;
//     this.attack = attack;
//   }
  
//   // Create a new barbarian using the new keyword and the Barbarian constructor function
//   let myBarbarian = new Barbarian('Bob', 100, 10);
  
//   // Access the properties of the myBarbarian object
//   console.log(myBarbarian.name); // Output: Bob
//   console.log(myBarbarian.health); // Output: 100
//   console.log(myBarbarian.attack); // Output: 10

//! VALORANT
// function valorant(agent, ult){
//     this.agent = agent;
//     this.ult = ult;
//todo dont use this method its bad for memory
//    //  this.getult = function(){
//    //       return this.agent + ' ' + this.ult;
//    //  };
// }

//todo use Valorant.prototype.constructor to get the constructor function of the object its like a two way street 
// valorant.prototype.getult= function(){
//     return this.agent + ' ' + this.ult;
// }

// let jett= new valorant('jett', 'blade storm');
// console.log(jett.getult());


//! Implicit Binding

// var raj ={
//     name :'raj',
//     geet: function(){
//         console.log('hello',this.name)

//     }
// };

// var local=raj.geet();

// console.log(local); 

// var loclaGreet =raj.geet.bind(raj);
// loclaGreet();

//! Constructor function
//todo if u are using a function as a constructor function then the convention is to use a capital letter for the function name like Student
//todo when if are using the function as a constructor function then the this keyword inside the function will refer to the object that is created using the constructor function
// function Student(name,rollNo,marks){
//    // var student = {};
//    this.name=name,
//    this.rollNo=rollNo,
//    this.marks=marks
//    // return student;
// }
// //? u can call the function as a constructor with new keyword 
// var student1 = new Student ('raj',1, 100);   // ? output CreatStudent { name: 'raj', rollNo: 1, marks: 100 }
// // var student2 = CreatStudent ('raju', 2, 200);  // ? output undefined  this is calling the function normally
// // var student3 = CreatStudent ('kaju', 3, 300);  // ? output { name: 'kaju', rollNo: 3, marks: 300 } if u use student.name 
// console.log(student1);
// // console.log(student2);


//! example 1 the name is not present in the object so the output is User { isAdmin: false }
// function User(name) {
//    this.isAdmin = false;
//  }
//  var user = new User("James");
//  console.log(user);

 //! ADDING BEHAVIOUR TO THE OBJECT
// function Vechicle(namWheels,price){
//    this.namWheels=namWheels,
//    this.price=price
//    this.getprice = function(){
//       return this.price;
//    }
// }

// var car = new Vechicle(4, 100000);
// // console.log(car.getprice());
// console.log(car); //todo so when u create a getprice with a function that creates copy for each car then which is bad for memory 
//todo so we can use prototype to add behaviour to the object

//! Prototype
//? so in javascript every object has a prototype property and a prototype property is an object
//todo Benefits: so the prototype is shared by all the objects created using the constructor function 
// todo          and we can add behaviour at run time 

// function Valorant(agent ,ult){
//    this.agent=agent,
//    this.ult=ult
// }

// Valorant.prototype.constructor //todo use this to get to the constructor function of the object 
// Valorant.prototype.getult = function(){
//    return this.ult;
// }; 

// var jett = new Valorant('jett',"balde storm");
// console.log(jett.getult())
// Valorant.prototype.uhhh = "uhhh"; //! adding properties at run time and log the prototype to see the propeties and get that using dot operator
// console.log(Valorant.prototype);
// console.log(jett.uhhh)

//! Prototype chain
// function Vehicle (numVechile,price){
//    this.numVechile = numVechile,
//    this.price =price
//  }
 
//  Vehicle.prototype.getprice=function(){
//    return this.price;
//  }
 
//  var vehicle1 = new Vehicle(3,"3000rs")
//  var vehicle2 = new Vehicle(1,"1000rs")
 
 //todo Object.getPrototypeOf(vechile1) ===  Vehicle.prototype   Output= true
//todo  Vehicle.prototype.isPrototypeOf(vechile1)
//? output true

// function Person(age) {
//    this.age = age;
//    }
//    var p1 = new Person(9);
//    console.log(Person.hasOwnProperty("name"));

//! Objects
//todo Object as function exists in javascript and its prototype is also there
// function Vehicle(numVechile,price){
//    this.numVechile=numVechile,
//    this.price=price
// }

// Vehicle.prototype.getprice=function(){
//    return this.price;
// }

// var vehicle1=new Vehicle(3,"3000rs");
// var vehicle2=new Vehicle(1,"1000rs");
// console.log(vehicle1.getprice());
// console.log(Object.prototype)

//! Scribling over 
// vechile1.color="white"
// 'white'
// vechile1.hasOwnProperty.color === Vehicle.hasOwnProperty.color
// true
// vechile1.color === Vehicle.color
// false

// function A(){
//    this.name =  "A";
// }

// Object.prototype.color = "red";
// var d = new A();

// console.log(d.color) ;

//! Prototype chain
// function A(){
//    this.name = "A";
//    this.color = "blue";
// }
// function B(){
//    this.name = "B";
// }
// function C(){
//    this.name =  "C";
// }

// let obj1 = new A() ;
// let obj2 = new B() ;
// let obj3 = new Object();
// let obj4 = new C();

// A.prototype.color = "red" ;
// B.prototype.color = "red" ;
// Object.prototype.color = "pink" ;

// console.log(obj1.color, obj2.color, obj4.color, obj3.color);

// //! Explanation: 

// The obj1 has a property color of blue, so it doesn’t check for the value up the prototype chain. 

// The obj2 doesn’t have a property color, so it looks up in the prototype chain in its prototype, and a red value gets assigned to it. 

// The obj3 made using Object() directly inherits the color value pink from its prototype as it has no color property. 

// The obj4 has no property color, so it looks up in the prototype chain in the function prototype, which also doesn’t have a property color. So it looks further up in the chain in the Object function, then in Object.prototype and assigns pink color.

//! object vs Object in second word O of object is capital

// var obj = {};
// console.log(typeof(obj));  // O/P =object
// console.log(typeof(Object)); // O/P = function

// const object1 = new Object();
// object1.property1 = 42;
// console.log(Object());
// console.log(typeof(object1));

// const object2 = new Object();
// object2.property1 = 42;
// console.log(object2);
// console.log(typeof(object2));

//! CLLASES
//todo classes are syntactical sugar over the prototype based inheritance the best way to write
// class Vehicle{
  
//    constructor(numVechile,price){
//      this.numVechile = numVechile
//      this.price = price
//    }
//    getPrice(){
//      return this.price;
//    }
//  }
 
//  var vechile1 = new Vehicle(3,"3000rs")
//  var vechile2 = new Vehicle(1,"1000rs")
//  console.log(vechile1.getPrice())
// console.log(typeof(Vehicle)) // O/P = function
// console.log(Vehicle.prototype.constructor === Vehicle); // O/P = true [class Vehicle]
//? we cannot call the class without new keyword
//? Hoisting is not there in classes
//? classes are first class citizens

// //! Class Expression
// var Vehicle = class{
//    //todo take the bichme ka mall from up the only change is that we are not giving the name to the class 
//    //todo we can create named or unnamed class like
//    //! var Vehicle = class Vehicle {} 
  // // they are alos not hoisted
// }

//! Class Inheritance

// class Valorant{
//    constructor(agent, ult){
//       this.agent=agent,
//       this.ult=ult
//    }
//    getult(){
//       return this.ult;
//    }
//    printDetails(){
//       console.log(this.agent, this.ult);
//    }
// }

// class viper extends Valorant{
//    constructor(smoke,ult){
//       super('viper',ult)
//       this.smoke=smoke
//    }
//    printDetails(){
//       super.printDetails() //todo now if u wanna call Vehicle class printDetails then u can use super.printDetails()
//       console.log("huuh", this.smoke)
//    }
// } 

// // var jett = new Valorant('jett',"balde storm");
// // var reyna = new Valorant('reyna',"empres");
// var miniviper = new viper('Blowhorne','viper pit');
// console.log(miniviper.printDetails());

// var Person = class {
//    constructor() {}
//    sayHello() {
//      return 'Hello!';
//    }
//  };
//  var instance = new Person();
//  console.log(instance.sayHello()+" "+Person.name); // todo Hello! Person  By default, the value name is set to the functions name 

//! scrimba classes challenge just hands on practice 
// class Player {
//   constructor(name, country){
//     this.name = name;
//     this.country = country;
     
//   }
//   printDetails(){
//     console.log(`${this.name} was born in ${this.country}`);
//   }
// }
// const messi = new Player("Messi", "Argentina");
// messi.printDetails();


// class TennisPlayer extends Player{ 
//   constructor(name,country,age){
//     super(name,country)
//     this.age = age;
//   }
//   printDetails(){
//     // super.printDetails();
//     console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
//   }
// }

// var roger = new TennisPlayer("Roger Federer", "Switzerland", 38);
// roger.printDetails();