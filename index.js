// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
function writeCards(names, eventName) {
  const messages = []; // Step 1: create a new, empty array

  for (let i = 0; i < names.length; i++) {
    // Step 2: build a custom message for each name
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message); // Add message to the array
  }

  return messages; // Step 3: return the array of messages
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday").join("\n"));
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--; // iteration: count down by 1
  }
}
countDown(5);

