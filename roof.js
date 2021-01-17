class Roof{
  constructor(){
      var options={
          isStatic:true
      }
      this.body= Bodies.rectangle(windowWidth/2,100,500,50,options)
      this.width=400
      this.height=25
      World.add(world,this.body)
  }

  display()
  {
      //fill(255, 51, 255)
      fill(64, 64, 64);
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
  }
}