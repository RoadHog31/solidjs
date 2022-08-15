import { Penguin } from "./modules/4.InterfaceSegregationPrinciple/Penguin.js"; 
import { Bird } from "./modules/4.InterfaceSegregationPrinciple/Bird.js"; 
import { flyer } from "./modules/4.InterfaceSegregationPrinciple/Flyer.js"; 

Object.assign(Bird.prototype, flyer);

const bird = new Bird();
bird.fly(); // Outputs 'Flap flap, I'm flying!'

const penguin = new Penguin();
penguin.fly(); // 'Error: penguin.fly is not a function'