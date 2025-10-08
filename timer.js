const button = document.querySelector('button');
let seconds = 0;
let timer = null;
const secondsDisplay = document.querySelector('.seconds h1');
const secondsLog = document.querySelector('#sessions p')
secondsData= [];

function onClick() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            console.log(seconds); // DEBUGGING PURPOSES
            secondsDisplay.textContent = seconds;
        }, 800);
    }
}

function stop() {
    clearInterval(timer);
    timer = null;
    console.log(`Timer stopped at ${seconds} seconds`); //DEBUGGING PURPOSES
    secondsDisplay.textContent = seconds;
}

function reset() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    secondsDisplay.textContent = seconds;
}

function save() {
    secondsData.push(seconds);
    console.log(secondsData); // DEBUGGING PURPOSE
    secondsLog.textContent = secondsData.join(", ");
};
