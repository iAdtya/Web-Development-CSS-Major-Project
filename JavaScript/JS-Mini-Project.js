var arr=[1,2,3,4,5,6,7,8,9,10];

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//? smaller version of for loop for iterating over arrays
for(var i of arr){
    console.log(i);
}


//! smoth scrolling
window.scrollTo(0,1000); //? this will scroll the window to 1000px down

window.scrollBy(0,100); //? this will scroll the window by 1000px down


var scroll=setInterval(function(){
    
});