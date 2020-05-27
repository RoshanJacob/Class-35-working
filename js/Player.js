class Player{
    constructor(){

    }
    getCount(){
        var playerCountRef = database.ref("playerCounts");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).update({
            name:name
        })
    }
}