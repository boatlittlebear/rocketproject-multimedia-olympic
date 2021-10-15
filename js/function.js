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
    `1896 เอเธนส์ กรีซ`, //ปี
	`(เหตุการณ์สำคัญ)`, //ปี(เหตุการณ์สำคัญ)
	`1900 ปารีส ฝรั่งเศส`, //ปี
	`(เหตุการณ์สำคัญ)`, //ปี(เหตุการณ์สำคัญ)
	`1948 ลอนดอน สหราชอาณาจักร`, //ปี
	`(เหตุการณ์สำคัญ)`, //ปี(เหตุการณ์สำคัญ)
	`2000 ซิดนีย์ ออสเตรเลีย`, //ปี
	`(เหตุการณ์สำคัญ)`, //ปี(เหตุการณ์สำคัญ)
	`2020 โตเกียว ญี่ปุ่น (ปีล่าสุด)`, //ปี
	`(เหตุการณ์สำคัญ)` //ปี(เหตุการณ์สำคัญ)
]

var summerDescription = [
    `มหกรรมกีฬาโอลิมปิกฤดูร้อนครั้งที่ 1 ประจำปี ค.ศ. 1896 (พ.ศ. 2439) <br>เป็นกีฬาโอลิมปิกสมัยใหม่ครั้งแรกที่ได้ถูกจัดขึ้น เจ้าภาพอยู่ที่ประเทศต้นกำเนิดของโอลิมปิก กรุงเอเธนส์ ประเทศกรีซ ที่สนามกีฬาโอลิมปิก
	<br>ซึ่งต่อมาได้ถูกทหารฝรั่งเศสทำลายในช่วงสงครามโลก`, //รายละเอียดของแต่ล่ะปี
	`เหตุการณ์สำคัญ :
	<br> การแข่งขันครั้งนี้นับว่าเป็นชัยชนะที่ยิ่งใหญ่ของกรีก ไม่ใช่แค่เพียงได้เป็นเจ้าภาพจัดการแข่งขันกีฬาโอลิมปิกครั้งนี้เท่านั้น
	<br> แต่เพราะนักกีฬาชาติกรีกได้นำชัยชนะมาให้กรีซ`,	//เหตุการณ์สำคัญ
	`มหกรรมกีฬาโอลิมปิกฤดูร้อนครั้งที่ 2 ประจำปี ค.ศ. 1900 (พ.ศ. 2443)
	<br>ได้จัดขึ้นที่กรุงปารีส ประเทศฝรั่งเศส เดิมทีได้มีความพยายามที่จะให้มีการจัดการแข่งขันกีฬาโอลิมปิกขึ้นในกรีกเพียงแห่งเดียวเท่านั้น แต่ ปิแอร์ เดอ ดูเบอร์แตง ซึ่งเป็นผู้ให้กำเนิดกีฬาโอลิมปิกสมัยใหม่ขึ้นมา ได้ยืนยันเจตนารมณ์เดิมที่จะให้มีการแข่งขันเวียนไปตามประเทศต่าง ๆ ที่มีส่วนร่วมการแข่งขันกีฬา`,  //รายละเอียดของแต่ล่ะปี
	`เหตุการณ์สำคัญ :
	<br>ครั้งนี้เป็นครั้งแรกที่ผู้หญิงเข้ามามีส่วนร่วมในเกมซึ่งเป็นการตัดสินใจที่กล้าหาญสำหรับช่วงเวลานั้น
	<br>ในกีฬาคริกเก็ตพวกเขาเล่นกับชายและในเทนนิสหญิงเดี่ยวและคู่ผสมต่างแข่งขันกัน`,//เหตุการณ์สำคัญ
	`มหกรรมกีฬาโอลิมปิกฤดูร้อนครั้งที่ 14 ประจำปี ค.ศ. 1948 (พ.ศ. 2491) 
	<br>ได้จัดขึ้นที่ลอนดอน สหราชอาณาจักร หลังจากหยุดพัก 12 ปีเนื่องจากสงครามโลกครั้งที่สองการแข่งขันกีฬาโอลิมปิกก็เริ่มขึ้น ลอนดอนกลายเป็นเมืองหลวงของการแข่งขันช่วงฤดูร้อน`,   //รายละเอียดของแต่ล่ะปี
	`เหตุการณ์สำคัญ :
	<br>เยอรมนีและญี่ปุ่นซึ่งเป็นผู้รุกรานของสงครามโลกครั้งที่สองไม่ได้รับเชิญให้เข้าร่วม แม้ว่าสหภาพโซเวียตจะได้รับเชิญ แต่ก็ไม่ได้เข้าร่วมด้วย`, //เหตุการณ์สำคัญ
	`มหกรรมกีฬาโอลิมปิกฤดูร้อนครั้งที่ 27 ประจำปี ค.ศ. 2000 (พ.ศ. 2543)
	<br>หรือในอีกชื่อว่า มหกรรมกีฬาแห่งสหัสวรรษ เป็นงานกีฬาระดับโลกจัดขึ้นที่นครซิดนีย์ รัฐนิวเซาท์เวลส์ ประเทศออสเตรเลีย ถือได้ว่าเป็นการแข่งขันกีฬาแห่งมวลมนุษยชาติในห้วงรอยต่อของสหัสวรรษ`,   //รายละเอียดของแต่ล่ะปี
	`เหตุการณ์สำคัญ :
	<br>เกาหลีเหนือ - เกาหลีใต้ ตัดสินใจรวมชาติเป็นเพียงหนึ่งเดียว เพื่อส่งนักกีฬาลงแข่งขันในนาม “เกาหลี” ถือเป็นช่วงเวลาที่สร้างความหวังให้คนทั้งสองประเทศเชื่อว่า พวกเขามีความหวังที่จะได้เห็นพี่น้องชาวเกาหลี กลับมารวมกันเป็นหนึ่งอีกครั้ง`,  //เหตุการณ์สำคัญ
	`มหกรรมกีฬฬาโอลิมปิกฤดูร้อนครั้งที่ 32 ประจำปี ค.ศ. 2020 (พ.ศ. 2563)
	<br>เป็นมหกรรมกีฬานานาชาติที่สำคัญในประเพณีโอลิมปิก ควบคุมโดยคณะกรรมการโอลิมปิกสากล ซึ่งจัดในกรุงโตเกียว ประเทศญี่ปุ่น จัดขึ้นระหว่างวันที่ 23 กรกฎาคม ถึง 8 สิงหาคม พ.ศ. 2564`, //รายละเอียดของแต่ล่ะปี
	`เหตุการณ์สำคัญ : 
	<br>ในวันที่ 24 มีนาคม พ.ศ. 2563
	จากสถานการณ์การระบาดทั่วของโคโรนาไวรัสในทั่วโลกทำให้คณะกรรมการโอลิมปิกสากล(IOC)
	<br>โดยประธานคณะกรรมการโอลิมปิกสากลได้ปรึกษาหารือกับขินโซะ อาเบะ นายกรัฐมนครีประเทศญี่ปุ่น
	<br>ก่อนจะตัดสินใจร่วมกันในการเลื่อนการแข่งขันโอลิมปิกฤดูร้อนออกไปในปี พ.ศ. 2564 (หลังสถานการณ์ โควิด-19 ดีขึ้น)` //เหตุการณ์สำคัญ
]


var winterHost = [
    `1924 ซาโมนิก ฝรั่งเศส`, //ปี
	`(เหตุการณ์สำคัญ)`, //ปี(เหตุการณ์สำคัญ)
	`1936 การ์มิช-พาร์เทินเคียร์เชิน เยอรมนี`,
	`(เหตุการณ์สำคัญ)`,
	`1948 ซังคท์โมริทซ์ สวิตเซอร์แลนด์`,
	`(เหตุการณ์สำคัญ)`,
	`1984 ซาราเยโว ยูโกสลาเวีย`,
	`(เหตุการณ์สำคัญ)`,
	`2022 ปักกิ่ง จีน`,
	`(เหตุการณ์สำคัญ)`
]

var winterDescription = [
    `มหกรรมกีฬาโอลิมปิกฤดูร้อนครั้งที่ 1 ประจำปี ค.ศ. 1924 (พ.ศ. 2467)
	<br>เป็นโอลิมปิกฤดูหนาวปีแรกของโลกอย่างเป็นทางการ 
	<br>ภายหลังได้ลงมติว่าให้ สัปดาห์กีฬาฤดูหนาวนานาชาติ ถูกจัดเป็น โอลิมปิกฤดูหนาวอย่างเป็นทางการ แต่ถึงอย่างนั้นโอลิมปิกฤดูหนาวในครั้งนี้ได้จัดขึ้นย้อนหลัง จึงทำให้ไม่ค่อยถูกแพร่กระจายไปทั่วนั่นเอง`, //รายละเอียดของแต่ล่ะปี
	`เหตุการณ์สำคัญ :
	<br>เกม Chamonix เป็นเกมแรกที่เกิดขึ้นในกีฬาโอลิมปิกฤดูหนาว
	<br>การแข่งขัน Chamonix Games เดิมจัดให้เป็น International Winter Sports Week ซึ่งเกิดจากการประชุมที่ได้รับการสนับสนุนโดยคณะกรรมการโอลิมปิกสากล (IOC) แต่ไม่ได้รับการอนุมัติให้เป็นกีฬาโอลิมปิกอย่างเป็นทางการ
	<br>(แต่ภายหลังในปี พ.ศ. 2468 Chamonix Games ได้รับการยินยอมว่าเป็นโอลิมปิกฤดูหนาวครั้งแรก)`, //เหตุการณ์สำคัญ
	`มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 4 ประจำปี ค.ศ. 1936 (พ.ศ. 2479)
	<br>ได้ถูกจัดขึ้นก่อนสงครามโลกครั้งที่สองจะเกิดขึ้นใน เมือง การ์มิช-พาร์เทินเคียร์เชิน ประเทศเยอรมนี ซึ่งเป็นปีสุดท้ายก่อนที่จะเกิดสงครามโลกครั้งที่สอง`, //รายละเอียดของแต่ล่ะปี
	`เหตุการณ์สำคัญ :
	<br>ก่อนหน้านี้ทางคณะกรรมการโอลิมปิกสากลได้ลงมติว่าการจัดโอลิกปิกครั้งต่อไปที่ เมืองซัปโปโร ประเทศญี่ปุ่นแต่ได้ถูกยกเลิกไป
	<br>ทำให้เยอรมนีและญี่ปุ่นนั้นเกิดความขัดแย้งตั้งแต่นั้นเป็นต้นมา`, //เหตุการณ์สำคัญ
	`มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 5 ประจำปี ค.ศ.1948 (พ.ศ. 2491)
	<br>โอลิมปิกปีนี้เป็นการจัดโอลิกปิกฤดูหนาวอีกครั้งหลังจากสงครามโลกครั้งที่สองได้จบลง ซึ่งเป็นเวลาถึง 12 ปี`, //รายละเอียดของแต่ล่ะปี
	`เหตุการณ์สำคัญ :
	<br>ภายหลังที่เกิดความขัดแย้งของญี่ปุ่นและเยอรมนีหรือความสูญเสียจากสงครามโลกครั้งทีสอง ทำให้คณะกรรมการผู้จัดงานต้องมีความละเอียดอ่อนกับการจัดงานครั้งนี้เป็นอย่างมาก`, //เหตุการณ์สำคัญ
	`มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 14 ประจำปี ค.ศ. 1984 (พ.ศ. 2527)
	<br>เป็นครั้งแรกของโอลิมปิกฤดูหนาว ที่จัดขึ้นในประเทศที่เป็นรัฐสังคมนิยม`, //รายละเอียดของแต่ล่ะปี
	`เหตุการณ์สำคัญ :
	<br>การวิ่งคบเพลิงโดยการวิ่งคบเพลิงของฤดูหนาวในครั้งนี้ เป็นการวิ่งจากโอลิมเปีย ไปสู่ ซาราเยโว ระยะทางมากกว่า 4000 กว่าไมล์ โดยผู้วิ่งจะวิ่งขึ้นไปบนเครื่องบินเพื่อบินจาก โอลิมเปีย ไปยัง ซาราเยโว `, //เหตุการณ์สำคัญ
	`มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 24 ประจำปี ค.ศ. 2022 (พ.ศ. 2565)
	<br>ที่จะถูกจัดขึ้นในอนาคต ณ กรุงปักกิ่ง ประเทศจีน โดยธีมของงานนี้คือความฝันฤดูหนาว หรือ Winter Dream ได้ใช้รูปปริวรรตของอักษรจีน “冬” สีฟ้า-น้ำเงิน สื่อถึงฤดูหนาว และสีแดง-ส้ม-เหลือง ให้สื่อถึงประเทศจีนนั้นเอง
	<br>ตัวอักษรดังกล่าวยังถูกนำไปใช้เป็นสัญลักษณ์ของ การแข่งขันโอลิมปิกฤดูหนาวครั้งนี้อีกด้วย`, //รายละเอียดของแต่ล่ะปี
	`เหตุการณ์สำคัญ :
	<br>เนื่องจากการแข่งขันถูกจัดขึ้นช่วงยุคของโรคระบาว โควิด-19 ทำให้รัฐบาลจีนออกมาตรการขั้นเด็ดขาดว่าไม่ให้ผู้ชมชาวต่างชาติที่มาจากต่างประเทศเข้ารับชม
	<br>แต่ให้ผู้ชมภายในประเทศเข้ารับชมได้ผ่านการคัดกรองตามมาตรการ โควิด-19 อย่างเคร่งครัดเพื่อไม่ให้เกิดการระบาดของ โควิด-19 ขึ้นมาอีก`, //เหตุการณ์สำคัญ
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