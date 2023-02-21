import Timer from './timer.js'


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeterPx = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray',perimeterPx); // Initialize our svg stroke

let duration;


const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        duration = totalDuration;
    },
    onTick(secsRemaining){
        circle.setAttribute('stroke-dashoffset', perimeterPx * secsRemaining / duration - perimeterPx );
    },
    onComplete(){

    }
} );