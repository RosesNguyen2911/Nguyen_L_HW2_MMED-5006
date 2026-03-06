export class Counter {
    constructor(selector, initialValue = 0) {
        this .count = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");
        this.button = document.createElement("button");

        //Add Buttons, decrement, reset
        this.button.textContent = "Decrement"
        this.button.textContent = "Reset"

        //set button text
        this.button.textContent = "Increment";

        //Append display and button into the container div
        container.appendChild(this.display);
        container.appendChild(this.button);

        //Add Event Listener
        this.button.addEventListener("click", ()=> this.increment());
        this.button.addEventListener("click", ()=> this.decrement());
        this.button.addEventListener("click", ()=> this.reset());
    
        // when this first gets mounted update the display
        this.update();
    }

    //state methods
    increment(){
        this.count++;
        this.update();
    }

    decrement(){
        //if statement needed - not to count negatively
        this.count--;
        this.update();
    }

    reset(){
        this.count=0;
        this.update
    }


    update() {
        //set initial display content
        this.display.textContent = `Count: ${this.count}`;

        //classList.toggle() this.count===0
    }
}

//Counter is supper class
// StepCounter is sub class
class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1){
        super(selector, initialValue);
        // add step property
        //this.step = step;
    }
    //increment(){}
    //decrement(){}
}