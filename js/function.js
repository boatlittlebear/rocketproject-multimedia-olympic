let scroller = document.querySelector("#slider");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", event => {
  output.textContent = `scrollLeft: ${scroller.scrollLeft}`;
  document.body.style.setProperty("--left", scroller.scrollLeft);
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        athlete.dataset.action = "run-right";
	}
    if (event.key === 'ArrowLeft') {
        athlete.dataset.action = "run-left";
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'ArrowRight') {
        athlete.dataset.action = "standframe";
	}
    if (event.key === 'ArrowLeft') {
		athlete.dataset.action = "standframe";
    }
});

scroller.onscroll = function() {
	if (scroller.scrollLeft <= barrier_1.offsetLeft - barrier_1.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 2) {
        athlete.style.bottom = "3rem";
    }
    if (scroller.scrollLeft >= barrier_1.offsetLeft - barrier_1.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 3) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_1.offsetLeft + barrier_1.offsetWidth + barrier_1.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 2) {
        athlete.style.bottom = "3rem";
    }

	if (scroller.scrollLeft >= barrier_2.offsetLeft - barrier_2.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 3) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_2.offsetLeft + barrier_2.offsetWidth + barrier_2.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 2) {
        athlete.style.bottom = "3rem";
	}

	if (scroller.scrollLeft >= barrier_3.offsetLeft - barrier_3.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 4) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_3.offsetLeft + barrier_3.offsetWidth + barrier_3.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 3) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_4.offsetLeft - barrier_4.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 4) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_4.offsetLeft + barrier_4.offsetWidth + barrier_4.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 3) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_5.offsetLeft - barrier_5.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 4) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_5.offsetLeft + barrier_5.offsetWidth + barrier_5.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 3) {
        athlete.style.bottom = "3rem";
	}

	if (scroller.scrollLeft >= barrier_6.offsetLeft - barrier_6.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 5) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_6.offsetLeft + barrier_6.offsetWidth + barrier_6.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 4) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_7.offsetLeft - barrier_7.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 5) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_7.offsetLeft + barrier_7.offsetWidth + barrier_7.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 4) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_8.offsetLeft - barrier_8.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 5) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_8.offsetLeft + barrier_8.offsetWidth + barrier_8.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 4) {
        athlete.style.bottom = "3rem";
	}

	if (scroller.scrollLeft >= barrier_9.offsetLeft - barrier_9.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 6) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_9.offsetLeft + barrier_9.offsetWidth + barrier_9.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 5) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_10.offsetLeft - barrier_10.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 6) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_10.offsetLeft + barrier_10.offsetWidth + barrier_10.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 5) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_11.offsetLeft - barrier_11.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 6) {
        athlete.style.bottom = "4rem";
    }
    if (scroller.scrollLeft >= barrier_11.offsetLeft + barrier_11.offsetWidth + barrier_11.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 5) {
        athlete.style.bottom = "3rem";
	}

	if (scroller.scrollLeft >= barrier_12.offsetLeft - barrier_12.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 7) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_12.offsetLeft + barrier_12.offsetWidth + barrier_12.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 6) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_13.offsetLeft - barrier_13.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 7) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_13.offsetLeft + barrier_13.offsetWidth + barrier_13.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 6) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_14.offsetLeft - barrier_14.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 7) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_14.offsetLeft + barrier_14.offsetWidth + barrier_14.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 6) {
        athlete.style.bottom = "3rem";
	}

	if (scroller.scrollLeft >= barrier_15.offsetLeft - barrier_15.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 8) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_15.offsetLeft + barrier_15.offsetWidth + barrier_15.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 7) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_16.offsetLeft - barrier_16.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 8) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_16.offsetLeft + barrier_16.offsetWidth + barrier_16.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 7) {
        athlete.style.bottom = "3rem";
	}

	if (scroller.scrollLeft >= barrier_17.offsetLeft - barrier_17.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 9) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_17.offsetLeft + barrier_17.offsetWidth + barrier_17.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 8) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_18.offsetLeft - barrier_18.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 9) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_18.offsetLeft + barrier_18.offsetWidth + barrier_18.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 8) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_19.offsetLeft - barrier_19.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 9) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_19.offsetLeft + barrier_19.offsetWidth + barrier_19.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 8) {
        athlete.style.bottom = "3rem";
	}

	if (scroller.scrollLeft >= barrier_20.offsetLeft - barrier_20.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 10) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_20.offsetLeft + barrier_20.offsetWidth + barrier_20.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 9) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_21.offsetLeft - barrier_21.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 10) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_21.offsetLeft + barrier_21.offsetWidth + barrier_21.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 9) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_22.offsetLeft - barrier_22.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 10) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_22.offsetLeft + barrier_22.offsetWidth + barrier_22.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 9) {
        athlete.style.bottom = "3rem";
	}

	
	if (scroller.scrollLeft >= barrier_23.offsetLeft - barrier_23.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 11) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_23.offsetLeft + barrier_23.offsetWidth + barrier_23.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 10) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_24.offsetLeft - barrier_24.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 11) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_24.offsetLeft + barrier_24.offsetWidth + barrier_24.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 10) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_25.offsetLeft - barrier_25.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 11) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_25.offsetLeft + barrier_25.offsetWidth + barrier_25.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 10) {
        athlete.style.bottom = "3rem";
	}

	if (scroller.scrollLeft >= barrier_26.offsetLeft - barrier_26.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 12) {
        athlete.style.bottom = "4rem";
    }
    if (scroller.scrollLeft >= barrier_26.offsetLeft + barrier_26.offsetWidth + barrier_26.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 11) {
        athlete.style.bottom = "3rem";
	}
	if (scroller.scrollLeft >= barrier_27.offsetLeft - barrier_27.offsetWidth/2 - window.innerWidth/2 - window.innerWidth + window.innerWidth * 12) {
        athlete.style.bottom = "8rem";
    }
    if (scroller.scrollLeft >= barrier_27.offsetLeft + barrier_27.offsetWidth + barrier_27.offsetWidth/2 - window.innerWidth/2 + window.innerWidth * 11) {
        athlete.style.bottom = "3rem";
	}
}


var summerHost = [
    `1st Athens, Greece (1896)`, //แก้ให้เป็นแบบฟอร์มนี้
	`รายละเอียดการจัดแข่งขัน`, //

	`2nd Paris, France (1900)`, //ปี
	`รายละเอียดการจัดแข่งขัน`, //ปี รายละเอียดการจัดแข่งขัน

	`14th London, England (1948)`, //ปี
	`รายละเอียดการจัดแข่งขัน`, //ปี รายละเอียดการจัดแข่งขัน

	`27th Sydney, Australia (2000)`, //ปี
	`รายละเอียดการจัดแข่งขัน`, //ปี รายละเอียดการจัดแข่งขัน

	`32th Tokyo, Japan (2021)`, //ปี
	`รายละเอียดการจัดแข่งขัน` //ปี รายละเอียดการจัดแข่งขัน
]

var summerDescription = [
    `<h2>มหกรรมกีฬาโอลิมปิกฤดูร้อนครั้งที่ 1 ประจำปี ค.ศ. 1896 (พ.ศ. 2439)</h2><br>
	ความเป็นมา :<br>
		เป็นกีฬาโอลิมปิกสมัยใหม่ครั้งแรกที่ได้ถูกจัดขึ้น เจ้าภาพอยู่ที่ประเทศต้นกำเนิดของโอลิมปิก กรุงเอเธนส์ ประเทศกรีซ ที่สนามกีฬาโอลิมปิก<br>
	ซึ่งต่อมาได้ถูกทหารฝรั่งเศสทำลายในช่วงสงครามโลก
	<br><br><br>
	เหตุการณ์สำคัญ :<br>
	การแข่งขันครั้งนี้นับว่าเป็นชัยชนะที่ยิ่งใหญ่ของกรีก ไม่ใช่แค่เพียงได้เป็นเจ้าภาพจัดการแข่งขันกีฬาโอลิมปิกครั้งนี้เท่านั้น
	แต่เพราะนักกีฬาชาติกรีกได้นำชัยชนะมาให้กรีซ`, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด : 6 เมษายน – 15 เมษายน 1896<br>
    ชาติที่เข้าร่วม : 14 ประเทศ<br>
    ผู้เข้าแข่งขัน : 241 คน<br>
    ชาย : 241 คน | หญิง : 0 คน<br>
    ชนิดกีฬา : 9 ชนิด<br>
	ประเทศที่ชนะการแข่งขัน :<br>
	1)สหรัฐอเมริกา<br>
	2)กรีซ<br>
	3)เยอรมนี<br>
	<br>`, // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูร้อนครั้งที่ 2 ประจำปี ค.ศ. 1900 (พ.ศ. 2443)</h2><br>
	ความเป็นมา :<br>
	ได้จัดขึ้นที่กรุงปารีส ประเทศฝรั่งเศส เดิมทีได้มีความพยายามที่จะให้มีการจัดการแข่งขันกีฬาโอลิมปิกขึ้นในกรีกเพียงแห่งเดียวเท่านั้น แต่ ปิแอร์ เดอ ดูเบอร์แตง ซึ่งเป็นผู้ให้กำเนิดกีฬาโอลิมปิกสมัยใหม่ขึ้นมา ได้ยืนยันเจตนารมณ์เดิมที่จะให้มีการแข่งขันเวียนไปตามประเทศต่าง ๆ ที่มีส่วนร่วมการแข่งขันกีฬา
	<br><br><br>
	เหตุการณ์สำคัญ :<br>
	ครั้งนี้เป็นครั้งแรกที่ผู้หญิงเข้ามามีส่วนร่วมในเกมซึ่งเป็นการตัดสินใจที่กล้าหาญสำหรับช่วงเวลานั้น
	<br>ในกีฬาคริกเก็ตพวกเขาเล่นกับชายและในเทนนิสหญิงเดี่ยวและคู่ผสมต่างแข่งขันกัน`,  // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด : 14 พฤษภาคม – 28 ตุลาคม 1900<br>
    ชาติที่เข้าร่วม : 26 ประเทศ<br>
    ผู้เข้าแข่งขัน : 997 คน<br>
    ชาย : 975 คน | หญิง : 22 คน<br>
    ชนิดกีฬา : 19 ชนิด<br>
	ประเทศที่ชนะการแข่งขัน :<br>
	1)ฝรั่งเศส<br>
	2)สหรัฐอเมริกา<br>
	3)สหราชอาณาจักร<br>
	<br>`, // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูร้อนครั้งที่ 14 ประจำปี ค.ศ. 1948 (พ.ศ. 2491)</h2><br>
	ความเป็นมา :<br>
	ได้จัดขึ้นที่ลอนดอน สหราชอาณาจักร หลังจากหยุดพัก 12 ปีเนื่องจากสงครามโลกครั้งที่สองการแข่งขันกีฬาโอลิมปิกก็เริ่มขึ้น ลอนดอนกลายเป็นเมืองหลวงของการแข่งขันช่วงฤดูร้อน
	<br><br><br>
	เหตุการณ์สำคัญ :<br>
	เยอรมนีและญี่ปุ่นซึ่งเป็นผู้รุกรานของสงครามโลกครั้งที่สองไม่ได้รับเชิญให้เข้าร่วม แม้ว่าสหภาพโซเวียตจะได้รับเชิญ แต่ก็ไม่ได้เข้าร่วมด้วยัน`,  // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด : 29 กรกฏาคม – 15 สิงหาคม 1948<br>
    ชาติที่เข้าร่วม : 59 ประเทศ<br>
    ผู้เข้าแข่งขัน : 4,104 คน<br>
    ชาย : 3,714 คน | หญิง : 390 คน<br>
    ชนิดกีฬา : 17 ชนิด<br>
	ประเทศที่ชนะการแข่งขัน :<br>
	1)สหรัฐ<br>
	2)สวีเดน<br>
	3)ฝรั่งเศส<br>
	<br>`,  // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูร้อนครั้งที่ 27 ประจำปี ค.ศ. 2000 (พ.ศ. 2543)</h2><br>
	ความเป็นมา :<br>
	หรือในอีกชื่อว่า มหกรรมกีฬาแห่งสหัสวรรษ เป็นงานกีฬาระดับโลกจัดขึ้นที่นครซิดนีย์ รัฐนิวเซาท์เวลส์ ประเทศออสเตรเลีย ถือได้ว่าเป็นการแข่งขันกีฬาแห่งมวลมนุษยชาติในห้วงรอยต่อของสหัสวรรษ
	<br><br><br>
	เหตุการณ์สำคัญ :<br>
	เกาหลีเหนือ - เกาหลีใต้ ตัดสินใจรวมชาติเป็นเพียงหนึ่งเดียว เพื่อส่งนักกีฬาลงแข่งขันในนาม “เกาหลี” ถือเป็นช่วงเวลาที่สร้างความหวังให้คนทั้งสองประเทศเชื่อว่า พวกเขามีความหวังที่จะได้เห็นพี่น้องชาวเกาหลี กลับมารวมกันเป็นหนึ่งอีกครั้ง`,  // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด : 15 กันยายน – 1 ตุลาคม 2000<br>
    ชาติที่เข้าร่วม : 199 ประเทศ<br>
    ผู้เข้าแข่งขัน : 10,651 คน<br>
    ชาย : 6,582 คน | หญิง : 4,069 คน<br>
    ชนิดกีฬา : 28 ชนิด<br>
	ประเทศที่ชนะการแข่งขัน :<br>
	1)สหรัฐอเมริกา<br>
	2)รัสเซีย<br>
	3)ประเทศจีน<br>
	<br>`,   // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬฬาโอลิมปิกฤดูร้อนครั้งที่ 32 ประจำปี ค.ศ. 2020 (พ.ศ. 2563)</h2><br>
	ความเป็นมา :<br>
	เป็นมหกรรมกีฬานานาชาติที่สำคัญในประเพณีโอลิมปิก ควบคุมโดยคณะกรรมการโอลิมปิกสากล ซึ่งจัดในกรุงโตเกียว ประเทศญี่ปุ่น จัดขึ้นระหว่างวันที่ 23 กรกฎาคม ถึง 8 สิงหาคม พ.ศ. 2564
	<br><br><br>
	เหตุการณ์สำคัญ :<br>
	ในวันที่ 24 มีนาคม พ.ศ. 2563
	จากสถานการณ์การระบาดทั่วของโคโรนาไวรัสในทั่วโลกทำให้คณะกรรมการโอลิมปิกสากล(IOC)
	<br>โดยประธานคณะกรรมการโอลิมปิกสากลได้ปรึกษาหารือกับขินโซะ อาเบะ นายกรัฐมนครีประเทศญี่ปุ่น
	<br>ก่อนจะตัดสินใจร่วมกันในการเลื่อนการแข่งขันโอลิมปิกฤดูร้อนออกไปในปี พ.ศ. 2564 (หลังสถานการณ์ โควิด-19 ดีขึ้น)`, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด : 23 กรกฏาคม – 8 สิงหาคม 2021<br>
    ชาติที่เข้าร่วม : 206 ประเทศ<br>
    ผู้เข้าแข่งขัน : 11,315 คน<br>
    ชนิดกีฬา : 33 ชนิด<br>
	ประเทศที่ชนะการแข่งขัน :<br>
	1)สหรัฐอเมริกา<br>
	2)จีน<br>
	3)ญี่ปุ่น<br>
	<br>` // รายละเอียดการจัดแข่งขัน
]
var summerImage = [
    `/img/logo/s-1896.webp`,
	`/img/flag/greece.svg`,
	`/img/logo/s-1900.webp`,
	`/img/flag/france.svg`,
	`/img/logo/s-1948.png`,
	`/img/flag/london.svg`,
	`/img/logo/s-2000.webp`,
	`/img/flag/australia.svg`,
	`/img/logo/s-2020.webp`,
	`/img/flag/japan.svg`
]

var winterHost = [
    `1st Chamonix, France (1924)`, //ปี
	`รายละเอียดการจัดแข่งขัน`, //ปี รายละเอียดการจัดแข่งขัน

	`4th Gramisch Partenkirchen, Germany (1936)`, //ปี
	`รายละเอียดการจัดแข่งขัน`, //ปี รายละเอียดการจัดแข่งขัน

	`5th St. Moritz, Switzerland (1948)`, //ปี
	`รายละเอียดการจัดแข่งขัน`, //ปี รายละเอียดการจัดแข่งขัน

	`14th Sarajevo, Yugoslavia (1984)`, //ปี
	`รายละเอียดการจัดแข่งขัน`, //ปี รายละเอียดการจัดแข่งขัน

	`24th Beijing, China (2022)`, //ปี
	`รายละเอียดการจัดแข่งขัน` //ปี รายละเอียดการจัดแข่งขัน
]

var winterDescription = [
    `<h2>มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 1 ประจำปี ค.ศ. 1924 (พ.ศ. 2467)</h2><br>
	ความเป็นมา :<br>
	เป็นโอลิมปิกฤดูหนาวปีแรกของโลกอย่างเป็นทางการ 
	<br>ภายหลังได้ลงมติว่าให้ สัปดาห์กีฬาฤดูหนาวนานาชาติ ถูกจัดเป็น โอลิมปิกฤดูหนาวอย่างเป็นทางการ แต่ถึงอย่างนั้นโอลิมปิกฤดูหนาวในครั้งนี้ได้จัดขึ้นย้อนหลัง จึงทำให้ไม่ค่อยถูกแพร่กระจายไปทั่วนั่นเอง
	<br><br><br>
	เหตุการณ์สำคัญ :<br>
	เกม Chamonix เป็นเกมแรกที่เกิดขึ้นในกีฬาโอลิมปิกฤดูหนาว
	<br>การแข่งขัน Chamonix Games เดิมจัดให้เป็น International Winter Sports Week ซึ่งเกิดจากการประชุมที่ได้รับการสนับสนุนโดยคณะกรรมการโอลิมปิกสากล (IOC) แต่ไม่ได้รับการอนุมัติให้เป็นกีฬาโอลิมปิกอย่างเป็นทางการ
	<br>(แต่ภายหลังในปี พ.ศ. 2468 Chamonix Games ได้รับการยินยอมว่าเป็นโอลิมปิกฤดูหนาวครั้งแรก)`, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด : 25 มกราคม – 5 กุมภาพันธ์ 1924<br>
    ชาติที่เข้าร่วม : 16 ประเทศ<br>
    ผู้เข้าแข่งขัน : 258 คน<br>
    ชาย : 247 คน | หญิง : 11 คน<br>
    ชนิดกีฬา : 6 ชนิด<br>
	ประเทศที่ชนะการแข่งขัน :<br>
	1)นอร์เวย์<br>
	2)ฟินแลนด์<br>
	3)ออสเตรีย<br>
	<br>`, // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 4 ประจำปี ค.ศ. 1936 (พ.ศ. 2479)</h2><br>
	ความเป็นมา :<br>
	ได้ถูกจัดขึ้นก่อนสงครามโลกครั้งที่สองจะเกิดขึ้นใน เมือง การ์มิช-พาร์เทินเคียร์เชิน ประเทศเยอรมนี ซึ่งเป็นปีสุดท้ายก่อนที่จะเกิดสงครามโลกครั้งที่สอง
	<br><br><br>
	เหตุการณ์สำคัญ :<br>
	ก่อนหน้านี้ทางคณะกรรมการโอลิมปิกสากลได้ลงมติว่าการจัดโอลิกปิกครั้งต่อไปที่ เมืองซัปโปโร ประเทศญี่ปุ่นแต่ได้ถูกยกเลิกไป
	<br>ทำให้เยอรมนีและญี่ปุ่นนั้นเกิดความขัดแย้งตั้งแต่นั้นเป็นต้นมา`, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด : 6 กุมภาพันธ์ – 16 กุมภาพันธ์ 1936<br>
    ชาติที่เข้าร่วม : 28 ประเทศ<br>
    ผู้เข้าแข่งขัน : 646 คน<br>
    ชาย : 566 คน | หญิง : 80 คน<br>
    ชนิดกีฬา : 4 ชนิด<br>
	ประเทศที่ชนะการแข่งขัน :<br>
	1)นอร์เวย์<br>
	2)เยอรมนี<br>
	3)สวีเดน<br>
	<br>`, // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 5 ประจำปี ค.ศ.1948 (พ.ศ. 2491)</h2><br>
	ความเป็นมา :<br>
	โอลิมปิกปีนี้เป็นการจัดโอลิกปิกฤดูหนาวอีกครั้งหลังจากสงครามโลกครั้งที่สองได้จบลง ซึ่งเป็นเวลาถึง 12 ปี
	<br><br><br>
	เหตุการณ์สำคัญ :<br>
	ภายหลังที่เกิดความขัดแย้งของญี่ปุ่นและเยอรมนีหรือความสูญเสียจากสงครามโลกครั้งทีสอง ทำให้คณะกรรมการผู้จัดงานต้องมีความละเอียดอ่อนกับการจัดงานครั้งนี้เป็นอย่างมาก`, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด : 30 มกราคม – 8 กุมภาพันธ์ 1948<br>
    ชาติที่เข้าร่วม : 28 ประเทศ<br>
    ผู้เข้าแข่งขัน : 669 คน<br>
    ชาย : 592 คน | หญิง : 77 คน<br>
    ชนิดกีฬา : 4 ชนิด<br>
	ประเทศที่ชนะการแข่งขัน :<br>
	1)นอร์เวย์<br>
	2)สวีเดน<br>
	3)สวิตเซอร์แลนด์<br>
	<br>`, // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 14 ประจำปี ค.ศ. 1984 (พ.ศ. 2527)</h2><br>
	ความเป็นมา :<br>
	เป็นครั้งแรกของโอลิมปิกฤดูหนาว ที่จัดขึ้นในประเทศที่เป็นรัฐสังคมนิยม
	<br><br><br>
	เหตุการณ์สำคัญ :<br>
	การวิ่งคบเพลิงโดยการวิ่งคบเพลิงของฤดูหนาวในครั้งนี้ เป็นการวิ่งจากโอลิมเปีย ไปสู่ ซาราเยโว ระยะทางมากกว่า 4000 กว่าไมล์ โดยผู้วิ่งจะวิ่งขึ้นไปบนเครื่องบินเพื่อบินจาก โอลิมเปีย ไปยัง ซาราเยโว `, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด : 8 กุมภาพันธ์ – 19 กุมภาพันธ์ 1984<br>
    ชาติที่เข้าร่วม : 49 ประเทศ<br>
    ผู้เข้าแข่งขัน : 1,272 คน<br>
    ชาย : 998 คน | หญิง : 274 คน<br>
    ชนิดกีฬา : 6 ชนิด<br>
	ประเทศที่ชนะการแข่งขัน :<br>
	1)เยอรมนีตะวันออก<br>
	2)สหภาพโซเวียต<br>
	3)สหรัฐอเมริกา<br>
	<br>`, // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 24 ประจำปี ค.ศ. 2022 (พ.ศ. 2565)</h2><br>
	ความเป็นมา :<br>
	ที่จะถูกจัดขึ้นในอนาคต ณ กรุงปักกิ่ง ประเทศจีน โดยธีมของงานนี้คือความฝันฤดูหนาว หรือ Winter Dream ได้ใช้รูปปริวรรตของอักษรจีน “冬” สีฟ้า-น้ำเงิน สื่อถึงฤดูหนาว และสีแดง-ส้ม-เหลือง ให้สื่อถึงประเทศจีนนั้นเอง
	<br>ตัวอักษรดังกล่าวยังถูกนำไปใช้เป็นสัญลักษณ์ของ การแข่งขันโอลิมปิกฤดูหนาวครั้งนี้อีกด้วย
	<br><br><br>
	เหตุการณ์สำคัญ :<br>
	เนื่องจากการแข่งขันถูกจัดขึ้นช่วงยุคของโรคระบาว โควิด-19 ทำให้รัฐบาลจีนออกมาตรการขั้นเด็ดขาดว่าไม่ให้ผู้ชมชาวต่างชาติที่มาจากต่างประเทศเข้ารับชม
	<br>แต่ให้ผู้ชมภายในประเทศเข้ารับชมได้ผ่านการคัดกรองตามมาตรการ โควิด-19 อย่างเคร่งครัดเพื่อไม่ให้เกิดการระบาดของ โควิด-19 ขึ้นมาอีก`, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด : (คาดว่า) 4 กุมภาพันธ์ – 20 กุมภาพันธ์ 2022<br>
    ชาติที่เข้าร่วม : <br>
    ผู้เข้าแข่งขัน : <br>
    ชาย :  | หญิง : <br>
    ชนิดกีฬา : <br>
	ประเทศที่ชนะการแข่งขัน :<br>
	1)<br>
	2)<br>
	3)<br>
	<br>`, // รายละเอียดการจัดแข่งขัน
]

var winterImage = [
    `/img/logo/w-1924.webp`,
	`/img/flag/france.svg`,
	`/img/logo/w-1936.png`,
	`/img/flag/germany.svg`,
	`/img/logo/w-1948.webp`,
	`/img/flag/switzerland.svg`,
	`/img/logo/w-1984.webp`,
	`/img/flag/yugoslavia.svg`,
	`/img/logo/w-2022.png`,
	`/img/flag/china.svg`
]


function summer() {
	main.dataset.main = "summer";
	
	page1.dataset.season = "s-1896";
	header1.dataset.header = "s-1896";
	description1.dataset.description = "s-1896";
	header1.innerHTML = summerHost[0];
	description1.innerHTML = summerDescription[0];
	image1.src =  summerImage[0];


	page2.dataset.season = "r-1896";
	header2.dataset.header = "r-1896";
	description2.dataset.description = "r-1896";
	header2.innerHTML = summerHost[1];
	description2.innerHTML = summerDescription[1];
	image2.src =  summerImage[1];
	

	page3.dataset.season = "s-1900";
	header3.dataset.header = "s-1900";
	description3.dataset.description = "s-1900";
	header3.innerHTML = summerHost[2];
	description3.innerHTML = summerDescription[2];
	image3.src =  summerImage[2];
	

	page4.dataset.season = "r-1900";
	header4.dataset.header = "r-1900";
	description4.dataset.description = "r-1900";
	header4.innerHTML = summerHost[3];
	description4.innerHTML = summerDescription[3];
	image4.src =  summerImage[3];
	

	page5.dataset.season = "s-1948";
	header5.dataset.header = "s-1948";
	description5.dataset.description = "s-1948";
	header5.innerHTML = summerHost[4];
	description5.innerHTML = summerDescription[4];
	image5.src =  summerImage[4];
	

	page6.dataset.season = "r-1948";
	header6.dataset.header = "r-1948";
	description6.dataset.description = "r-1948";
	header6.innerHTML = summerHost[5];
	description6.innerHTML = summerDescription[5];
	image6.src =  summerImage[5];
	

	page7.dataset.season = "s-2000";
	header7.dataset.header = "s-2000";
	description7.dataset.description = "s-2000";
	header7.innerHTML = summerHost[6];
	description7.innerHTML = summerDescription[6];
	image7.src =  summerImage[6];
	

	page8.dataset.season = "r-2000";
	header8.dataset.header = "r-2000";
	description8.dataset.description = "r-2000";
	header8.innerHTML = summerHost[7];
	description8.innerHTML = summerDescription[7];
	image8.src =  summerImage[7];
	

	page9.dataset.season = "s-2020";
	header9.dataset.header = "s-2020";
	description9.dataset.description = "s-2020";
	header9.innerHTML = summerHost[8];
	description9.innerHTML = summerDescription[8];
	image9.src =  summerImage[8];
	
	
	page10.dataset.season = "r-2020";
	header10.dataset.header = "r-2020";
	description10.dataset.description = "r-2020";
	header10.innerHTML = summerHost[9];
	description10.innerHTML = summerDescription[9];
	image10.src =  summerImage[9];
	
}

function winter() {
	main.dataset.main = "winter";
	
	page1.dataset.season = "w-1924";
	header1.dataset.header = "w-1924";
	description1.dataset.description = "w-1924";
	header1.innerHTML = winterHost[0];
	description1.innerHTML = winterDescription[0];
	image1.src =  winterImage[0];

	page2.dataset.season = "r-1924";
	header2.dataset.header = "r-1924";
	description2.dataset.description = "r-1924";
	header2.innerHTML = winterHost[1];
	description2.innerHTML = winterDescription[1];
	image2.src =  winterImage[1];
	

	page3.dataset.season = "w-1936";
	header3.dataset.header = "w-1936";
	description3.dataset.description = "w-1936";
	header3.innerHTML = winterHost[2];
	description3.innerHTML = winterDescription[2];
	image3.src =  winterImage[2];
	

	page4.dataset.season = "r-1936";
	header4.dataset.header = "r-1936";
	description4.dataset.description = "r-1936";
	header4.innerHTML = winterHost[3];
	description4.innerHTML = winterDescription[3];
	image4.src =  winterImage[3];
	

	page5.dataset.season = "w-1948";
	header5.dataset.header = "w-1948";
	description5.dataset.description = "w-1948";
	header5.innerHTML = winterHost[4];
	description5.innerHTML = winterDescription[4];
	image5.src =  winterImage[4];
	

	page6.dataset.season = "d-1948";
	header6.dataset.header = "d-1948";
	description6.dataset.description = "d-1948";
	header6.innerHTML = winterHost[5];
	description6.innerHTML = winterDescription[5];
	image6.src =  winterImage[5];
	

	page7.dataset.season = "w-1984";
	header7.dataset.header = "w-1984";
	description7.dataset.description = "w-1984";
	header7.innerHTML = winterHost[6];
	description7.innerHTML = winterDescription[6];
	image7.src =  winterImage[6];
	

	page8.dataset.season = "r-1984";
	header8.dataset.header = "r-1984";
	description8.dataset.description = "r-1984";
	header8.innerHTML = winterHost[7];
	description8.innerHTML = winterDescription[7];
	image8.src =  winterImage[7];
	

	page9.dataset.season = "w-2022";
	header9.dataset.header = "w-2022";
	description9.dataset.description = "w-2022";
	header9.innerHTML = winterHost[8];
	description9.innerHTML = winterDescription[8];
	image9.src =  winterImage[8];
	
	
	page10.dataset.season = "r-2022";
	header10.dataset.header = "r-2022";
	description10.dataset.description = "r-2022";
	header10.innerHTML = winterHost[9];
	description10.innerHTML = winterDescription[9];
	image10.src =  winterImage[9];
}

function change() {
	var change = document.getElementById("change");
	if (change.checked == true) {
		winter();
	}
	else {
		summer();
	}
}