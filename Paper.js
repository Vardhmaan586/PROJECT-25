class Paper{
  constructor(x,y,width,height){

      var options = {
         isStatic : false,
          restitution:0.3,
          friction:0.9,
         density:0.5,
      }
      this.image = loadImage("PaperImage.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
  }
  
  display(){
  
     push();
     var pos = this.body.position;
     imageMode(CENTER);
     image(this.image,pos.x,pos.y+17,this.width,this.height);                                                    
     pop();
  
  }
}