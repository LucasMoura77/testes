let seconds = new Date().getSeconds()
let boxSeconds = window.document.querySelector('div.box-ponteiro-sec')
let rotateS = seconds * 6
boxSeconds.style.transform=`rotate(${rotateS}deg)`
setInterval(function secondsAt(){
    seconds += 1
    if(seconds == 60){
        seconds = 0
    }
    rotateS = seconds * 6
    boxSeconds.style.transform=`rotate(${rotateS}deg)`
    if(rotateS == 360){
        rotateS = 0
    }
},1000)

let minutes = new Date().getMinutes()
let boxMinutes = window.document.querySelector('div.box-ponteiro-min')
let rotateM = (minutes * 60) * 0.10
boxMinutes.style.transform=`rotate(${rotateM}deg)`
let hour = new Date().getHours()
let boxHour = window.document.querySelector('div.box-ponteiro-hour')
let rotateH = ((hour * 60) * 60) * 0.0083333333333333
boxHour.style.transform=`rotate(${rotateH}deg)`
let horaAtual = window.document.querySelector('div.Hour')

function twoDigits(digit){
    if(digit < 10){
        return ('0' + digit)
    }else{
        return (digit)
    }
}

setInterval(function AtualizaHora(){
    seconds = new Date().getSeconds()
    minutes = new Date().getMinutes()
    hora = new Date().getHours()
    horaAtual.textContent=`${twoDigits(hora)}:${twoDigits(minutes)}:${twoDigits(seconds)}`
},1000)


