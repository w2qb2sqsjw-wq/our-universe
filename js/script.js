// Typing animation

const text = "Dear Nanu ❤️";

let index = 0;


function type(){

if(index < text.length){

document.getElementById("typing").innerHTML += text[index];

index++;

setTimeout(type,150);

}

}


type();




// Relationship counter

function updateCounter(){


const startDate = new Date("February 9, 2025");


const today = new Date();


const difference = today - startDate;


const days = Math.floor(
difference / (1000 * 60 * 60 * 24)
);



document.getElementById("counter").innerHTML =
days + " days together ❤️";


}


updateCounter();


setInterval(updateCounter,60000);




// Button

document.getElementById("enterBtn").onclick=function(){

alert(
"Welcome to Nanu's Universe ❤️\n\nMore surprises are coming ✨"
);

};
