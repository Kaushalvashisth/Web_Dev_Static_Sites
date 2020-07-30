//alert("kaam kar rha h");
var Player1=prompt("ENTER PLAYER1 NAME--->");
var Player2=prompt("ENTER PLAYER2 NAME--->");
//set name
document.querySelectorAll("p")[0].innerHTML=Player1;
document.querySelectorAll("p")[1].innerHTML=Player2;

var randomNumber1=Math.floor(Math.random()*6)+1;
//generate images
var randomDiceImage="images/"+"dice"+randomNumber1+".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
//generate images
var randomDiceImage2="images/"+"dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2){
	document.querySelector("h1").innerHTML="🥇"+Player1+" Wins";
}
else if(randomNumber2>randomNumber1){
	document.querySelector("h1").innerHTML= Player2+" Wins🥇";
}
else{
	document.querySelector("h1").innerHTML="DRAW!!";
}
