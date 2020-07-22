class Block2{
  constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          restitution:0.8,
          friction:1.0,
          density:1.0,
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    score(){
      if(this.visibility<0 && this.visibility>-1005){
        score++
      }
    }

    display(){
      if(this.body.speed<3){
      var angle = this.body.angle;
      push();
      fill("lightGreen");
      strokeWeight(10);
      stroke("darkGreen");
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
      }

      else {
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        pop();
      }
    }
}