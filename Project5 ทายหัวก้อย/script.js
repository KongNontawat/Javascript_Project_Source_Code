let input_round = prompt("ใส่จำนวนรอบที่ต้องการเล่น :");
for (let i = 1; i <= input_round; i++) {
    var input_answer = prompt("หัว หรือ ก้อย พิมพ์มาเลย!!");
    var random = Math.floor(Math.random()*10);
    var answer = "";
    if (random <= 4) {
        answer = "หัว";
    } else {
        answer = "ก้อย";
    }

    if (input_answer === answer) {
        document.getElementById("answer").innerHTML += input_answer + " : " + answer + "  ถูกต้อง" + "<br>";
    } else {
        document.getElementById("answer").innerHTML += input_answer + " : " + answer + "  ไม่ถูก" + "<br>";
    }
}