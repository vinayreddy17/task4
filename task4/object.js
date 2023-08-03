// Objects

// 1. What is the output of the following code?
let myobject = { 1: "one", "11": 1, name: "arun" };
console.log(myobject[11]); // Output: 1 (key "11" is converted to number 11)
console.log(myobject.name); // Output: "arun"

// 2. Add a new key-value pair to myobject
myobject.ten = "ten";

console.log(myobject); // Output: { 1: "one", "11": 1, name: "arun", ten: "ten" }

// 3. Write out an object literal to represent the data below
const data = {
  organization: "Guvi",
  type: "Geek",
  age: 6,
  location: "IIT-M RP, Chennai"
};

// 4. How would you represent the following data using a combination of object literals and arrays?
// using an array of objects
const dataCombined = [
  {
    organization: "Guvi",
    type: "Geek",
    age: 6,
    location: "IIT-M RP, Chennai"
  },
  {
    organization: "Amazon, Inc",
    type: "Inc",
    age: 31,
    location: "SP Infocity, Chennai"
  },
  {
    organization: "Google",
    type: "Alphabet",
    age: 34,
    location: "34 Amphitheater Parkway, MountainView"
  },
  {
    organization: "Tesla, Inc",
    type: "Inc",
    age: 32,
    location: "333 Santana Row, San Jose"
  }
];

console.log(dataCombined);
