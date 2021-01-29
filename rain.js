class Rain{
    constructor(x,y,width,height){
        var options={
            'friction' : 0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var maxdrops =100
        for(var i = 0; i<maxdrops; i++){
            this.body.push(new createBody(random(0,400),random(0,400)))
            pop();
        }
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0.400),y:random(0,400)})
        }
    }

}