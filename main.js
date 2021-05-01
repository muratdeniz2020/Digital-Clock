function updateTime(){

const currentTime = new Date();

let h = currentTime.getHours();
let m = currentTime.getMinutes();
let s = currentTime.getSeconds();
var period = 'AM';

if(h > 12){
    h = h - 12;
    period = 'PM';
}

if(h == 0){
    h = 12;
}

if(h < 10){
    h = "0" + h;
}
if(m < 10){
    m = "0" + m;
}
if(s < 10){
    s = "0" + s;
}


document.getElementById('hour').innerHTML = h + ":";
document.getElementById('min').innerHTML = m + ":";
document.getElementById('sec').innerHTML = s ;
document.getElementById('period').innerHTML = " " + period ;

}

setInterval(updateTime,500);

