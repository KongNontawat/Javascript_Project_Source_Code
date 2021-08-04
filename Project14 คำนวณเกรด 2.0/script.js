var scoreP = document.getElementById("scoreP");
var scoreM = document.getElementById("scoreM");
var sum_button = document.getElementById("sum_button");
var clear_button = document.getElementById("clear_button");
var Total_result = document.getElementById("total_result");
var grade_result = document.getElementById("grade_result");
var sum = "0";

function total_function() {
    sum = parseInt(scoreM.value) + parseInt(scoreP.value);
    Total_result.innerHTML = sum;
}

function clear_form() {
    window.location.reload();;
}

function grade() {
    if (sum > 100) {
        grade_result.innerHTML = "คะแนนเกิน Error!!";
    } else if (sum >= 80) {
        grade_result.innerHTML = "4";
    } else if (sum >= 70) {
        grade_result.innerHTML = "3";
    } else if (sum >= 60) {
        grade_result.innerHTML = "2";
    } else if (sum >= 50) {
        grade_result.innerHTML = "1";
    } else {
        grade_result.innerHTML = "0";
    }
}

sum_button.onclick = function(){total_function(), grade()};
clear_button.onclick = clear_form;