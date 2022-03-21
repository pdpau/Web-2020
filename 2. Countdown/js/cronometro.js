/* Declare variables */
const minsElement = document.getElementById('mins'),
    secsElement = document.getElementById('secs'),
    centsElement = document.getElementById('cents');

const startBtn = document.getElementById('startBtn'),
    stopBtn = document.getElementById('stopBtn'),
    resumeBtn = document.getElementById('resumeBtn'),
    resetBtn = document.getElementById('resetBtn');

var mins = 0;
var secs = 0;
var cents = 0;

var running = null;

function showTheTime() {
    minsElement.innerHTML = mins;
    secsElement.innerHTML = secs;
    centsElement.innerHTML = cents;
}

function startClick() {
    const addMins = () => {
        if (mins < 99) {
            mins++;
        }
    }

    const addSecs = () => {
        if (secs === 59) {
            secs = 0;
            addMins();
        } else {
            secs++;
        }
    }

    const addCents = () => {
        if (cents === 99) {
            cents = 0;
            addSecs();
        } else {
            cents++;
        }
        showTheTime();
    }

    running = setInterval(addCents, 10);

    disappear(startBtn);
    appear(stopBtn);
}

function stopClick() {
    clearInterval(running);
    running = null;

    disappear(stopBtn);
    appear(resumeBtn);
    appear(resetBtn);
}

function resumeClick() {
    startClick();

    disappear(resetBtn);
    disappear(resumeBtn);
    appear(stopBtn);
}

function resetClick() {
    mins = 0;
    secs = 0;
    cents = 0;
    showTheTime();

    disappear(resumeBtn);
    disappear(resetBtn);
    appear(startBtn);
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