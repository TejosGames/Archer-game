class ComputerArcher{

    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w=w;
        this.h=h;
        this.image=loadImage("assets/computerArcher.png")
        Matter.Body.setAngle(this.body,PI/2)
    }
display(){
    var pos=this.body.position;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y)
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h)
    pop();
}
}