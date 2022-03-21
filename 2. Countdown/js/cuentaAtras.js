/* Declare variables */
const minsElement = document.getElementById('mins'),
    secsElement = document.getElementById('secs'),
    centsElement = document.getElementById('cents');
    
    
const startBtn = document.getElementById('startBtn'),
    stopBtn = document.getElementById('stopBtn'),
    resumeBtn = document.getElementById('resumeBtn'),
    resetBtn = document.getElementById('resetBtn');
    
var inputElement = document.getElementById('inputValue');

var mins = 0;
var secs = 0;
var cents = 0;

var running = null;

function showTheTime() {
    minsElement.innerHTML = mins;
    secsElement.innerHTML = secs;
    centsElement.innerHTML = cents;
}

function startClick(number) {
    if (number === 1) {
        mins = Math.round(inputElement.value); /* Math.round to only get Integers */
    }

    if (inputElement.value === "" || inputElement.value > 99 || inputElement.value < 1) {
        alert("Please, introduce a number from 1 to 99");
    } else {
        const substractMins = () => {
            if (mins < 99 && mins > 0) {
                mins--;
            } else {
                mins = 0;
            }
        }
    
        const substractSecs = () => {
            if (secs === 0) {
                secs = 59;
                substractMins();
            } else {
                secs--;
            }
        }
    
        const substractCents = () => {
            if (cents === 0) {
                cents = 99;
                substractSecs();
            } else {
                cents--;
            }
            showTheTime();
        }
    
        running = setInterval(substractCents, 10);
    
        disappear(startBtn);
        appear(stopBtn);

        /* Input disappears */
        inputElement.disabled = true;
        inputElement.style.opacity = "0";
        inputElement.classList.add('inputTransition');
    }
}

function stopClick() {
    clearInterval(running);
    running = null;

    disappear(stopBtn);
    appear(resumeBtn);
    appear(resetBtn);
}

function resumeClick() {
    startClick(0);

    disappear(resetBtn);
    disappear(resumeBtn);
    appear(stopBtn);
}

function resetClick() {
    if (inputElement.value === "" || inputElement.value > 99 || inputElement.value < 1) {
        mins = 0;
    } else {
        mins = Math.round(inputElement.value);
    }

    secs = 0;
    cents = 0;
    showTheTime();

    disappear(resumeBtn);
    disappear(resetBtn);
    appear(startBtn);

    /* Input appears */
    inputElement.disabled = false;
    inputElement.style.opacity = "1";
    inputElement.classList.add('inputTransition');
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