
var button= document.querySelector("button");

//var isPurple= false;

//var body=document.querySelector("body");

//if white make it purple

//if purple make it white

document.body.style.background="purple"


//button.addEventListener("click", function(){

//if(isPurple){

// body.style.background="white";

//}else {

//body.style.background="purple";

// }

//isPurple=!isPurple;

//});



   button.addEventlistener("click", function(){

   document.body.classList.toggle("purple");

  });

  // does not work?
