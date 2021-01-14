class stand{
    constructor(){
    
        var options={
            isStatic:true,
        
        }
        this.body=bodies.rectangle(450,390,900,20,options);
        this.width = width ;
        this.height = height ;
        World.add(world,this.ground)
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.position.x,this.position.y);
        rotate(angle);
         rectMODE(CENTER);
         rect(0,0,this.width,this.height);
         pop();
 
    }
    }