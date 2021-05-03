class Player {
    constructor() {
                    this.name = null;
                    this.distance = 0;
                    this.index = null;
                  }
    getCount() {
        var dbref = database.ref("playerCount");
        dbref.on("value", function (data) {
            playerCount = data.val()
        })
    }
    updateCount(count) {
        database.ref("/").update({ playerCount: count })
    }
    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({Name: this.name, Distance:this.distance})

    }
    static getPlayerInfo()
    {
     var plyrref = database.ref("players")  
     plyrref.on("value",(data)=>{
         allplayers = data.val()
     }) 
    }

}
