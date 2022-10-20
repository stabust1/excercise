var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
 
var images1 = "images/dice"+ randomNumber1 +".png";
 
document.querySelector(".dice .img1").setAttribute("src",images1);