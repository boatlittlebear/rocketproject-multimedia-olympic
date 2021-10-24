const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const canvas_width = canvas.width = 600;
const canvas_height = canvas.height = 600;

const playerImage = new Image();
playerImage.src = '/img/spritesheet/sprite.png'
const spritewidth = 500;
const spriteheight = 500;
let playerState = "Idle";
//const dropdown = document.getElementById("animations");
//dropdown.addEventListener('change', function(e){
    //playerState = e.target.value;
//})

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
         playerState = "Rrun";
	}
     if (event.key === 'ArrowLeft') {
        playerState = "Lrun";
        
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'ArrowRight') {
        playerState = "Idle";
	}
    if (event.key === 'ArrowLeft') {
        playerState = "Idle";
		
    }
});


let gameFrame = 0;
const staggerFrames = 6;
const spriteAnimations = [];
const animationStates = [
    {
        name: "Ljump",
        frames: 4,
    },
    {
        name: "Lrun",
        frames: 4,
    },
    {
        name: "Rjump",
        frames: 4,
    },
    {
        name: "Rrun",
        frames: 4,
    },
    {
        name: "Idle",
        frames: 4,
    }

];

animationStates.forEach((state, index) => {
    let frames = {
        location: [],
    }
    for(let i = 0; i < state.frames; i++){
        let positionX = i * spritewidth;
        let positionY = index * spriteheight;
        frames.location.push({x: positionX, y: positionY});

    }
    spriteAnimations[state.name] = frames;

});

function animate(){
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].location.length;
    let frameX = spritewidth * position;
    let frameY = spriteAnimations[playerState].location[position].y;

    ctx.drawImage(playerImage, frameX, frameY, spritewidth, spriteheight, 0, 0, canvas_width, canvas_height);
    if(gameFrame % staggerFrames == 0){
        if(frameX < 3) frameX++;
        else frameX = 0;
        
    }
 

    gameFrame++;
    requestAnimationFrame(animate);

}
animate();