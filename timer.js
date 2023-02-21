// Only concerned with: PlayBtn, PauseBtn, and Numbers shown
class Timer{

    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        // Add listeners
        this.startButton.addEventListener('click',this.start);
        this.pauseButton.addEventListener('click',this.pause);
        /* 
        We could use this.pause.bind(this) here ^ if we wanted to declare the method with pause(){...}
        This would bind pause function to the object since the 'this' keyword in a (traditionally-defined - ES5) method points to the object that called it (the class in this case).
        
        However, it seems to be more modern convention to just leave it unbound and declare with an arrow function pause = ()=>{...} - since 'this' would point to whatever called the pause function - which would just be the class instance. More specifically, the 'this' keyword inside a method declared with arrow syntax just points to the execution context of it's parent (the class instance in this case).
        */
       
       this.secondsPerTick = 0.05;
    }

    // Instance methods
    start = () => {
        this.onStart && this.onStart(this.secsRemaining);
        this.tick();
        this.interval = setInterval(this.tick, this.secondsPerTick * 1000 );
    }
    
    pause = () => {
        clearInterval(this.interval);
    }

    // Use the getter to get what to set the in the setter :)
    tick = () => {

        this.onTick && this.onTick(this.secsRemaining)
        
        if( this.secsRemaining <= 0 ) { 
            this.pause();
            this.onComplete && this.onComplete() 
        }
        else{
            this.secsRemaining = this.secsRemaining - this.secondsPerTick;
        }
    }
    
    // Getters and Setters
    get secsRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set secsRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }

}

export default Timer;