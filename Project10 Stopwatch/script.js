
let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let ButtonStart = document.getElementById("button_start");
let ButtonStop = document.getElementById("button_stop");
let ButtonReset = document.getElementById("button_reset");
let Interval;
    

ButtonStart.onclick = ()=> {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

ButtonStop.onclick = ()=> {
    clearInterval(Interval);
}

ButtonReset.onclick = ()=>   {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
}


function startTimer() {
    tens++

    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}
