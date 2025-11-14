var randomNum1 = Math.floor(Math.random() * 6) + 1;
var random1src = "./images/dice" + randomNum1 + ".png";
document.querySelector(".img1").setAttribute("src", random1src);
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var random2src = "./images/dice" + randomNum2 + ".png";
document.querySelector(".img2").setAttribute("src", random2src);
if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "🏁Player 1 wins!";
} else if (randomNum1 < randomNum2) {
  document.querySelector("h1").innerHTML = "🏁Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "🏳️Draw!";
}
