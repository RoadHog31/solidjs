//Export
//In-line individually:
person.js
export const name = "Jesse";
export const age = 40;

// All at once at the bottom:
// person.js
const name = "Jesse";
const age = 40;

export {name, age};

// Default Exports
// Demonstrating default export.

// You can only have one default export in a file.

// Example
message.js

const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;



//Import
// You can import modules into a file in two ways, based on if they are named exports or default exports.

// Named exports are constructed using curly braces. Default exports are not.

// Import from named exports
// Import named exports from the file person.js:
import { name, age } from "./person.js.js";

// Import from default exports
// Import a default export from the file message.js:
import message from "./message.js.js";

// Note!
// Modules only work with the HTTP(s) protocol.

// A web-page opened via the file:// protocol cannot use import / export.