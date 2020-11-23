class thief{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("images/thief clip art.jpg");
        
      }
      display(){
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
      }

/*if(keyDown(UP_ARROW)){
            this.body.velocityY=-2
          }
          
          if(keyDown(DOWN_ARROW)){
            this.body.velocityY=2
          }
          
          if(keyDown(LEFT_ARROW)){
            this.body.velocityX=-2
          }
          
          if(keyDown(RIGHT_ARROW)){
            this.body.velocityX=2
          }*/

      }
