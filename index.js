var n1= Math.random()*6 + 1;
var randNum1= Math.floor(n1);
var path1="images/dice"+randNum1+".png";

document.querySelector(".img1").src=path1;

var n2= Math.random()*6 + 1;
var randNum2= Math.floor(n2);
var path2="images/dice"+randNum2+".png";

document.querySelector(".img2").src=path2;

if(randNum1 > randNum2)
 var result="Player 1 wins!!";

else if(randNum1 == randNum2)
 result="It's a draw, try again!!";

else
 result="Player 2 wins!!";

document.querySelector("#heading").innerHTML=result;
