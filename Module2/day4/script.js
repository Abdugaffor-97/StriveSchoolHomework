document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generate");

    teamName = document.getElementById("team-name");
    teamBtn = document.getElementById("team-add-btn");

    playerName = document.getElementById("player-name");
    playerBtn = document.getElementById("player-add-btn");

    let countTeam = 0;
    let teams = [];
    teamBtn.addEventListener("click", function () {
        teamsContainer = document.querySelector(".teams");
        teamsContainer.innerHTML += `<div id="${countTeam}" class="team col-6 col-lg-3">${teamName.value}</div>`;
        countTeam += 1;
        teamName.value = "";
        teams.push(teamName.value);
    });

    playerBtn.addEventListener("click", function () {
        listOfPlayes = document.querySelector("#list-of-players");
        listOfPlayes.innerHTML += `<li>${playerName.value}</li>`;
        playerName.value = "";
    });

    generateBtn.addEventListener("click", function () {
        const shuffleArray = function (array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        // console.log(players);

        const teams = document.querySelectorAll(".team");
        // console.log(teams);
        const playersLi = document.querySelectorAll("li");
        let players = [];
        playersLi.forEach((player) => {
            players.push(player.innerHTML);
        });

        players = shuffleArray(players);

        let k = 0;
        while (players.length > 0) {
            teams[k].innerHTML += `<li>${players.pop()}</li>`;
            k += 1;
            if (k === teams.length) {
                k = 0;
            }
        }
    });
});
