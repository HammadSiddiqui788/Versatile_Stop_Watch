var min = 0;
var sec = 0;
var msec = 0;

var minH = document.getElementById("min");
var secH = document.getElementById("sec");
var msecH = document.getElementById("msec");
var startButton = document.getElementById("start");

var interval;

function timer(){
    msec++
    msecH.innerHTML = msec;
    if(msec >= 100){
        msec=0;
        sec++;
        secH.innerHTML =sec
    }else if(sec >= 60){
        sec=0;
        min++;
        minH.innerHTML =min
    }
}

function start(){
    if(!interval){
        interval = setInterval(timer,10)
    }
    startButton.setAttribute("disabled",true);
    startButton.classList.add("disable")
}
function stop(){
    clearInterval(interval)
    interval = false
    startButton.removeAttribute("disabled");
    startButton.classList.remove("disable")
}
function reset(){
    msec=0;
    sec=0;
    min=0;
    
    msecH.innerHTML=0;
    secH.innerHTML=0;
    minH.innerHTML=0;
    stop()
}