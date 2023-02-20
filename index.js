console.log("Running...")

// Only concerned with: PlayBtn, PauseBtn, and Numbers shown
class Timer{

    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        
        // Add listeners
        this.startButton.addEventListener('click',this.start);
        this.pauseButton.addEventListener('click',this.pause);
        /* 
        We could use this.pause.bind(this) here ^ if we wanted to declare the method with pause(){...}
        This would bind pause function to the object since the 'this' keyword in a (traditionally-defined - ES5) method points to the object that called it (the class in this case).
        
        However, it seems to be more modern convention to just leave it unbound and declare with an arrow function pause = ()=>{...} - since 'this' would point to whatever called the pause function - which would just be the class instance. More specifically, the 'this' keyword inside a method declared with arrow syntax just points to the execution context of it's parent (the class instance in this case).
        */
       
       
    }
    
    // Instance methods
    start = () => {
        this.tick();
        this.interval = setInterval(this.tick,1000)
    }
    
    pause = () => {
        clearInterval(this.interval);
    }
    
    reset = () => {
        this.pause()
        this.timeRemaining = 0;
    }

    // Use the getter to get what to set the in the setter :)
    tick = () => {
        if( this.timeRemaining - 1 <= 0 ) { 
            this.reset() 
        }
        else{
            this.timeRemaining = this.timeRemaining - 1
        }
    }
    

    // Getters and Setters
    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value = time;
    }

}


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');


const timer = new Timer(durationInput, startButton, pauseButton);