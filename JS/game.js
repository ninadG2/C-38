class Game {
    constructor() { }

    getState() {
        var dbref = database.ref("gameState");
        dbref.on("value", function (data) {
            gameState = data.val()
        })
    }
    updateState(state) {
        database.ref("/").update({ gameState: state })
    }

    startGame() {
        if (gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
            kar1 = createSprite(100, 200)
            kar2 = createSprite(300, 200)
            kar3 = createSprite(500, 200)
            kar4 = createSprite(700, 200)
            kars = [kar1, kar2, kar3, kar4]
        }
    }

    play() {
        form.hideForm()
        //textSize(30);
        //text("Start the Game", 120, 100)
        Player.getPlayerInfo()
        drawSprites();
        var index = 0;
        var x = 200;
        var y = height;
        if (allplayers !== undefined) {
            var displayPosition = 150;
            for (var plr in allplayers) {
                index = index + 1
                x = x + 200
                y = height - allplayers[plr].Distance
                kars[index - 1].x = x
                kars[index - 1].y = y
                if (index === player.index) {
                    kars[index - 1].shapeColor = "red"
                    camera.position.y = kars[index - 1].y;
                    camera.position.x = kars[index - 1].x;
                }
                else {
                    kars[index - 1].shapeColor = "black"

                }


            }
            if (keyIsDown(UP_ARROW) && player.index !== null) {
                player.distance += 50;
                player.update();
            }
        }

    }

}