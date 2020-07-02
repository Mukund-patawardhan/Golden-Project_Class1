class Game{
    constructor(){
        form=new Form();
        this.player=createSprite(windowWidth/2,windowHeight/2,100,100);
        this.g=new Garbage();
    }

    form(){
        form.display();
        
    }

    game(){
        //camera.x=this.player.x;
        //camera.y=this.player.y;

        drawSprites();
    }
    move(posX,posY){
        this.player.x+=posX;
        this.player.y+=posY
    }
}