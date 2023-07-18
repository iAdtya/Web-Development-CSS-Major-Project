// handel scroll event on window
// Check  the skill section is visible or not
// ensure that initial width of colored skill div is 0 -> initialised/Reset to 0 width vaalue
// start animtion on every skill -> increase the width from 0 to skill level at regular interval
// store slill level-> HTML with help data attribute

var progressBars=document.querySelectorAll(".skill-progress > div");
console.log(progressBars);

var skillsContainer=document.getElementById("skills-container");
window.addEventListener("scroll",checkScroll);

var animationDone=false;

function initialiseBars(){
    for(let bar of progressBars){
        console.log(bar);
        bar.style.width=0+'%';
    }
}

initialiseBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth=bar.getAttribute("data-bar-width");
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+"%";
        },5);
    }

}

function checkScroll(){
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<=window.innerHeight){
        animationDone=true;
        console.log("skills section visible");
        fillBars();
    }else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initialiseBars();
    }
}