const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points")
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type")
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("comupter-player-field")
    },
    actions: {
        button: document.getElementById("next-duel"),
    }
};


const pathImages = ".src/assets/icons/";

const cardData = [
    {
        id:0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        winOf: [1],
        loseOf: [2]
    },
    {
        id:1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        winOf: [2],
        loseOf: [0]
    },
    {
        id:3,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        winOf: [0],
        loseOf: [1]
    }
]

function init() {

}

init();