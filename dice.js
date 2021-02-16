var randomNumber1;
randomNumber1=Math.floor(Math.random()*6)+1;       //1-6
var randomDiceImage="dice"+randomNumber1+".png";   //dice1.png-dice6.png
var randomeImageSrc="images/"+ randomDiceImage;  //images
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomeImageSrc);


var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSrc2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSrc2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 win";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 win🚩";
}
else
{
  document.querySelector("h1").innerHTML="🚩Its a tie🚩";
}
