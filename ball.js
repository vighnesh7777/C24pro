class Ball {
    constructor(x, y,width,height) {
      var options = {
          'density':1,
          'friction':5,
          'restitution':0.7
      }
      this.body = Bodies.circle(610, 370, 80, options);
      this.radius =80;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y)
      ellipseMode(CENTER);
      fill("pink");
      stroke("white");
      strokeWeight(0.5);
      ellipse(0, 0, this.radius);
      pop();
    }
  };