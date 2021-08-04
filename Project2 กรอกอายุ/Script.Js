let age = prompt("กรุณากรอกอายุ");
if(age > 13) {
    console.log("Hello");
    document.getElementById("content").innerHTML = "เข้าชมได้";
} else {
    document.getElementById("no").innerHTML = "เว็บไซตนี้มีเนื้อหารุนแรง ต้องอายุมากกว่า13ปีจึงจะเข้าชมได้";
}
