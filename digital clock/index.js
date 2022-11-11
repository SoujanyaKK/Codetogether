function currTime(){
    var date=new Date();
    var h = date.getHours();        //0-23 - default value
    var m = date.getMinutes();      //0-59
    var s = date.getSeconds();      //0-59
    var session = "AM";

// h = 0 => 12
if(h === 0){
    h=12;
}

// h > 12 => session => "PM"
if(h > 12){
    h = h-12;
    session = "PM";
}

// describing hour , sec and minutes to double digits
h = (h<10) ? "0"+h : h;
m = (m<10) ? "0"+m : m;
s = (s<10) ? "0"+s : s;

//var time = h+":"+m+":"+s+""+session
var time = `${h}:${m}:${s} ${session}`;  //00:00:00 am/pm

document.getElementById("digitalClock").innerText = time;
document.getElementById("digitalClock").textContent = time;

setTimeout(currTime, 1000);
}

currTime();

