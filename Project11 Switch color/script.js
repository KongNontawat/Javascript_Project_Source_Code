document.getElementById("blue_button").onclick = switch_blue;
document.getElementById("sky_button").onclick = switch_sky;
document.getElementById("grey_button").onclick = switch_grey;
document.getElementById("pink_button").onclick = switch_pink;
document.getElementById("text").onclick = text_kuy;



var body = document.getElementById("body");

function switch_blue () {
    body.style.backgroundColor = "#364f6b";
    body.style.color = "white";
}
function switch_sky () {
    body.style.backgroundColor = "#3fc1c9";
    body.style.color = "white";
}
function switch_grey () {
    body.style.backgroundColor = "#cecece";
    body.style.color = "black";
}
function switch_pink () {
    body.style.backgroundColor = "#fc5185";
    body.style.color = "white";
}
function text_kuy () {
	document.getElementById("text_2").innerHTML = ("ควยฟิว & หมาแจ๊ค");
}
    