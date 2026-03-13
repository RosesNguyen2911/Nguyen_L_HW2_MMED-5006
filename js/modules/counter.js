export class Counter {
    constructor(selector, initialValue = 0) {
        this.count = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        //Add increment, decrement, reset buttons
        this.display = document.createElement("div");
        this.incrementButton = document.createElement("button");
        this.decrementButton = document.createElement("button");
        this.resetButton = document.createElement("button");

        //Set button text
        this.incrementButton.textContent = "Increment";
        this.decrementButton.textContent = "Decrement";
        this.resetButton.textContent = "Reset";

        //Append display and button into the container div
        container.appendChild(this.display);
        container.appendChild(this.incrementButton);
        container.appendChild(this.decrementButton);
        container.appendChild(this.resetButton);

        //Add Event Listener
        this.incrementButton.addEventListener("click", ()=> this.increment());
        this.decrementButton.addEventListener("click", ()=> this.decrement());
        this.resetButton.addEventListener("click", ()=> this.reset());

    
        // when this first gets mounted update the display
        this.update();
    }

    //State methods
    increment(){
        this.count++;
        this.update();
    }

    decrement() {
        if (this.count > 0) {
            this.count--;
        }
    
        this.update();
    }

    reset(){
        this.count=0;
        this.update();
    }


    update() {
        //Set initial display content
        this.display.textContent = `Count: ${this.count}`;

        // When the count is 0, decrement and reset should appear inactive
        this.decrementButton.classList.toggle("inactive", this.count === 0);
        this.resetButton.classList.toggle("inactive", this.count === 0);
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