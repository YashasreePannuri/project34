class Bob{
    constructor(x,y){
        var options={
            restitution:1,
            friction:0.3,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity
        }
        this.body= Bodies.circle(x,y,30,options)
        this.x = x
        this.y = y
        World.add(world,this.body)
    }

    display()
    {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("white");
        strokeWeight(3);
        //fill(128, 255, 212);
        fill(179, 179, 179);
        ellipse(0,0,60,60);
        pop();
    }
}