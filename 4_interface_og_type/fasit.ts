// OPPGAVE 1 - FASIT

type Menu = {
  title: string;
  price: number;
};

type Mealtime = {
  startTime: number;
  endTime: number;
  menu: Menu;
  printFunction: () => void;
};

// eller
interface Mealtime2 {
  startTime: number;
  endTime: number;
  menu: Menu;
  printFunction: () => void;
}

// OPPGAVE 2 - FASIT

type Dinner = {
  attendees: number;
} & Mealtime;

// eller
interface Dinner2 extends Mealtime {
  attendees: number;
}

const dinner: Dinner2 = {
  startTime: 16,
  endTime: 20,
  menu: {
    title: "hamburger",
    price: 79,
  },
  printFunction: () => console.log("todays dinner will be awesome!"),
  attendees: 30,
};

// OPPGAVE 3 - FASIT

const printList = (input: Array<string> | Array<number>): void => {
  const nameListWithAnd = input.join(" and ");
  console.log(nameListWithAnd)
};

const nameList: Array<string> = ["Ola", "Kari"]
const numberList: Array<number> = [1, 2, 3, 4]
printList(nameList)
printList(numberList)
export { }; /* Denne er med for å unngå at alt defineres i det globale skopet */