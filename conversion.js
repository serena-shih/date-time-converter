var month;
var year;
var day;

function monthSelect() {
  var e = document.getElementById("month");
  month = e.options[e.selectedIndex].value; 
  document.getElementById("demo").innerHTML = month;
  console.log("here")
}

function daySelect() {
  var e = document.getElementById("day");
  day = e.options[e.selectedIndex].value;
  document.getElementById("demo2").innerHTML = day;
}

function yearSelect() {
  var e = document.getElementById("year");
  year = e.options[e.selectedIndex].value;
  document.getElementById("demo3").innerHTML = year;
}

function outputHebrew () {
  console.log(year)
  console.log(day)
  console.log(month)
  fetch(`https://www.hebcal.com/converter?cfg=json&gy=${year}&gm=${month}&gd=${day}&g2h=1`)
  .then((res) => res.json())
  .then(function (res) {
    console.log(res.events)
    document.getElementById("demo4").innerHTML = res.events
  })
}

//Fetch link from function outputHebrew() provided by https://www.hebcal.com/, found in GetHub created by matheusfelipeog

var month;
var year;
var day;

function monthSelect() {
  var e = document.getElementById("month");//Mentor Prakhar helped with this line and the similar ones in function daySelect() and function yearSelect()!
  month = e.options[e.selectedIndex].value;//Mentor Nat helped with this line and the similar ones in function daySelect() and function yearSelect(), as well as final line of function outputHebrew!
}

function daySelect() {
  var e = document.getElementById("day");
  day = e.options[e.selectedIndex].value;
}

function yearSelect() {
  var e = document.getElementById("year");
  year = e.options[e.selectedIndex].value;
}

function outputHebrew () {
  console.log(year)
  console.log(day)
  console.log(month)
  fetch(`https://www.hebcal.com/converter?cfg=json&gy=${year}&gm=${month}&gd=${day}&g2h=1`)
  .then((res) => res.json())
  .then(function (res) {
    hDate = res.hd + " " + res.hm + " " + res.hy
    console.log(hDate)
    document.getElementById("demo4").innerHTML = hDate
  })
}

var firstZone;
var secondZone;
var time;
var change;

function setFirstZone() {
  var e = document.getElementById("current-time-zone");
  firstZone = e.options[e.selectedIndex].value;    
}

function setSecondZone() {
  var e = document.getElementById("time-zone");
  secondZone = e.options[e.selectedIndex].value;    
}

function setTime() {
  var e = document.getElementById("time");
  time = e.options[e.selectedIndex].value;    
}

function calculateTime() {
    console.log(firstZone);
    console.log(secondZone);
    console.log(time);
    change = secondZone - firstZone;
    console.log(change);
    time = time - - change;
    console.log(time);
    if (time > 24) {
        time = time - 24;
    }
    else if (time < 0) {
        time = time + 24;
    }
    console.log(time);
    if (time % 1 != 0) {
        time = time -.5;
        time = "" + time + ":30";
    }
    else {
        time = "" + time + ":00";
    }
    console.log(time);
    document.getElementById("convertedTime").innerHTML = time;
};