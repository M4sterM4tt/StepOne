
// Step One
// The Player Ball changes it's position because the player tilts the device. NEED TO REFRENCE THIS (https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation)


// Canvas Variables 
var canvas; 
var body;
var time;

// Image Variables
var Level; 
var playerImages;


// Location Variables
var playerImagesX;
var playerImagesY;




window.onload = function() {
	
	// Canvas and Graphics context
	canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	
	body = canvas.getContext("2d");
	time = 1;
	
	
	// Images and variables for Images
	Level = [document.getElementById("levelBase"), document.getElementById("levelOne"), document.getElementById("levelTwo"), document.getElementById("levelThree"), document.getElementById("levelFour"), document.getElementById("levelFive")];
	playerImages = [document.getElementById("playerGoal"), document.getElementById("playerBall")];
	
	
	// Location Variables
	playerImagesX = [0,100]
	playerImagesY = [0,100]
	
	
	body.beginPath();	
	body.clearRect(0,0,canvas.width,canvas.height);
	body.drawImage(Level[0],0,0,body.width,body.height);
	
	body.beginPath();
	body.drawImage(playerImages[1],playerImagesX[1],playerImagesY[1],body.width/20,body.width/20);
	
	window.setInterval(render,time);
	render();	
}




function render(event) {
	playerImagesX[0] = event.beta;  // In degree in the range [-180,180]
	playerImagesY[0] = event.gamma; // In degree in the range [-90,90]

	// Because we don't want to have the device upside down
	// We constrain the x value to the range [-90,90]
	if (x >  90) { x =  90};
	if (x < -90) { x = -90};

	// To make computation easier we shift the range of x and y to [0,180]
	x += 90;
	y += 90;
	
	body.beginPath();
	body.clearRect(0,0,canvas.width,canvas.height);
	body.drawImage(Level[0],0,0,body.width,body.height);
	
	body.beginPath();
	body.drawImage(playerImages[1],playerImagesX[1],playerImagesY[1],body.width/20,body.width/20);
}

window.addEventListener('deviceorientation', handleOrientation);






