const footballTeam = {
  team: "Solar City FC",
  year: 2026,
  headCoach: "María López",
  players: [
    {
      name: "Carla Mendoza",
      position: "forward",
      isCaptain: true,
    },
    {
      name: "Gabriel Torres",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Lucas Paredes",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Emma Chávez",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};
const teamElement = document.getElementById("team");
const yearElement = document.getElementById("year");
const headCoachElement = document.getElementById("head-coach");
const playerCardsElement = document.getElementById("player-cards");

teamElement.textContent = footballTeam.team;
yearElement.textContent = footballTeam.year;
headCoachElement.textContent = footballTeam.headCoach;

const filterSelect = document.getElementById("players");

function filtradoJugadores(position) {
  playerCardsElement.innerHTML = "";
  footballTeam.players.forEach((player) => {
    if (position !== "all" && player.position !== position) {
      return;
    }
    const playerCard = document.createElement("div");
    playerCard.className = "player-card";
    const playerName = document.createElement("h2");
    playerName.textContent =
      (player.isCaptain ? "(Captain) " : "") + player.name;
    const playerPosition = document.createElement("p");
    playerPosition.textContent = `Position: ${player.position}`;
    playerCard.appendChild(playerName);
    playerCard.appendChild(playerPosition);
    playerCardsElement.appendChild(playerCard);
  });
}
filtradoJugadores("all");
filterSelect.addEventListener("change", (event) => {
  filtradoJugadores(event.target.value);
});
