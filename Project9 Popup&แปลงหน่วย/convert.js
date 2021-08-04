function reset() {
    location.reload()
}
// ContentBx_A หน่วยความยาว
// A_1
function mile_to_kilometer() {
    let mile = document.getElementById('mile').value;
    let kilo_result = mile / 0.62437;
    document.getElementById('kilometer').value = kilo_result.toFixed(1);
}
function kilometer_to_mile() {   
    let kilometer = document.getElementById('kilometer').value;
    let mile_result = kilometer * 0.62437;
    document.getElementById('mile').value = mile_result.toFixed(1);
}

// A_2
function kilometer2_to_metre() {
    let kilometer2 = document.getElementById('kilometer2').value;
    let metre_result = kilometer2 / 0.0010000;
    document.getElementById('metre').value = metre_result.toFixed(1);
}
function meter_to_kilometer2() {
    let metre = document.getElementById('metre').value;
    let kilometer2_result = metre * 0.0010000;
    document.getElementById('kilometer2').value = kilometer2_result.toFixed(1)
}

// A_3
function metre2_to_foot() {
    let metre2 = document.getElementById('metre2').value;
    let foot_result = metre2 * 3.2808
    document.getElementById('foot').value = foot_result.toFixed(1);
}
function foot_to_metre2() {
    let foot = document.getElementById('foot').value;
    let metre2_result = foot / 3.2808
    document.getElementById('metre2').value = metre2_result.toFixed(1);
}

// A_4
function foot2_to_inch() {
    let foot2 = document.getElementById('foot2').value;
    let inch_result = foot2 * 12;
    document.getElementById('inch').value = inch_result.toFixed(1);
}
function inch_to_foot2() {
    let inch = document.getElementById('inch').value;
    let foot2_result = inch / 12;
    document.getElementById('foot2').value = foot2_result.toFixed(1);
} 

// A_5
function inch2_to_centimeter() {
    let inch2 = document.getElementById('inch2').value;
    let centimeter_result = inch2 / 0.39370
    document.getElementById('centimeter').value = centimeter_result.toFixed(1);
}
function centimeter_to_inch2() {
    let centimeter = document.getElementById('centimeter').value;
    let inch2_result = centimeter * 0.39370
    document.getElementById('inch2').value = inch2_result.toFixed(1);
}

// A_6
function centimeter2_to_millimeter() {
    let centimeter2 = document.getElementById('centimeter2').value;
    let millimeter_result = centimeter2 / 0.10000;
    document.getElementById('millimeter').value = millimeter_result.toFixed(1);
}
function millimeter_to_centimeter2() {
    let millimeter = document.getElementById('millimeter').value;
    let centimeter2_result = millimeter * 0.10000;
    document.getElementById('centimeter2').value = centimeter2_result.toFixed(1);
}


// ContentBx_B หน่วยปริมาตร
// B_1
function cubicmeter_to_gallon() {
    let cubicmeter = document.getElementById('cubicmeter').value;
    let gallon_result = cubicmeter * 264.17;
    document.getElementById('gallon').value = gallon_result.toFixed(1);
}
function gallon_to_cubicmeter() {
    let gallon = document.getElementById('gallon').value;
    let cubicmeter_result = gallon / 264.17;
    document.getElementById('cubicmeter').value = cubicmeter_result.toFixed(1);
}

// B_2
function gallon2_to_liter() {
    let gallon2 = document.getElementById('gallon2').value;
    let liter_result = gallon2 / 0.26417;
    document.getElementById('liter').value = liter_result.toFixed(1);
}
function liter_to_gallon2() {
    let liter = document.getElementById('liter').value;
    let gallon2_result = liter * 0.26417;
    document.getElementById('gallon2').value = gallon2_result.toFixed(1);
}

// B_3
function liter2_to_pine() {
    let liter2 = document.getElementById('liter2').value;
    let pine_result = liter2 * 2.1134;
    document.getElementById('pine').value = pine_result.toFixed(1);
}
function pine_to_liter2() {
    let pine = document.getElementById('pine').value;
    let liter2_result = pine / 2.1134;
    document.getElementById('liter2').value = liter2_result.toFixed(1);
}

// B_4
function pine2_to_oz() {
    let pine2 = document.getElementById('pine2').value;
    let oz_result = pine2 * 16;
    document.getElementById('oz').value = oz_result.toFixed(1);
}
function oz_to_pine2() {
    let oz = document.getElementById('oz').value;
    let pine2_result = oz / 16;
    document.getElementById('pine2').value = pine2_result.toFixed(1);
}

// B_5
function oz2_to_centiliter() {
    let oz2 = document.getElementById('oz2').value;
    let centiliter_result = oz2 / 0.033814;
    document.getElementById('centiliter').value = centiliter_result.toFixed(1);
}
function centiliter_to_oz2() {
    let centiliter = document.getElementById('centiliter').value;
    let oz2_result = centiliter * 0.033814;
    document.getElementById('oz2').value = oz2_result.toFixed(1);
}

// B_6
function centiliter2_to_milliliter() {
    let centiliter2 = document.getElementById('centiliter2').value;
    let milliliter_result = centiliter2 / 0.10000;
    document.getElementById('milliliter').value = milliliter_result.toFixed(1);
}
function milliliter_to_centiliter2() {
    let milliliter = document.getElementById('milliliter').value;
    let centiliter2_result = milliliter * 0.10000;
    document.getElementById('centiliter2').value = centiliter2_result.toFixed(1);
}


// ContentBx_C หน่วยเวลา
// C_1
function year_to_month() {
    let year = document.getElementById('year').value;
    let month_result = year * 12;
    document.getElementById('month').value = month_result;
}
function month_to_year() {
    let month = document.getElementById('month').value;
    let year_result = month / 12;
    document.getElementById('year').value = year_result;
}

// C_2
function month2_to_week() {
    let month2 = document.getElementById('month2').value;
    let week_result = month2 / 0.230136;
    document.getElementById('week').value = week_result;
}
function week_to_month2() {
    let week = document.getElementById('week').value;
    let month2_result = week * 0.230136;
    document.getElementById('month2').value = month2_result;
}

// C_3
function week2_to_day() {
    let week2 = document.getElementById('week2').value;
    let day_result = week2 * 7;
    document.getElementById('day').value = day_result;
}
function day_to_week2() {
    let day = document.getElementById('day').value;
    let week2_result = day / 7;
    document.getElementById('week2').value = week2_result;
}

// C_4
function day2_to_hour() {
    let day2 = document.getElementById('day2').value;
    let hour_result = day2 * 24;
    document.getElementById('hour').value = hour_result;
}
function hour_to_day2() {
    let hour = document.getElementById('hour').value;
    let day2_result = hour / 24;
    document.getElementById('day2').value = day2_result;
}

// C_5
function hour2_to_minute() {
    let hour2 = document.getElementById('hour2').value;
    let minute_result = hour2 * 60;
    document.getElementById('minute').value = minute_result;
}
function minute_to_hour2() {
    let minute = document.getElementById('minute').value;
    let hour2_result = minute / 60;
    document.getElementById('hour2').value = hour2_result;
}

// C_6
function minute2_to_second() {
    let minute2 = document.getElementById('minute2').value;
    let second_result = minute2 * 60;
    document.getElementById('second').value = second_result;
}
function second_to_minute2() {
    let second = document.getElementById('second').value;
    let minute2_result = second / 60;
    document.getElementById('minute2').value = minute2_result;
}