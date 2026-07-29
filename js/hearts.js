function createHeart(){

let heart=document.createElement("div");


heart.className="heart";

heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"vw";


heart.style.fontSize=
(15+Math.random()*20)+"px";


heart.style.animationDuration=
(4+Math.random()*4)+"s";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},8000);


}


setInterval(createHeart,900);
