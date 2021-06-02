class Iron{
	constructor(x,y)
	{
		var options={
			restitution:0.8,
			density:30,
			friction:3
		}
		this.x=x;
		this.y=y;
		this.width=70;
		this.height=35;
		this.body=Bodies.rectangle(this.x, this.y, 70, 35, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push();
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("white");
			rect(0,0,this.width,this.height);
			pop();
	}

}