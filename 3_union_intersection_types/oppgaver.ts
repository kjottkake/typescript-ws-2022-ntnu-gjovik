// Oppgave 1:
// Definer tre typer: 'Forrett', 'Hovedrett' og 'Dessert'. 
//Hver type skal inneholde følgende:
// 'forrett': drikke og mattype (to valg - enten 'vegetar' eller 'kjøtt')

type Forrett = {

}

// 'hovedrett': drikke, matType og tilbehør
type Hovedrett = {

};

// 'dessert': drikke og en ikke-obligatorisk egenskap på om desserten skal være vegansk.
type Dessert = {

};

// Definér en type som heter 'Middag' og som er en intersection type av 'forrett', 'hovedrett' og 'dessert'.


type Middag = ;

// (EKSTRA) Hva består objekter av typen Middag? Hva er konsekvensene av å bruke et objekt av typen 'Middag' til å representere en hel middag?


// Oppgave 2:
// Definer en type, 'UtvidetMiddag', som utvider ´Middag´ slik at den kan holde på egenskapene
// 'DrinkType' (som kan enten være 'GinTonic', 'Portvin' eller 'MoscowMule') og antall enheter

type UtvidetMiddag = ;

// Oppgave 3:
// Bytt ut any-typen i input med en intersection av string og number.
// Hva må du erstatte '??' med for at funksjonen skal returnere? (Tips --> sjekk ut hvordan 
// du kan bruke 'typeof' til din fordel) 
// Les om typeof her: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

function add(a: any, b: any) {
  if (??) {
    return a + b;
  }
  if (??) {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}

export { }; /* Denne er med for å unngå at alt defineres i det globale skopet */