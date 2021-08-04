
function removeElement() {
    document.getElementById("contentBx").style.display = "none";
    document.getElementById("contentBx2").style.display = "block";
}

function brightday_input () {
    var result = brightday.value;
    document.getElementById("bright_output").innerHTML = result;
}
function number_input () {
    var result = number.value;
    document.getElementById("number_output").innerHTML = result;
}

function link () {
    window.open("https://lotto.postjung.com/")
}


function Random1(min_val, max_val) {
    return Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
}
var output3 = Random1(100, 999);
var output6 = Random1(100000, 999999);
document.getElementById("result1").innerHTML = output3;
document.getElementById("result2").innerHTML = output6;

function Random2(min_val, max_val) {
    return Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
}
var output1 = Random2(100, 999);
var output2 = Random2(100000, 999999);
document.getElementById("result3").innerHTML = output1;
document.getElementById("result4").innerHTML = output2;


