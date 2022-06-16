const mins1Up = document.querySelector('#mins1up');
const mins2Up = document.querySelector('#mins2up');
const secs1Up = document.querySelector('#secs1up');
const secs2Up = document.querySelector('#secs2up');
const mins1Down = document.querySelector('#mins1down');
const mins2Down = document.querySelector('#mins2down');
const secs1Down = document.querySelector('#secs1down');
const secs2Down = document.querySelector('#secs2down');

const minuteField = document.querySelector('.mins');
const secondsField = document.querySelector('.secs');

const homeButton = document.querySelector('#home');

const resetButton = document.querySelector('.reset');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const stopWatchButton = document.querySelector('.ret');

stopWatchButton.addEventListener('click', () => {
    window.location.href = "./index.html"
})

const sfx = {
    finished: new Howl({
        src: "./timer-finish.mp3"
    })
}

let minutes = 0;
let seconds = 0;

function applyChanges(){
    if(minutes < 10) minuteField.innerText = '0' + minutes;
    else minuteField.innerText = minutes;
    if(seconds < 10) secondsField.innerText = '0' + seconds;
    else secondsField.innerText = seconds;
}

//Up Arrows

mins1Up.addEventListener('click', () => {
    if(minutes > 50) return;
    minutes += 10;
    applyChanges();
})

mins2Up.addEventListener('click', () => {
    if(minutes > 59) return;
    minutes += 1;
    applyChanges();
})

secs1Up.addEventListener('click', () => {
    if(seconds > 49) return;
    seconds += 10;
    applyChanges();
})

secs2Up.addEventListener('click', () => {
    if(seconds > 58) return;
    seconds += 1;
    applyChanges();
})

//Down Arrows

mins1Down.addEventListener('click', () => {
    if(minutes < 10) return;
    minutes -= 10;
    applyChanges();
})

mins2Down.addEventListener('click', () => {
    if(minutes < 1) return;
    minutes -= 1;
    applyChanges();
})

secs1Down.addEventListener('click', () => {
    if(seconds < 10) return;
    seconds -= 10;
    applyChanges();
})

secs2Down.addEventListener('click', () => {
    if(seconds < 1) return;
    seconds -= 1;
    applyChanges();
})

resetButton.addEventListener('click', () => {
    window.location.reload();
})

homeButton.addEventListener('click', () =>{
    window.location.reload();
})

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);

let myInterval;

function start(){
    if(minutes == 0 && seconds == 0) return;
    startButton.removeEventListener('click', start);
    myInterval = setInterval(() => {
        if(minutes == 0 && seconds == 0){
            sfx.finished.play();
            clearInterval(myInterval);
            alert("Countdown finished! 😎");
            window.location.reload();
        } 
        if(seconds > 0){
            seconds -= 1;
        }
        else{
            if(minutes > 0){
                minutes -= 1;
                seconds = 59;
            }
            else seconds = 59;
        }
        applyChanges();
    }, 1000)
}

function stop(){
    startButton.addEventListener('click', start);
    clearInterval(myInterval);
}