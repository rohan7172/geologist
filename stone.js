class Stone{
	constructor(x,y)
	{
		var options={
			restitution:0.8,
			density:12,
			friction:0.9
		}
		this.x=x;
		this.y=y;
		this.width=50;
		this.height=25;
		this.body=Bodies.rectangle(this.x, this.y, 50, 25, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push();
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("gray");
			rect(0,0,this.width,this.height);
			pop();
	}

}