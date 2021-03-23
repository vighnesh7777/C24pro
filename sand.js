class Sand {
    constructor(x, y,width,height) {
      var options = {
          'density':1,
          'friction':5,
          'restitution':0.01
      }
      this.body = Bodies.circle(x, 370, 10, options);
      this.radius =10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y)
      ellipseMode(CENTER);
      fill("brown");
      stroke("black");
      strokeWeight(0.1);
      ellipse(0, 0, this.radius);
      pop();
    }
  };