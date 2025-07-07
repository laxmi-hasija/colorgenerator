let generatecolor= function(){
let red=Math.floor(Math.random()*255);
let green= Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
let color=`rgb(${red},${green},${blue})`;
return color;
}
let btn=document.querySelector("button");
btn.addEventListener("click", function(){
  let h3= document.querySelector("h3");
  let div=document.querySelector("div");
  let randomcolor=generatecolor();
  h3.innerText=randomcolor;
  div.style.backgroundColor=randomcolor;
});





