const homeButton = document.querySelector('#home');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const watchFace = document.querySelector('.watch');
const milis = document.querySelector('.milisecs');
const secs = document.querySelector('.secs');
const mins = document.querySelector('.mins');
const timerButton = document.querySelector('.tim');

homeButton.addEventListener('click', () => {
    window.location.reload();
})

timerButton.addEventListener('click', () => {
    window.location.href = "./timer.html";
})

let onceClicked = false;

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

    let miliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let intervalID;

function start(){
    startButton.removeEventListener('click', start);
    intervalID = setInterval(()=>{
        miliseconds+=10;
        if(miliseconds==1000){
            seconds+=1;
            miliseconds=0;
        }
        if(seconds==60){
            minutes+=1;
            seconds=0;
        }
        milis.innerText = miliseconds/10;
    
        if(seconds<10)secs.innerText = '0'+seconds;
        else secs.innerText = seconds;
    
        if(minutes<10) mins.innerText = '0' + minutes;
        else mins.innerText = minutes;
    },10);
}

function stop(){
    clearInterval(intervalID);
    startButton.addEventListener('click', start);
}

function reset(){
    window.location.reload();
}




