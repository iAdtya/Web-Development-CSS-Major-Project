// var scroll=setInterval(function(){
//     window.scrollBy(0,50);
    
// },50);
// clearInterval(scroll);

// var currentPos=0;

// var targetPos=1000;

// var scroll=setInterval(function(){
//     if(currentPos>=targetPos){
//         window.clearInterval(scroll);
//     }else{
//         currentPos+=50;
//         window.scrollBy(0,50);
//     }
// },50);

// var currentPos=document.getElementById("education-name");
// var targetPos=document.getElementById("education"); 

// currentPos.addEventListener('click',function(){
//     console.log("clicked");
//     if(currentPos>=targetPos){
//         window.clearInterval(scroll);
//     }else{
//         currentPos+=50;
//         window.scrollBy(0,50);
//     }
// },50);

//! the best approch for smoth scrolling
// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// var interval;


// for (var i = 0; i < navMenuAnchorTags.length; i++) {
//     navMenuAnchorTags[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
//         console.log(this.textContent);
//         var targetSection = document.getElementById(targetSectionID);
//         console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

//         interval = setInterval(function () {
//             scrollVertically(targetSection);
//         }, 20);
//     });
// }


// function scrollVertically(targetSection) {
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();
//     if (targetSectionCoordinates.top <= 0) {
//         clearInterval(interval);
//         return;
//     }
//     window.scrollBy(0, 50);
// }
//! MY APPROCH
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');      //? this will select all the anchor tags inside the nav-menu class
console.log(navMenuAnchorTags);                                        //? this will print all the anchor tags inside the nav-menu class

for(var i=0; i<navMenuAnchorTags.length;i++){                         //? this will iterate over all the anchor tags inside the nav-menu class
    navMenuAnchorTags[i].addEventListener('click',function(event){   //? this will add event listener to all the anchor tags inside the nav-menu class
        event.preventDefault();                                         //? this will prevent the default behaviour of the anchor tag
        var targetSectionID = this.textContent.trim().toLowerCase();  //? this will get the text content of the anchor tag and convert it to lowercase
        console.log(this.textContent)
        var targetSection = document.getElementById(targetSectionID); //? this will get the id of the section which is same as the text content of the anchor tag
        console.log(targetSection); 
        var scrollInterval=setInterval(function(){                   //? this will scroll the window to the target section 
            var targetSectionCoordinates = targetSection.getBoundingClientRect(); //? this will get the coordinates of the target section
            console.log(targetSectionCoordinates.top)                                   //* this will print the coordinates of the target section
            if(targetSectionCoordinates.top<=0){                    //* this will check if the target section is at the top of the window
                window.clearInterval(scrollInterval);             //? this will clear the interval if the target section is at the top of the window
                return;
            }else{
                window.scrollBy(0,50)                           //? this will scroll the window by 50px
            }
        } ,20 );

    })

}

//* so the approch is simple we get all the anchor tags iterate over them and add event listener to them and 
//* we stop the deafult behaviour of direct scrolling then we get the id of the section which is same as the text content of the anchor tag
//* then we get the id of that section which is our target and 
//todo now we create a fun for scrolling we get the coordinates is the top is smaller than 0 we stop if not we srcoll by 50px 
//todo plz check out the coordinates in the console for better understanding

