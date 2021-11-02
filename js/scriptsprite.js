
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


const playerImage = new Image();
playerImage.src = '/img/spritesheet/sprite.png'
const spritewidth = 500;
const spriteheight = 500;

const canvas_width = canvas.width = 600;
const canvas_height = canvas.height = 600;




let playerState = "Idle";
/*const dropdown = document.getElementById("animations");
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})*/

let scroller = document.querySelector("#slider");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", event => {
  output.textContent = `scrollLeft: ${scroller.scrollLeft}`;
  document.body.style.setProperty("--left", scroller.scrollLeft);
});

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

scroller.onscroll = function() {
	if (scroller.scrollLeft <= barrier_1.offsetLeft - barrier_1.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 2) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
    }
    
    if (scroller.scrollLeft >= barrier_1.offsetLeft - barrier_1.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 3) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }

    if (scroller.scrollLeft >= barrier_1.offsetLeft + barrier_1.offsetWidth + barrier_1.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 2) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
    }

	if (scroller.scrollLeft >= barrier_2.offsetLeft - barrier_2.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 3) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_2.offsetLeft + barrier_2.offsetWidth + barrier_2.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 2) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}

	if (scroller.scrollLeft >= barrier_3.offsetLeft - barrier_3.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 4) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_3.offsetLeft + barrier_3.offsetWidth + barrier_3.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 3) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_4.offsetLeft - barrier_4.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 4) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_4.offsetLeft + barrier_4.offsetWidth + barrier_4.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 3) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_5.offsetLeft - barrier_5.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 4) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_5.offsetLeft + barrier_5.offsetWidth + barrier_5.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 3) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}

	if (scroller.scrollLeft >= barrier_6.offsetLeft - barrier_6.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 5) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_6.offsetLeft + barrier_6.offsetWidth + barrier_6.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 4) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_7.offsetLeft - barrier_7.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 5) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_7.offsetLeft + barrier_7.offsetWidth + barrier_7.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 4) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_8.offsetLeft - barrier_8.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 5) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_8.offsetLeft + barrier_8.offsetWidth + barrier_8.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 4) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}

	if (scroller.scrollLeft >= barrier_9.offsetLeft - barrier_9.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 6) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_9.offsetLeft + barrier_9.offsetWidth + barrier_9.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 5) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_10.offsetLeft - barrier_10.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 6) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_10.offsetLeft + barrier_10.offsetWidth + barrier_10.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 5) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_11.offsetLeft - barrier_11.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 6) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_11.offsetLeft + barrier_11.offsetWidth + barrier_11.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 5) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}

	if (scroller.scrollLeft >= barrier_12.offsetLeft - barrier_12.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 7) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_12.offsetLeft + barrier_12.offsetWidth + barrier_12.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 6) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_13.offsetLeft - barrier_13.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 7) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_13.offsetLeft + barrier_13.offsetWidth + barrier_13.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 6) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_14.offsetLeft - barrier_14.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 7) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_14.offsetLeft + barrier_14.offsetWidth + barrier_14.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 6) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}

	if (scroller.scrollLeft >= barrier_15.offsetLeft - barrier_15.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 8) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_15.offsetLeft + barrier_15.offsetWidth + barrier_15.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 7) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_16.offsetLeft - barrier_16.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 8) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_16.offsetLeft + barrier_16.offsetWidth + barrier_16.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 7) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}

	if (scroller.scrollLeft >= barrier_17.offsetLeft - barrier_17.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 9) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_17.offsetLeft + barrier_17.offsetWidth + barrier_17.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 8) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_18.offsetLeft - barrier_18.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 9) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_18.offsetLeft + barrier_18.offsetWidth + barrier_18.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 8) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_19.offsetLeft - barrier_19.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 9) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_19.offsetLeft + barrier_19.offsetWidth + barrier_19.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 8) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}

	if (scroller.scrollLeft >= barrier_20.offsetLeft - barrier_20.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 10) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_20.offsetLeft + barrier_20.offsetWidth + barrier_20.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 9) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_21.offsetLeft - barrier_21.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 10) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_21.offsetLeft + barrier_21.offsetWidth + barrier_21.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 9) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_22.offsetLeft - barrier_22.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 10) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_22.offsetLeft + barrier_22.offsetWidth + barrier_22.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 9) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}

	
	if (scroller.scrollLeft >= barrier_23.offsetLeft - barrier_23.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 11) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_23.offsetLeft + barrier_23.offsetWidth + barrier_23.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 10) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_24.offsetLeft - barrier_24.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 11) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_24.offsetLeft + barrier_24.offsetWidth + barrier_24.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 10) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_25.offsetLeft - barrier_25.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 11) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_25.offsetLeft + barrier_25.offsetWidth + barrier_25.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 10) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}

	if (scroller.scrollLeft >= barrier_26.offsetLeft - barrier_26.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 12) {
        canvas1.style.bottom = "4rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_26.offsetLeft + barrier_26.offsetWidth + barrier_26.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 11) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump"
	}
	if (scroller.scrollLeft >= barrier_27.offsetLeft - barrier_27.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 12) {
        canvas1.style.bottom = "8rem";
        //playerState = "Rjump"
    }
    if (scroller.scrollLeft >= barrier_27.offsetLeft + barrier_27.offsetWidth + barrier_27.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 11) {
        canvas1.style.bottom = "3rem";
        //playerState = "Rjump" 
	}

    if (scroller.scrollLeft >= barrier_28.offsetLeft - barrier_28.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 14) {
        showtext.style.opacity = "100%";
        showtext.innerHTML = "และนี่คือการแข่งขันกีฬาที่ยิ่งใหญ่ที่สุดของมวลมนุษยชาติ !!!";
        showtext.style.transform = "scale(2)";
        moon.style.top = "5%";
        barrier_28.style.backgroundImage = "url('https://media.discordapp.net/attachments/871977129376616459/902274631287853066/torchstand.gif?width=798&height=676')";
        snd.play();
        //playerState = "Rjump"
    }

    else{
        snd.currentTime = 0; 
        snd.pause(); 
        //playerState = "Rrun"
    }
}

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

window.addEventListener("wheel", function(e) {
    var dir = Math.sign(e.deltaY);
    if (dir > 0){
        playerState = "Rrun"

    }
    if (dir < 0) {
        playerState = "Lrun";

    }
    if(dir = 0){
        playerState = "Idle"
    }
});