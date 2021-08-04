document.getElementById('reset').addEventListener('click', reset);
document.getElementById("howto").onclick = sweetalert;

function sweetalert() {
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: "ขออภัย! ฟีเจอร์นี้ยังไม่เปิดให้ใช้งาน"
})
}

// ContentBx A หน่วยความยาว
document.getElementById('convertA_1').addEventListener('click', mile_to_kilometer);
document.getElementById('reconvertA_1').addEventListener('click', kilometer_to_mile);

document.getElementById('convertA_2').addEventListener('click', kilometer2_to_metre);
document.getElementById('reconvertA_2').addEventListener('click', meter_to_kilometer2);

document.getElementById('convertA_3').addEventListener('click',  metre2_to_foot);
document.getElementById('reconvertA_3').addEventListener('click', foot_to_metre2);

document.getElementById('convertA_4').addEventListener('click',  foot2_to_inch);
document.getElementById('reconvertA_4').addEventListener('click', inch_to_foot2);

document.getElementById('convertA_5').addEventListener('click',  inch2_to_centimeter);
document.getElementById('reconvertA_5').addEventListener('click', centimeter_to_inch2);

document.getElementById('convertA_6').addEventListener('click',  centimeter2_to_millimeter);
document.getElementById('reconvertA_6').addEventListener('click', millimeter_to_centimeter2);


// ContentBx B หน่วยปริมาตร
document.getElementById('convertB_1').addEventListener('click',  cubicmeter_to_gallon);
document.getElementById('reconvertB_1').addEventListener('click', gallon_to_cubicmeter);

document.getElementById('convertB_2').addEventListener('click',  gallon2_to_liter);
document.getElementById('reconvertB_2').addEventListener('click', liter_to_gallon2);

document.getElementById('convertB_3').addEventListener('click',  liter2_to_pine);
document.getElementById('reconvertB_3').addEventListener('click', pine_to_liter2);

document.getElementById('convertB_4').addEventListener('click',  pine2_to_oz);
document.getElementById('reconvertB_4').addEventListener('click', oz_to_pine2);

document.getElementById('convertB_5').addEventListener('click',  oz2_to_centiliter);
document.getElementById('reconvertB_5').addEventListener('click', centiliter_to_oz2);

document.getElementById('convertB_6').addEventListener('click',  centiliter2_to_milliliter);
document.getElementById('reconvertB_6').addEventListener('click', milliliter_to_centiliter2);

// ContentBx C หน่วยเวลา
document.getElementById('convertC_1').addEventListener('click',  year_to_month);
document.getElementById('reconvertC_1').addEventListener('click', month_to_year);

document.getElementById('convertC_2').addEventListener('click',  month2_to_week);
document.getElementById('reconvertC_2').addEventListener('click', week_to_month2);

document.getElementById('convertC_3').addEventListener('click',  week2_to_day);
document.getElementById('reconvertC_3').addEventListener('click', day_to_week2);

document.getElementById('convertC_4').addEventListener('click',  day2_to_hour);
document.getElementById('reconvertC_4').addEventListener('click', hour_to_day2);

document.getElementById('convertC_5').addEventListener('click',  hour2_to_minute);
document.getElementById('reconvertC_5').addEventListener('click', minute_to_hour2);

document.getElementById('convertC_6').addEventListener('click',  minute2_to_second);
document.getElementById('reconvertC_6').addEventListener('click', second_to_minute2);