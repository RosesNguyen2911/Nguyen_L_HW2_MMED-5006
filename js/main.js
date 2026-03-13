import { Counter } from "./modules/counter.js";
import { StepCounter } from "./modules/counter.js";

const counter1 = new Counter("#counter-container1", 8);
const counter2 = new Counter("#counter-container2", 5);
const counter3 = new StepCounter("#counterCon", 5, 10);

// const step10 = new StepCounter(id, starting number, step);