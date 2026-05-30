const gameContainer = document.getElementById('game-container');

// Dummy Data
const dummyGames = [
    { title: "Game #1" },
    { title: "Game #2" },
    { title: "Game #3" }
];

function loadGames(games) {
    gameContainer.innerHTML = ''; // Clear current
    games.forEach(game => {
        const card = document.createElement('a');
        card.className = 'game-card';
        card.href = '#';
        card.innerHTML = `
            <div class="game-img"></div>
            <p>${game.title}</p>
        `;
        gameContainer.appendChild(card);
    });
}

// Initial load
loadGames(dummyGames);

/* API:
   async function fetchGames() {
       const response = await fetch('YOUR_API_ENDPOINT');
       const data = await response.json();
       loadGames(data);
   }
*/