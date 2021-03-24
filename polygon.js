class Polygon{
    constructor(x,y,r){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            
        }

        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r=r;
        this.x = x;
        this.y = y;
        this.image=loadImage("polygon.png")
    }

    display(){
        var pos=this.body.position;		
		push()
		translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        imageMode(CENTER);
		ellipseMode(RADIUS)
		image(this.image, 0, 0, this.r*2, this.r*2)
		pop()   
    }

}