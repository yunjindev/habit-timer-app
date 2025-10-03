const button = document.querySelector('button');
let seconds = 0;
let timer = null;
const secondsDisplay = document.querySelector('.seconds h1');

function onClick() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            console.log(seconds); // DEBUGGING PURPOSES
        }, 1000);
    }
}

function stop() {
    clearInterval(timer);
    timer = null;
    console.log(`Timer stopped at ${seconds} seconds`); //DEBUGGING PURPOSES
}