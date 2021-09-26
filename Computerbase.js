class ComputerBase {
    constructor(x,y,width,height){
        var options={
            isStatic:true             
        };

       this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.Image=loadImage("assets/base2.png")

        World.add(world,this.body) 
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER)
        image(this.Image,pos.x,pos.y,this.width,this.height)
    }






}