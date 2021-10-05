var summerHost = [
    `1896 Athens (First Summer Olympic)`,
]

var summerDescription = [
    `ครั้งที่ 1<br>
    เมือง : เอเธนส์ ประเทศ : กรีซ<br>
    วันที่จัด : 6 - 15 เมษายน 1896<br>
    จำนวนประเทศที่เข้าร่วม : 13<br>
    กีฬา : 43 รายการ 9 ชนิด<br>
    จำนวนนักกีฬา : 311 ชาย 311 หญิง 0`,
]

var summerHistory = [
    `การแข่งขันโอลิมปิกมีขึ้นที่ยุโรปเป็นครั้งแรก
    โดยกีฬาโอลิมปิกสมัยใหม่ได้ถูกจัดขึ้นเป็นครั้งแรกในปี 1896
    หลังจากที่การแข่งขันกีฬาโอลิมปิกได้หยุดไปเป็นเวลานาน โดยจัดขึ้นที่กรุงเอเธนส์
    ประเทศกรีซ ที่สนามกีฬา Olympic Stadium ซึ่งได้ถูกทำลายไปโดยทหารฝรั่งเศส`,
]

var winterHost = [
    `1924 France (First Winter Olympic)`,
]

var winterDescription = [
    `การแข่งขันกีฬาในระดับนานาชาติ ของกีฬาฤดูหนาวนั้น
    มีการจัดอยู่ก่อนแล้วในชื่อของ นอร์ดิกเกมส์ (Nordic Games)
    ซึ่งควบคุมดูแลโดย นายพล Viktor Gustaf Balck และมีการจัดการแข่งขันขึ้นที่
    กรุงสตอกโฮล์ม ประเทศสวีเดนในปี ค.ศ. 1901, 1903 และ 1905
    ก่อนจะเปลี่ยนเป็นจัดการแข่งขันทุก ๆ 4 ปี จนถึงปี ค.ศ 1926`,
]

var h = document.getElementById("host");
var d = document.getElementById("description");
var s = document.getElementById("story");

function summer() {
    main.dataset.main = 'summer';

    season1.dataset.season = 's-1896';
    season1.dataset.year = 's-1896';
    h.innerHTML = summerHost[0];
    d.innerHTML = summerDescription[0];
    season12.dataset.season = 's-1896';
    season12.dataset.year = 's-1896';
    s.innerHTML = summerHistory[0];

    season2.dataset.season = 'summer';
    season22.dataset.season = 'summer';
    season3.dataset.season = 'summer';
    season32.dataset.season = 'summer';
    season4.dataset.season = 'summer';
    season42.dataset.season = 'summer';
    season5.dataset.season = 'summer';
    season52.dataset.season = 'summer';
    footer.dataset.footerseason = 'summer';
}

function winter() {
    main.dataset.main = 'winter';
    season1.dataset.season = 'winter';
    season1.dataset.year = 'w-1924';
    h.innerHTML = winterHost[0];
    d.innerHTML = winterDescription[0];
    season12.dataset.season = 'winter';
    season2.dataset.season = 'winter';
    season22.dataset.season = 'winter';
    season3.dataset.season = 'winter';
    season32.dataset.season = 'winter';
    season4.dataset.season = 'winter';
    season42.dataset.season = 'winter';
    season5.dataset.season = 'winter';
    season52.dataset.season = 'winter';
    footer.dataset.footerseason = 'winter';

}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        athlete.style.backgroundImage = "url('https://media.discordapp.net/attachments/871977129376616459/886628120113844254/image2_1.gif')";
    }
    if (event.key === 'ArrowLeft') {
        athlete.style.backgroundImage = "url('https://media.discordapp.net/attachments/871977129376616459/894723788846030878/ezgif.com-gif-maker.gif')";
    }
  });