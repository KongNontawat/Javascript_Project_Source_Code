let score = prompt("กรอกคะแนนของคุณ");
if (score >= 80) {
    document.getElementById("resuit").innerHTML = "คุณได้เกรด A";
} else if (score >= 70) {
    document.getElementById("resuit").innerHTML = "คุณได้เกรด B";
} else if (score >= 60) {
    document.getElementById("resuit").innerHTML = "คุณได้เกรด D";
} else if (score >= 50) {
    document.getElementById("resuit").innerHTML = "คุณได้เกรด C";
} else {
    document.getElementById("resuit").innerHTML = "คุณได้เกรด F";
}