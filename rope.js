class Rope{
    constructor(bodyA,bodyB,xOffset){
        var options={
           bodyA:bodyA,
           bodyB:bodyB,
           pointB: {x:xOffset,y:0},
           stiffness:1,
           angularStiffness:1,
           length:220
        }
        this.rope= Constraint.create(options)
        this.xOffset= xOffset
        World.add(world,this.rope)
    }

    display()
    {
        strokeWeight(2)
        stroke("white")
        var pointA= this.rope.bodyA.position
        var pointB= this.rope.bodyB.position
        line(pointA.x,pointA.y,pointB.x+ this.xOffset,pointB.y)
    }
}