console.log('Fodor Andrea');
let myVariable = false;
if (myVariable === true) {
  console.log('The condition has been evaluated to true');}
  else {console.log('The condition has been evaluated to false');
}
let a = 7;
if (a < 5) {
  console.log(a / 2);
  } else {
  console.log(a / 7);
  }

console.log('next');
for (let i = 0; i < 10; i++) {
    console.log(i);
    }

console.log('next');
for (let i = 1; i < 11; i++) {
    console.log(i);
  }

console.log('next');
for (let i = 0; i < 21; i=i+2) {
    console.log(i);
  }

console.log('next');
let printNumbersTill = number => {
    for (let i = 0; i < number+1; i++) {
    console.log(i);
}
};
printNumbersTill(20);

console.log('next');
let getGreetingTo = name => {
    return(`Hello, ${name}`);}
getGreetingTo('Mark');
console.log(getGreetingTo('Mark'));

console.log('next');
let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };
printValues([0, 3, 6, 7, 9]);

console.log('next');
let MyNumbers =[10, 20, 30, 50, 12];
MyNumbers.forEach (number => {
    console.log(number);
});
