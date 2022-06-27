const myName = "Zakir Hussain";
const age = 26;
const birthday = "August 17";
const pineapplePizza = true;
const LifeEvent = [
  "I played Soccer in High School",
  "I wanted to be an Astronaunt as a Kid",
  "I follow the Detroit Pistons and Detroit Lions",
  "I like computers",
];

if (pineapplePizza === true) {
  console.log(
    ` My name is ${myName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    ` My name is ${myName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}

for (let x = 0; x < 4; x++) {
  console.log(LifeEvent[x]);
}

let counter = 0;
while (true) {
  randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber != 5) {
    counter++;
    console.log(` ${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      ` 5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

let pay = 10;
let hours = 45;
let overtime = hours * pay * 1.5;
let regPay = hours * pay;
if (hours <= 40) {
  console.log(`$${regPay}`);
} else {
  console.log(`$${overtime}`);
}

let mil = 1000000;
totalWeeks = mil / overtime;
console.log(` Number of weeks to make $1,000,000: ${totalWeeks}`);
console.log(` At a rate wage of $${pay} per hour`);
