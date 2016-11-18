var c = document.getElementById('c'),
		ctx = c.getContext('2d'),
		height = window.innerHeight,
		width = window.innerWidth,
		stars = [],
		size = 6,
    color = '255,255,255',
    maxStars = 1000;

c.width  = width;
c.height = height;

function star() {
	this.size         = Math.random() * 2;
	this.x            = Math.random() * 1 * width;
	this.y            = Math.random() * 1 * height;
	this.transparency = 0.0;
	this.speed        = Math.random() / 4;
  this.direction    = 1;
}

star.prototype.update = function() {
	ctx.fillStyle = 'rgba('+color+','+this.transparency+')';
	ctx.fillRect(this.x, this.y, this.size, this.size);
	if (this.transparency >= 1) {
		this.direction = -1;
	} else if (this.transparency <= 0) {
    this.direction = 1;
  }
  if (this.direction == 1) {
	  this.transparency += (0.05 * this.speed);
  } else {
	  this.transparency -= (0.05 * this.speed);
  }
	ctx.stroke();
}

function draw() {
	ctx.clearRect(0, 0, width, height);
  for(var i=0;i<maxStars;i++) {
	  stars[i].update();
  }
	window.requestAnimationFrame(draw);
}

function init() {
  for(var i=0;i<maxStars;i++) {
    var l = new star();
    stars.push(l);
  }
	window.requestAnimationFrame(draw);
}

init();
