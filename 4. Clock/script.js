let $ = document.querySelector.bind(document)

function addLeadingZero(number) {
    return (number < 10) ? ("0" + number) : number
}

function getTime() {
    let time = new Date()
    let dayNumber = time.getDay();
    let hour = addLeadingZero(time.getHours());
    let minute = addLeadingZero(time.getMinutes());
    let second = addLeadingZero(time.getSeconds());
    var dayName = ["Sun", "Mon", "TUE", "WED", "THU", "FRI", "SAT"]
  
    $('.dayOfWeek').innerHTML = dayName[dayNumber]
    $('.hour').innerHTML = hour
    $('.minute').innerHTML = minute
    $('.seconds').innerHTML = second
}

setInterval(getTime, 999)