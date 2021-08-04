let input_quantity = document.getElementById("input_quantity");
let input_price = document.getElementById("input_price");
let result_sum = document.getElementById("result_sum");
let input_money = document.getElementById("input_money");
let sum;
let result_change = document.getElementById("result_change");
let form2 = document.getElementById("form2");
let button = document.getElementById("button").onclick = function() {sum_out()};

input_money.onkeyup = function() {check()};
input_money.onblur = function() {check()};

function sum_out() {
    sum = input_quantity.value * input_price.value;
    result_sum.innerHTML = sum;
    form2.style.display = "block";
}

function check() {
    if (input_money.value = sum) {
        result_change.innerHTML = "ไม่มีเงินทอน";
        if(input_money.value < sum) {
            result_change.innerHTML = "จ่ายเงินไม่ครบ";
        }
    }
    else if (input_money.value > sum) {
        result_change.innerHTML = input_money.value - sum;
    }
}





