// Typing

let text="Dear Nanu ❤️";

let index=0;


function type(){

if(index < text.length){

document.getElementById("typing").innerHTML += text[index];

index++;

setTimeout(type,150);

}

}


type();



// Relationship timer

function timer(){

let start=new Date("February 9, 2025");

let today=new Date();

let difference=today-start;


let days=Math.floor(
difference/(1000*60*60*24)
);


document.getElementById("counter").innerHTML =
days+" days together ❤️";

}


timer();

setInterval(timer,60000);



// Button

document.getElementById("enterBtn").onclick=function(){

alert(
"Welcome to Nanu's Universe ❤️"
);

};
