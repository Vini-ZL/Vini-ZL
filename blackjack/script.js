let deck = [];
let playerHand = [];
let dealerHand = [];

function createDeck() {
  const suits = ["♠️", "♥️", "♦️", "♣️"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ value, suit });
    }
  }
}

function getCardValue(card) {
  if (["J", "Q", "K"].includes(card.value)) return 10;
  if (card.value === "A") return 11;
  return parseInt(card.value);
}

function calculatePoints(hand) {
  let points = 0;
  let aces = 0;
  for (let card of hand) {
    points += getCardValue(card);
    if (card.value === "A") aces++;
  }
  // Ajustar Ás para evitar estourar
  while (points > 21 && aces > 0) {
    points -= 10;
    aces--;
  }
  return points;
}

function drawCard() {
  const randomIndex = Math.floor(Math.random() * deck.length);
  return deck.splice(randomIndex, 1)[0];
}

function displayCards() {
  const playerCardsDiv = document.getElementById("player-cards");
  const dealerCardsDiv = document.getElementById("dealer-cards");
  playerCardsDiv.innerHTML = "";
  dealerCardsDiv.innerHTML = "";

  playerHand.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = `${card.value}${card.suit}`;
    playerCardsDiv.appendChild(div);
  });

  dealerHand.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = `${card.value}${card.suit}`;
    dealerCardsDiv.appendChild(div);
  });

  document.getElementById("player-points").innerText = calculatePoints(playerHand);
  document.getElementById("dealer-points").innerText = calculatePoints(dealerHand);
}

function startGame() {
  createDeck();
  playerHand = [drawCard(), drawCard()];
  dealerHand = [drawCard(), drawCard()];
  document.getElementById("message").innerText = "";
  displayCards();
}

function hit() {
  playerHand.push(drawCard());
  displayCards();

  if (calculatePoints(playerHand) > 21) {
    document.getElementById("message").innerText = "💥 Você estourou! Dealer venceu.";
  }
}

function stand() {
  while (calculatePoints(dealerHand) < 17) {
    dealerHand.push(drawCard());
  }
  displayCards();

  const playerPoints = calculatePoints(playerHand);
  const dealerPoints = calculatePoints(dealerHand);

  if (dealerPoints > 21 || playerPoints > dealerPoints) {
    document.getElementById("message").innerText = "🎉 Você venceu!";
  } else if (playerPoints < dealerPoints) {
    document.getElementById("message").innerText = "🤵 Dealer venceu!";
  } else {
    document.getElementById("message").innerText = "😐 Empate!";
  }
}
