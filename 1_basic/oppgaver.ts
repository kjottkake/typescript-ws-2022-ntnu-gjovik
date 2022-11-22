// Oppgave 1. Sett typer på variablene

let age: number = 20;

let name: string= "<Your name>";

let isHungry: boolean = true;

console.log(
  `My name is ${name} and I am ${age} years old. I am ${isHungry ? "hungry." : "not hungry."
  }`
);

// Task 2. Sett typer på input og output-variablene.

function hello(name) {
  return `Hello ${name}`;
}

hello("Bob");
//hello([1, 2, 3]); // If you comment in this line, after the function is typed, TypeScript will report errors.

function square(baseValue) {
  return baseValue * baseValue;
}

square(3);
// square('hello'); // Skal gi feil om du kommenterer inn.

function mySalary(name, salary) {
  return `My name is ${name}, and I make ${salary}$ each year`;
}

mySalary("Messi", 41000000);
//mySalary(60000, "Chris") // Skal gi feil om du kommenterer inn.

function returnNothing() {
  console.log("Sometimes we don't return anything!");
}


// Oppgave 3. Noen ganger ønsker man at funksjonen kan ta inn hva som helst. 
//Hvilken type kan du bruke for å fortelle Typescript dette?
function anythingCanBeAny(anything) {
  return anything;
}

const a = anythingCanBeAny(5);

const b = anythingCanBeAny("heisann");

// Det er ofte ikke anbefalt å bruke typen any, men den kan være grei å vite om.

export { }; /* Denne er med for å unngå at alt defineres i det globale skopet */
