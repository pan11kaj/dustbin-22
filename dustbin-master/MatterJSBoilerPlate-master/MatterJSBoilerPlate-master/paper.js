class Paper {
    constructor() {
      var options = {
          isStatic:false,
          'restitution':1,
          'friction':0.6,
          'density':2.3
          
      }
      
      this.body = Bodies.rectangle(100, 100, 50,70, options);
      this.image = loadImage("paper.png");
      
      this.x = 100;
      this.y = 100;
      this.width = 50;
      this.height = 70;
      World.add(world, this.body);
    }
    display(){
     imageMode(CENTER);
    translate(this.body.position.x,this.body.position.y);


      
      image(this.image,0,0,70,70);

      

     
      
    }
  };    