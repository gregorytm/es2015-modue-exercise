import { choice, remove } from "./helpers";
import foods from "./foods.js";

let fruit = choice(foods);

console.log(`I'd like one ${fruit} please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let remainingFood = remove(foods, fruit);

console.log(`I'm sorry, we're all out.  We have ${remainingFood} fruits left`);
