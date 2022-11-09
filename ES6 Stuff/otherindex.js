import {data} from './index.js';
let updatedData = data;

updatedData.push(0);
console.log(updatedData);

import {Animal} from './index.js';

let cat = new Animal('Cat',4);
//we can even change parameters in our objects too 
cat.legs = 3;
console.log(cat);
console.log(cat.makeNoise());
//let's pull that static function

console.log(Animal.return10());
//the get lets us toss stuff out real easy about the class
console.log(cat.metaData);
//bringing in the Hamster class
import { Hamster } from './index.js';
//we define the new object of the Hamster class
let johnny = new Hamster('Hamster', 4, 'brown');
console.log(johnny.metaData);
johnny.makeNoise(); //makes the new sound we defined 