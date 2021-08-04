
let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ");
let result_lotto = Math.floor(Math.random() *1000000);
document.getElementById("result_number").innerHTML = lotto_number;
document.getElementById("result_lotto").innerHTML = result_lotto;

if (lotto_number != result_lotto) {
    document.getElementById("sad").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัล";
} else {
    document.getElementById("win").innerHTML = "ยินดีด้วย คุณถูกรางวัล";
};
