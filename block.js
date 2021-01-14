class block{
    constructor(x,y,width,height){
    
        var options={
            restitution:0.4,
            friction:1.0,
            
        }
        this.body=bodies.rectangle(x,y,width,height,options);
        this.width = width ;
        this.height = height ;
        World.add(world,this.body)
    }
    display(){
       var angle = this.body.angle;
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
        rectMODE(CENTER);
        fill(128,128,128);
        rect(0,0,this.width,this.height);
        pop();

    }
    }