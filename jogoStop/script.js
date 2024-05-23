let players = [];

function addPlayer() {
    const playerNameInput = document.getElementById("player-name");
    const playerName = playerNameInput.value.trim();
    
    if (playerName !== "") {
        players.push(playerName);
        playerNameInput.value = "";
        renderPlayerList();
    }
}

function renderPlayerList() {
    const playerListElement = document.getElementById("player-list");
    playerListElement.innerHTML = "";
    players.forEach(player => {
        const li = document.createElement("li");
        li.textContent = player;
        playerListElement.appendChild(li);
    });
}

function startGame() {
    const letterDisplay = document.getElementById("letter-display");
    const categories = document.querySelectorAll("#categories-section input[type='checkbox']:checked");
    
    if (categories.length === 0) {
        alert("Please select at least one category!");
        return;
    }
    
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    letterDisplay.textContent = `Letter: ${randomLetter}`;

    // Start Timer
    let timeLeft = 90;
    const timerElement = document.getElementById("timer");
    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "Time's up!";
            // Implement logic for ending the game
        } else {
            timerElement.textContent = `Time Left: ${timeLeft} seconds`;
            timeLeft--;
        }
    }, 1000);
}
