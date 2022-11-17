// OPPGAVE 1
// Lag en type eller et interface som beskriver følgende objekt:

const Lunch = {
  startTime: 11,
  endTime: 12,
  menu: {
    title: "couscous salad",
    price: 35,
  },
  printFuntion: () => console.log("todays lunch will be awesome!"),
};

// OPPGAVE 2
// Utvid typen du lagde i forrige oppgave slik at den nå også støtter det nye objektet under.
// Prøv deg frem med de ulike måtene for utvidelse.

const dinner = {
  startTime: 16,
  endTime: 20,
  menu: {
    title: "hamburger",
    price: 79,
  },
  printFunction: () => console.log("todays dinner will be awesome!"),
  attendees: 30,
};

// OPPGAVE 3
// Definer typen til names slik at vi kan bruker printList. Listen kan enten bestå av tall og strings.
const printList = (input: any): void => {
  const nameListWithAnd = input.join(" and ");
  console.log(nameListWithAnd)
};


printList("tom"); // OK
printList(["tom", "jerry"]); // OK

printList(123); // denne skal gi feil!

export { }; /* Denne er med for å unngå at alt defineres i det globale skopet */
