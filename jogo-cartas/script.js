const playerHP = document.getElementById("player-hp");
const enemyHP = document.getElementById("enemy-hp");
const playerHand = document.getElementById("player-hand");
const enemyHand = document.getElementById("enemy-hand");
const log = document.getElementById("log");

let playerLife = 30;
let enemyLife = 30;

const cards = [
  { name: "⚔️ Ataque", type: "attack", value: 5 },
  { name: "🛡️ Defesa", type: "defense", value: 3 },
  { name: "💊 Cura", type: "heal", value: 4 }
];

function drawCard(player) {
  const card = cards[Math.floor(Math.random() * cards.length)];
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.innerText = `${card.name}\n${card.value}`;
  cardElement.onclick = () => playCard(player, card, cardElement);

  if (player === "player") {
    playerHand.appendChild(cardElement);
  } else {
    enemyHand.appendChild(cardElement);
  }
}

function playCard(player, card, cardElement) {
  if (player === "player") {
    executeEffect("Jogador", "Inimigo", card);
    playerHand.removeChild(cardElement);
  } else {
    executeEffect("Inimigo", "Jogador", card);
    enemyHand.removeChild(cardElement);
  }
  updateHP();
  checkWinner();
}

function executeEffect(source, target, card) {
  if (card.type === "attack") {
    if (target === "Inimigo") {
      enemyLife -= card.value;
    } else {
      playerLife -= card.value;
    }
    logMessage(`${source} usou ${card.name} e causou ${card.value} de dano!`);
  }
  if (card.type === "heal") {
    if (source === "Jogador") {
      playerLife += card.value;
    } else {
      enemyLife += card.value;
    }
    logMessage(`${source} recuperou ${card.value} de vida com ${card.name}!`);
  }
  if (card.type === "defense") {
    logMessage(`${source} se defendeu! (reduz próximo ataque em ${card.value})`);
    // Para simplificar: defesa só loga a ação.
  }
}

function enemyPlay() {
  drawCard("enemy");
  if (enemyHand.children.length > 0) {
    const card = enemyHand.children[0];
    card.click();
  }
}

function updateHP() {
  playerHP.innerText = playerLife;
  enemyHP.innerText = enemyLife;
}

function checkWinner() {
  if (playerLife <= 0) {
    alert("Você perdeu! 🤖 venceu.");
    resetGame();
  }
  if (enemyLife <= 0) {
    alert("Parabéns! Você venceu! 🎉");
    resetGame();
  }
}

function resetGame() {
  playerLife = 30;
  enemyLife = 30;
  updateHP();
  playerHand.innerHTML = "";
  enemyHand.innerHTML = "";
  log.innerHTML = "";
}

function logMessage(message) {
  log.innerHTML += `<p>${message}</p>`;
  log.scrollTop = log.scrollHeight;
}
