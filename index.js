let startsBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let hour = 0;
let mint = 0;
let sec = 0;
let count = 0;

startsBtn.addEventListener("click", function () {
    timer = true;
    stopWatch();
})
stopBtn.addEventListener("click", function () {
    timer = false;
})
resetBtn.addEventListener("click", function () {
    timer = false;
    hour = 0;
    mint = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
})
function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            mint++;
            sec = 0;
        }
        if (mint == 60) {
            hour++;
            mint = 0;
            sec = 0;
        }

        let hrString = hour;
        let minString = mint;
        let secString = sec;
        let countString = count;
        if (hour < 10) {
            hrString = "0" + hrString;
        }
        if (mint < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }
        if (count < 10) {
            countString = "0" + countString;
        }
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}