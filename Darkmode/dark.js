// // Add functionality to the switch/toggler to toggle between light and dark mode using javascript code
// const darkModeToggle = document.querySelector("#darkModeToggle");
// darkModeToggle.addEventListener("change", () => {
//     console.log("clicked");
//     document.body.classList.toggle("dark-mode");
// });


// import "./styles.css";

// var dark=document.getElementById("darkmode")
// var body = document.body;
// var isBackgroundYellow = true;
// dark.addEventListener('click',toggeldarkmode);

// function toggeldarkmode(){
//   body.styles.background-color:
// }

const toggle = document.getElementById("toggle");
// const body = document.querySelector("body");

toggle.addEventListener('click', function () {
  if (this.checked) {
    document.body.style.backgroundColor = "black";
    document.body.style.transition = "2s";
  } else {
    document.body.style.backgroundColor = "#514878";
    document.body.style.transition = "2s";
  }
});

// const toggle = document.querySelector("input[name=toggle]");

// toggle.addEventListener("click", function () {
//   if (this.checked) {
//     document.body.style.backgroundColor = "white";
//     document.body.style.transition = "2s";
//   } else {
//     document.body.style.backgroundColor = "#514878";
//     document.body.style.transition = "2s";
//   }
// });
