window.onload=function(){

setTimeout(function(){

document.getElementById("loading-screen").style.display="none";

document.getElementById("main-content").style.display="flex";

},3000);

};

document.addEventListener("click",function(e){

if(e.target.id==="enterBtn"){

alert("Welcome to your universe, Nanu ❤️");

}

});
