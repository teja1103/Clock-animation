const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now= new Date();
    const seconds= now.getSeconds(); //gets the real time second
    const secondsDegrees = ((seconds / 60) * 360) +90; //calculating the number degrees the second hand should move
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //applying the rotation style to the seconds hand
    console.log(seconds + "seconds");
    const minutes = now.getMinutes();//gets the real time minutes
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) +90;//calculating the number degrees the minute hand should move
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;//applying the rotation style to the minutes hand
    console.log(minutes + "minutes");
    const hours = now.getHours();//gets the real time hour
    const hoursDegrees = ((hours / 12) * 360)+ ((minutes/60)*30) +90;//calculating the number degrees the second hand should move
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;//applying the rotation style to the hours hand
    console.log(hours + "hours");
} 


setInterval(setDate,1000);