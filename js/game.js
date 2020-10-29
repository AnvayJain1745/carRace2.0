class Game{
    constructor(){

    }
    getState(){
        var gameStateref=database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    start(){
        if(gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
        car1=createSprite(500,100)
        car2=createSprite(600,100)
        car3=createSprite(700,100)
        car4=createSprite(800,100)
        car1.addImage("car1",car1Image)
        car2.addImage("car2",car2Image)
        car3.addImage("car3",car3Image)
        car4.addImage("car4",car4Image)
        cars=[car1,car2,car3,car4];
    }
    play(){
        form.hide();
        
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            background("brown");
            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
            var x=140
            var y
           
            for(var plr in allPlayers){
                index=index+1
                x=x+250
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;

                if(index===player.index){
                    cars[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y   
                } 
            }

        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=50
            player.update()
            
        }
        if(player.distance>4200){
            gameState=2;
        }
        drawSprites();
    }
    end(){
        console.log("game has ENDED,see you in next race")
    }

}