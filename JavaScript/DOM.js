// todo  DOM  (documet object model)


//                html 
//           head      body
//         title       h1   p  a
//                     h2   p  a   


//! how to acces dom
// go in the console and type document and u will see the whole html code
// document.documentElement
// document.head
// document.body
// window.document   //? window has multiple properties and one of them is document like screen,location,history etc

//! DOM IS LIKE A API 


//! event handling
onclick="alert('hello')"

var hello=document.getElementById('btn');
    hello.addEventListener('click',function(){
        alert('kyu be kadwe');
    });

document.querySelector('#btn').addEventListener('click',function(){
    alert('kyu be kadwe');
});