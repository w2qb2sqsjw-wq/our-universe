// Typing effect

let text="Dear Nanu ❤️";

let i=0;


function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text[i];

i++;

setTimeout(typing,150);

}

}


typing();



// Relationship timer

let start=new Date("2025-02-09");


function updateTimer(){

let now=new Date();

let diff=now-start;


let days=Math.floor(diff/(1000*60*60*24));


document.getElementById("counter").innerHTML=
days+" days together ❤️";

}


updateTimer();

setInterval(updateTimer,1000);




// Floating hearts


function heart(){

let h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(15+Math.random()*25)+"px";

document.body.appendChild(h);


setTimeout(()=>{

h.remove();

},6000);

}


setInterval(heart,800);




// Button


document.getElementById("enterBtn").onclick=function(){

alert(
"Welcome to Nanu's Universe ❤️\n\nMore surprises are waiting ✨"
);

};
