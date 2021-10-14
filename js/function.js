let scroller = document.querySelector("#slider");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", event => {
  output.textContent = `scrollLeft: ${scroller.scrollLeft}`;
  document.body.style.setProperty("--left", scroller.scrollLeft);
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        athlete.style.backgroundImage = "url('https://media.discordapp.net/attachments/871977129376616459/886628120113844254/image2_1.gif')";
	}
    if (event.key === 'ArrowLeft') {
        athlete.style.backgroundImage = "url('https://media.discordapp.net/attachments/871977129376616459/894723788846030878/ezgif.com-gif-maker.gif')";
    }
});

scroller.onscroll = function() {
	if (scroller.scrollLeft <= barrier_1.offsetLeft - barrier_1.offsetWidth/2 - window.innerWidth/2) {
		athlete.style.bottom = "2.5rem";
	}
	if (scroller.scrollLeft >= barrier_1.offsetLeft - barrier_1.offsetWidth/2 - window.innerWidth/2) {
		athlete.style.bottom = "8rem";
	}
	if (scroller.scrollLeft >= barrier_1.offsetLeft + barrier_1.offsetWidth + barrier_1.offsetWidth/2 - window.innerWidth/2) {
		athlete.style.bottom = "2.5rem";
	}
	if (scroller.scrollLeft >= barrier_2.offsetLeft - barrier_2.offsetWidth/2 - window.innerWidth/2 + window.innerWidth) {
		athlete.style.bottom = "8rem";
	}
	if (scroller.scrollLeft >= barrier_2.offsetLeft + barrier_2.offsetWidth + barrier_2.offsetWidth/2 - window.innerWidth/2 + window.innerWidth) {
		athlete.style.bottom = "2.5rem";
	}
	if (scroller.scrollLeft >= barrier_3.offsetLeft - barrier_3.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 2) {
		athlete.style.bottom = "8rem";
	}
	if (scroller.scrollLeft >= barrier_3.offsetLeft + barrier_3.offsetWidth + barrier_3.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 2) {
		athlete.style.bottom = "2.5rem";
	}
}


var summerHost = [
    ``, //ปี
	``, //ปี(เหตุการณ์สำคัญ)
	``,
	``,
	``,
	``,
	``,
	``,
	``,
	``
]

var summerDescription = [
    ``, //รายละเอียดของแต่ล่ะปี
	``,	//เหตุการณสำคัญ
	``,
	``,
	``,
	``,
	``,
	``,
	``,
	``
]


var winterHost = [
    ``,
	``,
	``,
	``,
	``,
	``,
	``,
	``,
	``,
	``
]

var winterDescription = [
    ``,
	``,
	``,
	``,
	``,
	``,
	``,
	``,
	``,
	``
]


function summer() {
	main.dataset.main = "summer";
	
	page1.dataset.season = "s-1896";
	header1.dataset.header = "s-1896";
	description1.dataset.description = "s-1896";
	header1.innerHTML = summerHost[0];
	description1.innerHTML = summerDescription[0];

	page2.dataset.season = "h-1896";
	header2.dataset.header = "h-1896";
	description2.dataset.description = "h-1896";
	header2.innerHTML = summerHost[1];
	description2.innerHTML = summerDescription[1];
	

	page3.dataset.season = "s-1900";
	header3.dataset.header = "s-1900";
	description3.dataset.description = "s-1900";
	header3.innerHTML = summerHost[2];
	description3.innerHTML = summerDescription[2];
	

	page4.dataset.season = "h-1900";
	header4.dataset.header = "h-1900";
	description4.dataset.description = "h-1900";
	header4.innerHTML = summerHost[3];
	description4.innerHTML = summerDescription[3];
	

	page5.dataset.season = "s-1948";
	header5.dataset.header = "s-1948";
	description5.dataset.description = "s-1948";
	header5.innerHTML = summerHost[4];
	description5.innerHTML = summerDescription[4];
	

	page6.dataset.season = "h-1948";
	header6.dataset.header = "h-1948";
	description6.dataset.description = "h-1948";
	header6.innerHTML = summerHost[5];
	description6.innerHTML = summerDescription[5];
	

	page7.dataset.season = "s-2000";
	header7.dataset.header = "s-2000";
	description7.dataset.description = "s-2000";
	header7.innerHTML = summerHost[6];
	description7.innerHTML = summerDescription[6];
	

	page8.dataset.season = "h-2000";
	header8.dataset.header = "h-2000";
	description8.dataset.description = "h-2000";
	header8.innerHTML = summerHost[7];
	description8.innerHTML = summerDescription[7];
	

	page9.dataset.season = "s-2020";
	header9.dataset.header = "s-2020";
	description9.dataset.description = "s-2020";
	header9.innerHTML = summerHost[8];
	description9.innerHTML = summerDescription[8];
	
	
	page10.dataset.season = "h-2020";
	header10.dataset.header = "h-2020";
	description10.dataset.description = "h-2020";
	header10.innerHTML = summerHost[9];
	description10.innerHTML = summerDescription[9];
	
}

function winter() {
	main.dataset.main = "winter";
	
	page1.dataset.season = "s-1896";
	header1.dataset.header = "s-1896";
	description1.dataset.description = "s-1896";
	header1.innerHTML = winterHost[0];
	description1.innerHTML = winterDescription[0];

	page2.dataset.season = "h-1896";
	header2.dataset.header = "h-1896";
	description2.dataset.description = "h-1896";
	header2.innerHTML = winterHost[1];
	description2.innerHTML = winterDescription[1];
	

	page3.dataset.season = "s-1900";
	header3.dataset.header = "s-1900";
	description3.dataset.description = "s-1900";
	header3.innerHTML = winterHost[2];
	description3.innerHTML = winterDescription[2];
	

	page4.dataset.season = "h-1900";
	header4.dataset.header = "h-1900";
	description4.dataset.description = "h-1900";
	header4.innerHTML = winterHost[3];
	description4.innerHTML = winterDescription[3];
	

	page5.dataset.season = "s-1948";
	header5.dataset.header = "s-1948";
	description5.dataset.description = "s-1948";
	header5.innerHTML = winterHost[4];
	description5.innerHTML = winterDescription[4];
	

	page6.dataset.season = "h-1948";
	header6.dataset.header = "h-1948";
	description6.dataset.description = "h-1948";
	header6.innerHTML = winterHost[5];
	description6.innerHTML = winterDescription[5];
	

	page7.dataset.season = "s-2000";
	header7.dataset.header = "s-2000";
	description7.dataset.description = "s-2000";
	header7.innerHTML = winterHost[6];
	description7.innerHTML = winterDescription[6];
	

	page8.dataset.season = "h-2000";
	header8.dataset.header = "h-2000";
	description8.dataset.description = "h-2000";
	header8.innerHTML = winterHost[7];
	description8.innerHTML = winterDescription[7];
	

	page9.dataset.season = "s-2020";
	header9.dataset.header = "s-2020";
	description9.dataset.description = "s-2020";
	header9.innerHTML = winterHost[8];
	description9.innerHTML = winterDescription[8];
	
	
	page10.dataset.season = "h-2020";
	header10.dataset.header = "h-2020";
	description10.dataset.description = "h-2020";
	header10.innerHTML = winterHost[9];
	description10.innerHTML = winterDescription[9];
	
}