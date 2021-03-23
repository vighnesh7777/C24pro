class Plane {
    constructor(x, y,width,height)
    {
        var option={
        'restitution':-4,
        'friction':-5,
        'density':0,
        isStatic:true
        }
      this.body = Bodies.rectangle(x,y,width,height,option);
      this.width =width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //push();
      translate(pos.x, pos.y)
      rectMode(CENTER);
      fill("black");
      rect(0, 0, this.width, this.height);
      //pop();
    }
  };