class dustbin{
    constructor(x,y,width,height){
    var options = {
        isStatic:true
    }
    
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.image = loadImage("dustbinImage.png");
    World.add(world,this.body) 
    
    }
    display(){
    push();
    fill("red")
    stroke("red")
    imageMode(BOTTOM)
    image(this.image,550,475,200,200);
    pop();
    }
    }