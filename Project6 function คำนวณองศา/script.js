function tocelsius() {
    let fahrenheit = prompt("กรอก Fahrenheit");
    let celsius = (fahrenheit - 32)*5/9;
    document.getElementById("celsiud").innerHTML = fahrenheit + " F = " + celsius.toFixed(2) + " C" + "<br>";
}

function tofahrenheit() {
    let celsius = prompt("กรอก Celsius");
    let fahrenheit = (celsius * 9/5)+32;
    document.getElementById("celsiud").innerHTML += celsius + " C = " + fahrenheit.toFixed(2) + " F";
}
tocelsius()
tofahrenheit()