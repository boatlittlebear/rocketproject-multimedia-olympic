
let scroller = document.querySelector("#slider");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", event => {
  output.textContent = `scrollLeft: ${barrier_2.offsetLeft + barrier_2.offsetWidth + barrier_2.offsetWidth/2 - window.innerWidth/2 + window.innerWidth}`;
});


scroller.addEventListener("scroll", event => {
	if (scroller.scrollLeft >= barrier_1.offsetLeft - barrier_1.offsetWidth/2 - window.innerWidth/2) {
		athlete.style.bottom = "11rem";
	}
	else {
		athlete.style.bottom = "1.5rem";
	}
	if (scroller.scrollLeft >= barrier_1.offsetLeft + barrier_1.offsetWidth + barrier_1.offsetWidth/2 - window.innerWidth/2) {
		athlete.style.bottom = "1.5rem";
	}
});

scroller.addEventListener("scroll", event => {
	if (scroller.scrollLeft >= barrier_2.offsetLeft - barrier_2.offsetWidth/2 - window.innerWidth/2 + window.innerWidth) {
		athlete.style.bottom = "11rem";
	}
	else {
		athlete.style.bottom = "1.5rem";
	}
	if (scroller.scrollLeft >= barrier_2.offsetLeft + barrier_2.offsetWidth + barrier_2.offsetWidth/2 - window.innerWidth/2 + window.innerWidth) {
		athlete.style.bottom = "1.5rem";
	}
});

scroller.addEventListener("scroll", event => {
	if (scroller.scrollLeft >= barrier_3.offsetLeft - barrier_3.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 2) {
		athlete.style.bottom = "11rem";
	}
	else {
		athlete.style.bottom = "1.5rem";
	}
	if (scroller.scrollLeft >= barrier_3.offsetLeft + barrier_3.offsetWidth + barrier_3.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 2) {
		athlete.style.bottom = "1.5rem";
	}
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        athlete.style.backgroundImage = "url('https://media.discordapp.net/attachments/871977129376616459/886628120113844254/image2_1.gif')";
    }
    if (event.key === 'ArrowLeft') {
        athlete.style.backgroundImage = "url('https://media.discordapp.net/attachments/871977129376616459/894723788846030878/ezgif.com-gif-maker.gif')";
    }
});