//Step 3
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//Step 4
var randomImg1 = "images/dice" + randomNumber1 + ".png";

document.querySelector("img.img1").setAttribute("src", randomImg1);

/**********************************************************************/

//Step 5
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImg2 = "images/dice" + randomNumber2 + ".png";

document.querySelector("img.img2").setAttribute("src", randomImg2);

/**********************************************************************/

//Step 6
//If player 1 wins
  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Play 1 Wins!"
  } 

//If player 2 wins
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
  }

//If there is a draw
  else {
    document.querySelector("h1").textContent = "Draw!"
  }
