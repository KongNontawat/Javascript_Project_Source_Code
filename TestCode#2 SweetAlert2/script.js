
const button = document.getElementById("button");
button.onclick = fun_alert;

function fun_alert() {
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
    )
}