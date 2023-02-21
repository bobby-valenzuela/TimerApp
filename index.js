console.log("Running...")

import Timer from './timer.js'


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray',perimeter);
let currentOffset = 0;


const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(){
        console.log('Timer started');
    },
    onTick(){
        console.log('Timer ticked');
        circle.setAttribute('stroke-dashoffset',currentOffset);
        currentOffset -= 10;
    },
    onComplete(){
        console.log('Timer completed');

    }
} );