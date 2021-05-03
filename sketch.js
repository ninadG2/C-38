
var database;
var form, game, player;
var gameState = 0;
var playerCount = 0;
var allplayers;
var kar1, kar2, kar3, kar4;
var kars;

function setup() {
    createCanvas(windowWidth, windowHeight);


    database = firebase.database()
    game = new Game()
    game.getState()
    game.startGame()

}

function draw() {
    background("white");
    console.log("plyr count" + playerCount)
    if (playerCount === 4) {
        game.updateState(1);
    }

    if (gameState === 1) {
        game.play();
    }

}

