// Since we're using Laravel Mix and its Webpack configuration,
// we can import functionality that was exported in other files.
import { Person } from './samples/person';
import { add } from './samples/addition';

// Try to use our imported function.
console.log(add(2, 5));

// Let's create a new person.
let person = new Person("John Appleseed");
person.setBirthYear(2000);
console.log(person);

// If we get here, our app works. Great!
console.log("Looks like our app is working.");