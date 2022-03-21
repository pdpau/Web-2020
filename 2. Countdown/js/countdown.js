/* File to control the countdown and the buttons */

/* Declare variables */
var setTime;

const number = document.getElementById('number'),
    input = document.getElementById('inputValue');

const startBtn = document.getElementById('startBtn'),
    stopBtn = document.getElementById('stopBtn'),
    resumeBtn = document.getElementById('resumeBtn'),
    resetBtn = document.getElementById('resetBtn');


function startClick(value) {
    if (value < 0) {
        return;
    }
    number.innerHTML = value;
    console.log(value);
    setTime = setTimeout (() => {startClick(value - 1)}, 1000);

    disappear(startBtn);
    appear(stopBtn);

    /* Input disappears */
    input.disabled = true;
    input.style.opacity = "0";
    input.classList.add('inputTransition');
}

function stopClick() {
    clearTimeout(setTime);

    disappear(stopBtn);
    appear(resumeBtn);
    appear(resetBtn);
}

function resumeClick(value) {
    stopClick();
    number.innerHTML = value;
    startClick(value); /* Or (value - 1) */

    disappear(resetBtn);
    disappear(resumeBtn);
}

function resetClick(value) {
    stopClick();
    number.innerHTML = value;

    appear(startBtn);
    disappear(resumeBtn);
    disappear(resetBtn);

    /* Input appears */
    input.disabled = false;
    input.style.opacity = "1";
    input.classList.add('inputTransition'); /* Make 2 transitions */
}

function disappear(btn) {
    btn.style.opacity = "0";
    btn.classList.add('transition');
    setTimeout(function() {
        btn.style.display = "none";
    }, 300);
}

function appear(btn) {
    btn.style.opacity = "1";
    btn.classList.add('transition');
    setTimeout(function() {
        btn.style.display = "block";
    }, 300);
}

/* Optional function to do a delay if needed */
function delay(millis) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}