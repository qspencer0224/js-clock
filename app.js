let secondhand = document.querySelector('#second-hand')
let minutehand = document.querySelector('#minute-hand')
let hourhand = document.querySelector('#hour-hand')

const setDate = () => {
    const now = new Date()

    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const secondDegrees = ((seconds/60) * 360 + 90)
    const minuteDegrees = ((minutes/60) * 360 + 90)
    const hoursDegrees = ((hours/12)*360 + 90)

    secondhand.style.transform = `rotateZ(${secondDegrees}deg)`

    minutehand.style.transform = `rotateZ(${minuteDegrees}deg)`
    
    hourhand.style.transform = `rotateZ(${hoursDegrees}deg)`

}

setInterval(setDate, 1000)