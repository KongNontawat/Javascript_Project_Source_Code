document.getElementById("howto").onclick = function() {toggle()};
document.getElementById("close_popup").onclick = function() {toggle(), close()};

function toggle() {
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");

    let blur2 = document.getElementById("blur2");
    blur2.classList.toggle("active");

    let popup = document.getElementById("popup");
    popup.classList.toggle("active");
    popup.style.display = "block";

    let close_popup = document.getElementById("close_popup");
    close_popup.classList.toggle("active");  
}

function close() {
    let popup = document.getElementById("popup");
    popup.classList.toggle("active");
    popup.style.display = "none";
}



