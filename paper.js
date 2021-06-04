class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          friction:1.2,
          density:1.2 
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.width = radius*2;
      this.height = radius*2;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };
