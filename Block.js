class Block{
  constructor(x, y, width, height) {

      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.visibility=255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.block_img=loadImage("block.png")
    }
    display(){
      var pos= this.body.position;
      var angle= this.body.angle;
push ();
     translate (pos.x,pos.y)
    rotate (angle)
      if(this.body.speed<3){
        imageMode(CENTER);
        image(this.block_img,0,0,this.width, this.height);
      }

      else{
        World.remove(world,this.body)
        this.visibility=this.visibility-5
        tint (255,this.visibility)
        image(this.block_img,0,0,this.width,this.height);
      }
pop ();
     
      
    }
}