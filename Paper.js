class Paper{
    constructor(x,y,width,height,options){
    var options = {
        isStatic:false, 
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = ellipse(x, y, width, height, options);
    this.width = width;
    this.height = height;
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
 