let qrt = prompt("ใส่จำนวนสินค้า")
let sum = 0
for (i = 1; i <= qrt; i++) {
    let price = prompt("ใส่ราคาสินค้าชิ้นที่ " + i);
    sum = sum + parseInt(price);
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ " + i + " : " + "ราคา " + price + " บาท" + "<br>";
};

document.getElementById("resuit").innerHTML = "ราคารวม " + sum + " บาท";

