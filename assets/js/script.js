let startButton = document.querySelector('.start-button');
let stopButton = document.querySelector('.stop-button');
let resetButton = document.querySelector('.reset-button');

let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let miliseconds = document.querySelector('.miliseconds');

let minutesInt = 00;
let secondsInt = 00;
let milisecondsInt = 00;

startButton.onclick = () => {
    stopButton.style.display = 'block';
    resetButton.style.display = 'block';
    startButton.style.display = 'none';

    timer();

    stopButton.onclick = () => {
        stopButton.style.display = 'none';
        startButton.style.display = 'block';

        clearInterval(milisecondsInterval);
    }

    resetButton.onclick = () => {
        stopButton.style.display = 'none';
        resetButton.style.display = 'none';
        startButton.style.display = 'block';

        clearInterval(milisecondsInterval);
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
        miliseconds.innerHTML = '00';
    }
}

let timer = () => {
    milisecondsInterval = setInterval(milisecondsFunction, 10);
}

function milisecondsFunction() {
    milisecondsInt++;

    if(milisecondsInt > 99) {
        secondsFunction();
        milisecondsInt = 00;
    }

    miliseconds.innerHTML = "0" + milisecondsInt;

    if(milisecondsInt > 9) {
        miliseconds.innerHTML = milisecondsInt;
    }
}

function secondsFunction() {
    secondsInt++;

    if(secondsInt > 59) {
        minutesFunction();
        secondsInt = 00;
    }

    seconds.innerHTML = "0" + secondsInt;

    if(secondsInt > 9) {
        seconds.innerHTML = secondsInt;
    }
}

function minutesFunction() {
    minutesInt++;

    if(minutesInt > 59) {
        clearInterval(milisecondsInterval);
    }

    minutes.innerHTML = "0" + minutesInt;

    if(minutesInt > 9) {
        minutes.innerHTML = minutesInt;
    }
}


