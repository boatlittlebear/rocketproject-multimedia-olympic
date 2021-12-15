var summerHost = [
    `1st Athens, Greece (1896)<br>
	"ชัยชนะที่ยิ่งใหญ่ของกรีก"`, //แก้ให้เป็นแบบฟอร์มนี้
	`รายละเอียดการจัดแข่งขันโอลิมปิกฤดูร้อนครั้งที่ 1`, //

	`2nd Paris, France (1900)<br>
	"ครั้งแรกที่ผู้หญิงเข้ามามีส่วนร่วม"`, //ปี
	`รายละเอียดการจัดแข่งขันโอลิมปิกฤดูร้อนครั้งที่ 2`, //ปี รายละเอียดการจัดแข่งขัน

	`14th London, England (1948)<br>
	"เยอรมนีและญี่ปุ่น ไม่ได้รับเชิญให้เข้าร่วม"`, //ปี
	`รายละเอียดการจัดแข่งขันโอลิมปิกฤดูร้อนครั้งที่ 14`, //ปี รายละเอียดการจัดแข่งขัน

	`27th Sydney, Australia (2000)<br>
	"เกาหลีเหนือ - เกาหลีใต้ ตัดสินใจรวมชาติเป็นเพียงหนึ่งเดียว"`, //ปี
	`รายละเอียดการจัดแข่งขันโอลิมปิกฤดูร้อนครั้งที่ 27`, //ปี รายละเอียดการจัดแข่งขัน

	`32th Tokyo, Japan (2021)<br>
	"เลื่อนการแข่งขันโอลิมปิกฤดูร้อน"`, //ปี
	`รายละเอียดการจัดแข่งขันโอลิมปิกฤดูร้อนครั้งที่ 32` //ปี รายละเอียดการจัดแข่งขัน
]

var summerDescription = [
    `<h2>มหกรรมกีฬาโอลิมปิกฤดูร้อนครั้งที่ 1 ประจำปี ค.ศ. 1896 (พ.ศ. 2439)</h2><br>
	<h3>ความเป็นมา :</h3>
		เป็นกีฬาโอลิมปิกสมัยใหม่ครั้งแรกที่ได้ถูกจัดขึ้น เจ้าภาพอยู่ที่ประเทศต้นกำเนิดของโอลิมปิก กรุงเอเธนส์ ประเทศกรีซ ที่สนามกีฬาโอลิมปิก
	ซึ่งต่อมาได้ถูกทหารฝรั่งเศสทำลายในช่วงสงครามโลก
	<br><br>
	<h3>เหตุการณ์สำคัญ :</h3>
	การแข่งขันครั้งนี้นับว่าเป็นชัยชนะที่ยิ่งใหญ่ของกรีก ไม่ใช่แค่เพียงได้เป็นเจ้าภาพจัดการแข่งขันกีฬาโอลิมปิกครั้งนี้เท่านั้น
	แต่เพราะนักกีฬาชาติกรีกได้นำชัยชนะมาให้กรีซ`, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด :<h1>1896</h1><h2>6 – 15 เมษายน</h2>`, // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูร้อนครั้งที่ 2 ประจำปี ค.ศ. 1900 (พ.ศ. 2443)</h2><br>
	<h3>ความเป็นมา :</h3>
	ได้จัดขึ้นที่กรุงปารีส ประเทศฝรั่งเศส เดิมทีได้มีความพยายามที่จะให้มีการจัดการแข่งขันกีฬาโอลิมปิกขึ้นในกรีกเพียงแห่งเดียวเท่านั้น แต่ ปิแอร์ เดอ ดูเบอร์แตง ซึ่งเป็นผู้ให้กำเนิดกีฬาโอลิมปิกสมัยใหม่ขึ้นมา ได้ยืนยันเจตนารมณ์เดิมที่จะให้มีการแข่งขันเวียนไปตามประเทศต่าง ๆ ที่มีส่วนร่วมการแข่งขันกีฬา
	<br><br>
	<h3>เหตุการณ์สำคัญ :</h3>
	ครั้งนี้เป็นครั้งแรกที่ผู้หญิงเข้ามามีส่วนร่วมในเกมซึ่งเป็นการตัดสินใจที่กล้าหาญสำหรับช่วงเวลานั้น
	<br>ในกีฬาคริกเก็ตพวกเขาเล่นกับชายและในเทนนิสหญิงเดี่ยวและคู่ผสมต่างแข่งขันกัน`,  // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด :<h1>1900</h1><h2>14 พฤษภาคม – 28 ตุลาคม</h2>`, // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูร้อนครั้งที่ 14 ประจำปี ค.ศ. 1948 (พ.ศ. 2491)</h2><br>
	<h3>ความเป็นมา :</h3>
	ได้จัดขึ้นที่ลอนดอน สหราชอาณาจักร หลังจากหยุดพัก 12 ปีเนื่องจากสงครามโลกครั้งที่สองการแข่งขันกีฬาโอลิมปิกก็เริ่มขึ้น ลอนดอนกลายเป็นเมืองหลวงของการแข่งขันช่วงฤดูร้อน
	<br><br>
	<h3>เหตุการณ์สำคัญ :</h3>
	เยอรมนีและญี่ปุ่นซึ่งเป็นผู้รุกรานของสงครามโลกครั้งที่สองไม่ได้รับเชิญให้เข้าร่วม แม้ว่าสหภาพโซเวียตจะได้รับเชิญ แต่ก็ไม่ได้เข้าร่วมด้วยัน`,  // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด :<h1>1948</h1><h2>29 กรกฏาคม – 15 สิงหาคม</h2>`,  // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูร้อนครั้งที่ 27 ประจำปี ค.ศ. 2000 (พ.ศ. 2543)</h2><br>
	<h3>ความเป็นมา :</h3>
	หรือในอีกชื่อว่า มหกรรมกีฬาแห่งสหัสวรรษ เป็นงานกีฬาระดับโลกจัดขึ้นที่นครซิดนีย์ รัฐนิวเซาท์เวลส์ ประเทศออสเตรเลีย ถือได้ว่าเป็นการแข่งขันกีฬาแห่งมวลมนุษยชาติในห้วงรอยต่อของสหัสวรรษ
	<br><br>
	<h3>เหตุการณ์สำคัญ :</h3>
	เกาหลีเหนือ - เกาหลีใต้ ตัดสินใจรวมชาติเป็นเพียงหนึ่งเดียว เพื่อส่งนักกีฬาลงแข่งขันในนาม “เกาหลี” ถือเป็นช่วงเวลาที่สร้างความหวังให้คนทั้งสองประเทศเชื่อว่า พวกเขามีความหวังที่จะได้เห็นพี่น้องชาวเกาหลี กลับมารวมกันเป็นหนึ่งอีกครั้ง`,  // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด :<h1>2000</h1><h2>15 กันยายน – 1 ตุลาคม</h2>`,   // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬฬาโอลิมปิกฤดูร้อนครั้งที่ 32 ประจำปี ค.ศ. 2020 (พ.ศ. 2563)</h2><br>
	<h3>ความเป็นมา :</h3>
	เป็นมหกรรมกีฬานานาชาติที่สำคัญในประเพณีโอลิมปิก ควบคุมโดยคณะกรรมการโอลิมปิกสากล ซึ่งจัดในกรุงโตเกียว ประเทศญี่ปุ่น จัดขึ้นระหว่างวันที่ 23 กรกฎาคม ถึง 8 สิงหาคม พ.ศ. 2564
	<br><br>
	<h3>เหตุการณ์สำคัญ :</h3>
	ในวันที่ 24 มีนาคม พ.ศ. 2563
	จากสถานการณ์การระบาดทั่วของโคโรนาไวรัสในทั่วโลกทำให้คณะกรรมการโอลิมปิกสากล(IOC)
	<br>โดยประธานคณะกรรมการโอลิมปิกสากลได้ปรึกษาหารือกับขินโซะ อาเบะ นายกรัฐมนครีประเทศญี่ปุ่น
	<br>ก่อนจะตัดสินใจร่วมกันในการเลื่อนการแข่งขันโอลิมปิกฤดูร้อนออกไปในปี พ.ศ. 2564 (หลังสถานการณ์ โควิด-19 ดีขึ้น)`, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด :<h1>2021</h1><h2>23 กรกฏาคม – 8 สิงหาคม</h2>`,
	
	`ชาติที่เข้าร่วม :<h1>14 ประเทศ</h1>`, // 2s

	`ชาติที่เข้าร่วม :<h1>26 ประเทศ</h1>`, // 4s

	`ชาติที่เข้าร่วม :<h1>59 ประเทศ</h1>`, // 6s

	`ชาติที่เข้าร่วม :<h1>199 ประเทศ</h1>`, // 8s

	`ชาติที่เข้าร่วม :<h1>206 ประเทศ</h1>`, // 10s

	`ผู้เข้าแข่งขัน :<h1>311 คน</h1>`, // 2p

	`ผู้เข้าแข่งขัน :<h1>4,104 คน</h1>`, // 4p

	`ผู้เข้าแข่งขัน :<h1>10,651 คน</h1>`, // 6p

	`ผู้เข้าแข่งขัน :<h1>997 คน</h1>`, // 8p

	`ผู้เข้าแข่งขัน :<h1>11,315 คน</h1>`, // 10p

]
var summerImage = [
    `/img/logo/flag-s-1896.png`,
    `/img/logo/flag-s-1900.png`,
    `/img/logo/flag-s-1948.png`,
    `/img/logo/flag-s-2000.png`,
    `/img/logo/flag-s-2020.png`,

	`/img/podium/summer/1.png`, // podium1
	`/img/podium/summer/2.png`, // podium2
	`/img/podium/summer/3.png`, // podium3
	`/img/podium/summer/4.png`, // podium4
	`/img/podium/summer/5.png`  // podium5
]

var winterHost = [
    `1st Chamonix, France (1924)<br>
	"เกม Chamonix เป็นเกมแรกที่เกิดขึ้นในกีฬาโอลิมปิกฤดูหนาว"`, //ปี
	`รายละเอียดการจัดแข่งขันโอลิมปิกฤดูหนาวครั้งที่ 1`, //ปี รายละเอียดการจัดแข่งขัน

	`4th Gramisch Partenkirchen, Germany (1936)<br>
	"เยอรมนีและญี่ปุ่น เกิดความขัดแย้งกัน"`, //ปี
	`รายละเอียดการจัดแข่งขันโอลิมปิกฤดูหนาวครั้งที่ 4`, //ปี รายละเอียดการจัดแข่งขัน

	`5th St. Moritz, Switzerland (1948)<br>
	"ภายหลังที่เกิดความขัดแย้งของญี่ปุ่นและเยอรมนี"`, //ปี
	`รายละเอียดการจัดแข่งขันโอลิมปิกฤดูหนาวครั้งที่ 5`, //ปี รายละเอียดการจัดแข่งขัน

	`14th Sarajevo, Yugoslavia (1984)<br>
	"วิ่งคบเพลิง จากโอลิมเปีย ไปสู่ ซาราเยโว"`, //ปี
	`รายละเอียดการจัดแข่งขันโอลิมปิกฤดูหนาวครั้งที่ 14`, //ปี รายละเอียดการจัดแข่งขัน

	`24th Beijing, China (2022)<br>
	"ไม่ให้ผู้ชมชาวต่างชาติที่มาจากต่างประเทศเข้ารับชม"`, //ปี
	`รายละเอียดการจัดแข่งขันโอลิมปิกฤดูหนาวครั้งที่ 24` //ปี รายละเอียดการจัดแข่งขัน
]

var winterDescription = [
    `<h2>มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 1 ประจำปี ค.ศ. 1924 (พ.ศ. 2467)</h2><br>
	<h3>ความเป็นมา :</h3>
	เป็นโอลิมปิกฤดูหนาวปีแรกของโลกอย่างเป็นทางการ 
	<br>ภายหลังได้ลงมติว่าให้ สัปดาห์กีฬาฤดูหนาวนานาชาติ ถูกจัดเป็น โอลิมปิกฤดูหนาวอย่างเป็นทางการ แต่ถึงอย่างนั้นโอลิมปิกฤดูหนาวในครั้งนี้ได้จัดขึ้นย้อนหลัง จึงทำให้ไม่ค่อยถูกแพร่กระจายไปทั่วนั่นเอง
	<br><br>
	<h3>เหตุการณ์สำคัญ :</h3>
	เกม Chamonix เป็นเกมแรกที่เกิดขึ้นในกีฬาโอลิมปิกฤดูหนาว
	<br>การแข่งขัน Chamonix Games เดิมจัดให้เป็น International Winter Sports Week ซึ่งเกิดจากการประชุมที่ได้รับการสนับสนุนโดยคณะกรรมการโอลิมปิกสากล (IOC) แต่ไม่ได้รับการอนุมัติให้เป็นกีฬาโอลิมปิกอย่างเป็นทางการ
	<br>(แต่ภายหลังในปี พ.ศ. 2468 Chamonix Games ได้รับการยินยอมว่าเป็นโอลิมปิกฤดูหนาวครั้งแรก)`, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด :<h1>1924</h1><h2>25 มกราคม – 5 กุมภาพันธ์</h2>`, // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 4 ประจำปี ค.ศ. 1936 (พ.ศ. 2479)</h2><br>
	<h3>ความเป็นมา :</h3>
	ได้ถูกจัดขึ้นก่อนสงครามโลกครั้งที่สองจะเกิดขึ้นใน เมือง การ์มิช-พาร์เทินเคียร์เชิน ประเทศเยอรมนี ซึ่งเป็นปีสุดท้ายก่อนที่จะเกิดสงครามโลกครั้งที่สอง
	<br><br>
	<h3>เหตุการณ์สำคัญ :</h3>
	ก่อนหน้านี้ทางคณะกรรมการโอลิมปิกสากลได้ลงมติว่าการจัดโอลิกปิกครั้งต่อไปที่ เมืองซัปโปโร ประเทศญี่ปุ่นแต่ได้ถูกยกเลิกไป
	<br>ทำให้เยอรมนีและญี่ปุ่นนั้นเกิดความขัดแย้งตั้งแต่นั้นเป็นต้นมา`, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด :<h1>1936</h1><h2>6 กุมภาพันธ์ – 16 กุมภาพันธ์</h2>`, // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 5 ประจำปี ค.ศ.1948 (พ.ศ. 2491)</h2><br>
	<h3>ความเป็นมา :</h3>
	โอลิมปิกปีนี้เป็นการจัดโอลิกปิกฤดูหนาวอีกครั้งหลังจากสงครามโลกครั้งที่สองได้จบลง ซึ่งเป็นเวลาถึง 12 ปี
	<br><br>
	<h3>เหตุการณ์สำคัญ :</h3>
	ภายหลังที่เกิดความขัดแย้งของญี่ปุ่นและเยอรมนีหรือความสูญเสียจากสงครามโลกครั้งทีสอง ทำให้คณะกรรมการผู้จัดงานต้องมีความละเอียดอ่อนกับการจัดงานครั้งนี้เป็นอย่างมาก`, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด :<h1>1948</h1><h2>30 มกราคม – 8 กุมภาพันธ์</h2>`, // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 14 ประจำปี ค.ศ. 1984 (พ.ศ. 2527)</h2><br>
	<h3>ความเป็นมา :</h3>
	เป็นครั้งแรกของโอลิมปิกฤดูหนาว ที่จัดขึ้นในประเทศที่เป็นรัฐสังคมนิยม
	<br><br>
	<h3>เหตุการณ์สำคัญ :</h3>
	การวิ่งคบเพลิงโดยการวิ่งคบเพลิงของฤดูหนาวในครั้งนี้ เป็นการวิ่งจากโอลิมเปีย ไปสู่ ซาราเยโว ระยะทางมากกว่า 4000 กว่าไมล์ โดยผู้วิ่งจะวิ่งขึ้นไปบนเครื่องบินเพื่อบินจาก โอลิมเปีย ไปยัง ซาราเยโว `, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด :<h1>1984</h1><h2>8 กุมภาพันธ์ – 19 กุมภาพันธ์</h2>`, // รายละเอียดการจัดแข่งขัน

	`<h2>มหกรรมกีฬาโอลิมปิกฤดูหนาวครั้งที่ 24 ประจำปี ค.ศ. 2022 (พ.ศ. 2565)</h2><br>
	<h3>ความเป็นมา :</h3>
	ที่จะถูกจัดขึ้นในอนาคต ณ กรุงปักกิ่ง ประเทศจีน โดยธีมของงานนี้คือความฝันฤดูหนาว หรือ Winter Dream ได้ใช้รูปปริวรรตของอักษรจีน “冬” สีฟ้า-น้ำเงิน สื่อถึงฤดูหนาว และสีแดง-ส้ม-เหลือง ให้สื่อถึงประเทศจีนนั้นเอง
	<br>ตัวอักษรดังกล่าวยังถูกนำไปใช้เป็นสัญลักษณ์ของ การแข่งขันโอลิมปิกฤดูหนาวครั้งนี้อีกด้วย
	<br><br>
	<h3>เหตุการณ์สำคัญ :</h3>
	เนื่องจากการแข่งขันถูกจัดขึ้นช่วงยุคของโรคระบาว โควิด-19 ทำให้รัฐบาลจีนออกมาตรการขั้นเด็ดขาดว่าไม่ให้ผู้ชมชาวต่างชาติที่มาจากต่างประเทศเข้ารับชม
	<br>แต่ให้ผู้ชมภายในประเทศเข้ารับชมได้ผ่านการคัดกรองตามมาตรการ โควิด-19 อย่างเคร่งครัดเพื่อไม่ให้เกิดการระบาดของ โควิด-19 ขึ้นมาอีก`, // ความเป็นมา, เหตุการณ์สำคัญ

	`วันที่จัด :<h1>2022</h1>(คาดว่า)<h2>4 กุมภาพันธ์ – 20 กุมภาพันธ์</h2>`, // รายละเอียดการจัดแข่งขัน

	`ชาติที่เข้าร่วม :<h1>16 ประเทศ</h1>`, // 2s

	`ชาติที่เข้าร่วม :<h1>28 ประเทศ</h1>`, // 4s

	`ชาติที่เข้าร่วม :<h1>28 ประเทศ</h1>`, // 6s

	`ชาติที่เข้าร่วม :<h1>49 ประเทศ</h1>`, // 8s

	`ชาติที่เข้าร่วม :<h1>? ประเทศ</h1>`, // 10s

	`ผู้เข้าแข่งขัน :<h1>258 คน</h1>`, // 2p

	`ผู้เข้าแข่งขัน :<h1>646 คน</h1>`, // 4p

	`ผู้เข้าแข่งขัน :<h1>669 คน</h1>`, // 6p

	`ผู้เข้าแข่งขัน :<h1>1,272 คน</h1>`, // 8p

	`ผู้เข้าแข่งขัน :<h1>? คน</h1>`, // 10p
]

var winterImage = [
    `/img/logo/flag-w-1924.png`,
    `/img/logo/flag-w-1936.png`,
    `/img/logo/flag-w-1948.png`,
    `/img/logo/flag-w-1984.png`,
    `/img/logo/flag-w-2022.png`,

	`/img/podium/winter/1.png`, // podium1
	`/img/podium/winter/2.png`, // podium2
	`/img/podium/winter/3.png`, // podium3
	`/img/podium/winter/4.png`, // podium4
	`/img/podium/winter/5.png`  // podium5
]


function summer() {
	main.dataset.main = "summer";

	let clo_element = document.getElementById("clo")
	clo_element.innerHTML= `
        <div class="cloud" data-cloud="1"></div>
      <div class="cloud" data-cloud="2"></div>
      <div class="cloud" data-cloud="3"></div>
      <div class="cloud" data-cloud="4"></div>
      <div class="cloud" data-cloud="5"></div>
      <div class="cloud" data-cloud="6"></div>
      <div class="cloud" data-cloud="7"></div>
      <div class="cloud" data-cloud="8"></div>
      <div class="cloud" data-cloud="9"></div>
      <div class="cloud" data-cloud="10"></div>
      <div class="cloud" data-cloud="11"></div>
      <div class="cloud" data-cloud="12"></div>`;

	let anim_element = document.getElementById("anim");
	anim_element.innerHTML = `` ;
	
	page1.dataset.season = "s-1896";
	header1.dataset.header = "s-1896";
	description1.dataset.description = "s-1896";
	header1.innerHTML = summerHost[0];
	description1.innerHTML = summerDescription[0];
	flagL1.src =  summerImage[0];
	flagR1.src =  summerImage[0];


	page2.dataset.season = "r-1896";
	header2.dataset.header = "r-1896";
	description2.dataset.description = "r-1896";
	header2.innerHTML = summerHost[1];
	description2.innerHTML = summerDescription[1];
	description2s.innerHTML = summerDescription[10];
	description2p.innerHTML = summerDescription[15];
	podium1.src =  summerImage[5];


	page3.dataset.season = "s-1900";
	header3.dataset.header = "s-1900";
	description3.dataset.description = "s-1900";
	header3.innerHTML = summerHost[2];
	description3.innerHTML = summerDescription[2];
	flagL2.src =  summerImage[1];
	flagR2.src =  summerImage[1];
	

	page4.dataset.season = "r-1900";
	header4.dataset.header = "r-1900";
	description4.dataset.description = "r-1900";
	header4.innerHTML = summerHost[3];
	description4.innerHTML = summerDescription[3];
	description4s.innerHTML = summerDescription[11];
	description4p.innerHTML = summerDescription[16];
	podium2.src =  summerImage[6];


	page5.dataset.season = "s-1948";
	header5.dataset.header = "s-1948";
	description5.dataset.description = "s-1948";
	header5.innerHTML = summerHost[4];
	description5.innerHTML = summerDescription[4];
	flagL3.src =  summerImage[2];
	flagR3.src =  summerImage[2];
	

	page6.dataset.season = "r-1948";
	header6.dataset.header = "r-1948";
	description6.dataset.description = "r-1948";
	header6.innerHTML = summerHost[5];
	description6.innerHTML = summerDescription[5];
	description6s.innerHTML = summerDescription[12];
	description6p.innerHTML = summerDescription[17];
	podium3.src =  summerImage[7];

	

	page7.dataset.season = "s-2000";
	header7.dataset.header = "s-2000";
	description7.dataset.description = "s-2000";
	header7.innerHTML = summerHost[6];
	description7.innerHTML = summerDescription[6];
	flagL4.src =  summerImage[3];
	flagR4.src =  summerImage[3];
	

	page8.dataset.season = "r-2000";
	header8.dataset.header = "r-2000";
	description8.dataset.description = "r-2000";
	header8.innerHTML = summerHost[7];
	description8.innerHTML = summerDescription[7];
	description8s.innerHTML = summerDescription[13];
	description8p.innerHTML = summerDescription[18];
	podium4.src =  summerImage[8];


	page9.dataset.season = "s-2020";
	header9.dataset.header = "s-2020";
	description9.dataset.description = "s-2020";
	header9.innerHTML = summerHost[8];
	description9.innerHTML = summerDescription[8];
	flagL5.src =  summerImage[4];
	flagR5.src =  summerImage[4];
	

	page10.dataset.season = "r-2020";
	header10.dataset.header = "r-2020";
	description10.dataset.description = "r-2020";
	header10.innerHTML = summerHost[9];
	description10.innerHTML = summerDescription[9];
	description10s.innerHTML = summerDescription[14];
	description10p.innerHTML = summerDescription[19];
	podium5.src =  summerImage[9];
}

function winter() {
	
	main.dataset.main = "winter";

	let clo_element = document.getElementById("clo")
	clo_element.innerHTML= `` ;

	let anim_element = document.getElementById("anim");
	anim_element.innerHTML += 	
	`<div class="snow s1"></div>
    <div class="snow s2"></div>
    <div class="snow s3"></div>
    <div class="snow s4"></div>
    <div class="snow s5"></div>
    <div class="snow s5"></div>
    <div class="snow s6"></div>
    <div class="snow s7"></div>
    <div class="snow s8"></div>
    <div class="snow s9"></div>
    <div class="snow s10"></div>
    <div class="snow s11"></div>
    <div class="snow s12"></div>
    <div class="snow s13"></div>
    <div class="snow s14"></div>
    <div class="snow s15"></div>
    <div class="snow s16"></div>` ;

	page1.dataset.season = "w-1924";
	header1.dataset.header = "w-1924";
	description1.dataset.description = "w-1924";
	header1.innerHTML = winterHost[0];
	description1.innerHTML = winterDescription[0];
	flagL1.src =  winterImage[0];
	flagR1.src =  winterImage[0];

	page2.dataset.season = "r-1924";
	header2.dataset.header = "r-1924";
	description2.dataset.description = "r-1924";
	header2.innerHTML = winterHost[1];
	description2.innerHTML = winterDescription[1];
	description2s.innerHTML = winterDescription[10];
	description2p.innerHTML = winterDescription[15];
	podium1.src =  winterImage[5];
	

	page3.dataset.season = "w-1936";
	header3.dataset.header = "w-1936";
	description3.dataset.description = "w-1936";
	header3.innerHTML = winterHost[2];
	description3.innerHTML = winterDescription[2];
	flagL2.src =  winterImage[1];
	flagR2.src =  winterImage[1];
	

	page4.dataset.season = "r-1936";
	header4.dataset.header = "r-1936";
	description4.dataset.description = "r-1936";
	header4.innerHTML = winterHost[3];
	description4.innerHTML = winterDescription[3];
	description4s.innerHTML = winterDescription[11];
	description4p.innerHTML = winterDescription[16];
	podium2.src =  winterImage[6];

	

	page5.dataset.season = "w-1948";
	header5.dataset.header = "w-1948";
	description5.dataset.description = "w-1948";
	header5.innerHTML = winterHost[4];
	description5.innerHTML = winterDescription[4];
	flagL3.src =  winterImage[2];
	flagR3.src =  winterImage[2];

	

	page6.dataset.season = "d-1948";
	header6.dataset.header = "d-1948";
	description6.dataset.description = "d-1948";
	header6.innerHTML = winterHost[5];
	description6.innerHTML = winterDescription[5];
	description6s.innerHTML = winterDescription[12];
	description6p.innerHTML = winterDescription[17];
	podium3.src =  winterImage[7];

	

	page7.dataset.season = "w-1984";
	header7.dataset.header = "w-1984";
	description7.dataset.description = "w-1984";
	header7.innerHTML = winterHost[6];
	description7.innerHTML = winterDescription[6];
	flagL4.src =  winterImage[3];
	flagR4.src =  winterImage[3];
	

	page8.dataset.season = "r-1984";
	header8.dataset.header = "r-1984";
	description8.dataset.description = "r-1984";
	header8.innerHTML = winterHost[7];
	description8.innerHTML = winterDescription[7];
	description8s.innerHTML = winterDescription[13];
	description8p.innerHTML = winterDescription[18];
	podium4.src =  winterImage[8];
	

	page9.dataset.season = "w-2022";
	header9.dataset.header = "w-2022";
	description9.dataset.description = "w-2022";
	header9.innerHTML = winterHost[8];
	description9.innerHTML = winterDescription[8];
	flagL5.src =  winterImage[4];
	flagR5.src =  winterImage[4];
	
	
	page10.dataset.season = "r-2022";
	header10.dataset.header = "r-2022";
	description10.dataset.description = "r-2022";
	header10.innerHTML = winterHost[9];
	description10.innerHTML = winterDescription[9];
	description10s.innerHTML = winterDescription[14];
	description10p.innerHTML = winterDescription[19];
	podium5.src =  winterImage[9];
}

function change() {
	var change = document.getElementById("change");
	var txt = document.getElementById("textbox");
	if (change.checked == true) {
		winter();
		clo.style.animationPlayState = "paused";
		txt.innerHTML="<h4>SWITCH TO SUMMER</h4>";
		t2.innerHTML='<a href="#page1">1924</a>';
		t3.innerHTML='<a href="#page3">1936</a>';
		t4.innerHTML='<a href="#page5">1948</a>';
		t5.innerHTML='<a href="#page7">1984</a>';
		t6.innerHTML='<a href="#page9">2022</a>';
		
	}
	else {
		summer();
		clo.style.animationPlayState = "running";
		txt.innerHTML="<h4>SWITCH TO WINTER</h4>";
		t2.innerHTML='<a href="#page1">1896</a>';
		t3.innerHTML='<a href="#page3">1900</a>';
		t4.innerHTML='<a href="#page5">1948</a>';
		t5.innerHTML='<a href="#page7">2000</a>';
		t6.innerHTML='<a href="#page9">2021</a>';
	}
}

document.getElementById('slider').addEventListener('mousewheel', function(e) {
	this.scrollLeft -= (e.wheelDelta);
	e.preventDefault();
  }, false);