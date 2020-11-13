function analogClock() {
    let date = new Date();
    seconds = date.getSeconds();
    minutes = date.getUTCMinutes();
    hours = date.getHours();
    day = date.getUTCDate()

    hoursRotation = (360 / 100) * ((hours / 12) * 100)
    minutesRotation = (360 / 100) * ((minutes / 60) * 100)
    secondsRotation = (360 / 100) * ((seconds / 60) * 100)

    console.log(seconds)

    const hoursHand = document.getElementById('hour');
    const minutesHand = document.getElementById('minute')
    const secondsHand = document.getElementById('second');
    const dayDate = document.getElementById('date')

    hoursHand.style.transform = 'rotate('+hoursRotation + 'deg)'
    secondsHand.style.transform = 'rotate('+secondsRotation + 'deg)'
    minutesHand.style.transform = 'rotate('+minutesRotation + 'deg)'
    dayDate.textContent = day
}
setInterval(analogClock,1000)
