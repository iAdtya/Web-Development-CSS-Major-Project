
// function sayHello(){
//     alert('kyu be kadwe');
// }

// var hello=document.getElementById('btn');
// hello.addEventListener('click',sayHello);

function counter(){                        //? as the box is getting clicked so we also take the box id to manuplate it 
                                             //? and the span element having 0 no and
        key++                          //todo  and then we addEventlistner click to add the functionality 
        console.log(key)              //todo  click is the fucntionality and counter is the function we want it to perform on click
        count.innerText=' '+key+' '+"lavde kaha gaya";     
                                        
                                        //todo and now to render it we take the id where it is to incremented and use 
                                        //todo use innerText to manuplate/render the output.
    
}
//todo mouse functions
function out(){
    // key++
    console.log("mouse out")
}

 key=0
var box=document.getElementById('box');
var count=document.getElementById('click-count');

//! mouse events
box.addEventListener('mouseover',counter)
box.addEventListener('mouseout',out)



// var box = document.getElementById('box');
// var clickCount = document.getElementById('click-count');
// count = 0;

// box.addEventListener('click', function(){
//     count++;
//     console.log(count);
//     clickCount.innerText = count + " ";
// });


//! keyboard events 
// function press(){
//     console.log("key pressed");
// }
// var search=document.getElementById('search');
// search.addEventListener('keypress',press);

//! if ur working on a game u want make keypress event on the whole document

document.addEventListener('onkeydown',function(){
    console.log("key down"); //? this will work on the whole document even if u press any key
});

//! to know which key is pressed

document.addEventListener('keydown',function(event){  //todo to collect the event we use event object and pass it in the function
    console.log(event.key); //? this will work on the whole document and tell u which key is pressed
}); 
//todo use event.keyCode to know which key is pressed in ASCII code

//! Properties of event object

var outerdiv=document.getElementById('outer');
var innerdiv=document.getElementById('inner');

outerdiv.addEventListener('click',function(){
    console.log("outer div clicked");
});

innerdiv.addEventListener('click',function(event){  //* to collect the event we use event object and pass it in the function
    console.log("inner div clicked");
    event.stopPropagation(); //? this will stop the event from bubbling up to the parent element like dom tree
});

"use strict";   //? add this to the top of the file to use strict mode
//! STRICT MODE 
//* anything that JS thinks is wrong it will throw an error and is no more a losely typed language
//* to make the function strict we can add "use strict" at the top inside of the function
