/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = cardGenerator();
function cardGenerator() {
  const numPalo = Math.round(Math.random() * 3) + 1;
  let palo = "";
  switch (numPalo) {
    case 1:
      palo = "♥";
      break;
    case 2:
      palo = "♦";
      break;
    case 3:
      palo = "♠";
      break;
    case 4:
      palo = "♣";
      break;
    default:
      null;
  }
  let cardNum = Math.round(Math.random() * 12) + 1;
  if (cardNum <= 10 && cardNum != 1) {
  } else if (cardNum == 11) {
    cardNum = "J";
  } else if (cardNum == 12) {
    cardNum = "Q";
  } else if (cardNum == 13) {
    cardNum = "K";
  } else if (cardNum == 1) {
    cardNum = "A";
  }
  const cardValue = document.getElementById("cardValue");
  const topSuit = document.getElementById("topSuit");
  const botSuit = document.getElementById("bottomSuit");
  cardValue.innerHTML = cardNum;
  if (palo == "♥" || palo == "♦") {
    topSuit.setAttribute("class", "red ms-2");
    botSuit.setAttribute("class", "red ms-auto me-2");
    topSuit.innerHTML = palo;
    botSuit.innerHTML = palo;
  } else {
    topSuit.setAttribute("class", "ms-2");
    botSuit.setAttribute("class", "ms-auto me-2");
    topSuit.innerHTML = palo;
    botSuit.innerHTML = palo;
  }
}
const newCard = document.getElementById("newCard");
newCard.addEventListener("click", cardGenerator);
