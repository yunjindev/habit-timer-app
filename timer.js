const button = document.querySelector('button');
let seconds = 0;
let timer = null;


function onClick() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            console.log(seconds);
        }, 1000);
    }
}