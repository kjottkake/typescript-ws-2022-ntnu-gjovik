// Task 1. Sett types on the variables
// Som i JavaScript er alle tall i TypeScript float behind the hood.

let age = 0.5;

let isActive = true;

let status = `Covid-19 er ${age} år og ${isActive ? "er fortsatt aktiv :(" : "er ikke lenger aktiv :)"}`;

console.log(status);

// Task 2. Sett på typer på input og output slik at det ikke er noen feil, men det som er kommentert ut gir feil.

function hello(name) {
  return `Hello ${name}`;
}

hello("Bob");
hello([1, 2, 3]); // Skal gi feil om du kommenterer inn.

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


// Oppgave 3. Noen ganger ønsker man at funksjonen kan ta inn hva som helst. Hvilken type kan du bruke for å fortelle Typescript dette?
function anythingCanBeAny(anything) {
  return anything;
}

const a = anythingCanBeAny(5);

const b = anythingCanBeAny("heisann");

export { }; /* Denne er med for å unngå at alt defineres i det globale skopet */
