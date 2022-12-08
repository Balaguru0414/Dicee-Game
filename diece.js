
// dice 1

var randomnumber1 = Math.floor(Math.random()* 6)+1;        			// 1-6

var randomDiceImage = "images/dice"+randomnumber1+".png"; 			// dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0]; 

image1.setAttribute("src",randomDiceImage);							// <img src="images/dice1.png">  மாறி கொண்டே இருக்கும் 

 // dice 2

var randomnumber2 = Math.floor(Math.random()* 6)+1;        			    // var randomnumber2 = Math.floor(Math.random()* 6)+1;

var randomDiceImage = "images/dice"+randomnumber2+".png"; 			    // var randomDiceImage2 = "images/dice"+randomnumber2+".png";
															//  (or)  
var image2 = document.querySelectorAll("img")[1]; 						// var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage);								// image2.setAttribute("src",randomDiceImage2);


if (randomnumber1 > randomnumber2) {
	document.querySelector("h1").innerHTML = "🚩PLAYER 1 WINS!"             
	document.querySelector("h2").innerHTML = "🥳 - Wins"
	document.querySelector("h3").innerHTML = "😔"
} 

else if(randomnumber1 < randomnumber2){
	document.querySelector("h1").innerHTML = "PLAYER 2 WINS!🚩"
	document.querySelector("h3").innerHTML = "🥳 - Wins"
	document.querySelector("h2").innerHTML = "😔"	
}

else {
	document.querySelector("h1").innerHTML = "😔 DRAW 😔"
	document.querySelector("h2").innerHTML = "😔"
	document.querySelector("h3").innerHTML = "😔"
}





























