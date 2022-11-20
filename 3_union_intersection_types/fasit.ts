// Oppgave 1

enum MatType {
  VEGETAR = "Vegetar",
  KJØTT = "Kjøtt",
  VEGANSK = "Vegansk"
}

// Alternativt:
// type MatType2 = 'Vegetar' | 'Kjøtt' | 'Vegansk';
// Hva er fordelen med denne tilnærmingen?

type Forrett = {
  drikke: string;
  matType: MatType;
};

type Hovedrett = {
  drikke: string;
  matType: MatType;
  tilbehør: string;
};

type Dessert = {
  drikke: string;
  vegansk?: boolean;
};

type Middag = Forrett & Hovedrett & Dessert;

// Oppgave 2:
// Definer en type, 'UtvidetMiddag', som utvider ´Middag´ slik at den kan holde på egenskapene
// 'drinkType' (som kan enten være 'GinTonic', 'Portvin' eller 'MoscowMule') og antall enheter

// Oppgave 2:
enum DrinkType {
  GINTONIC = "Gin Tonic",
  PORTVIN = "Portvin",
  MOSCOWMULE = "Moscow Mule"
}

type UtvidetMiddag = Middag & { drinkType: DrinkType; antallEnheter: number };

// Oppgave 3
type inputParams = string | number;
function add(a: inputParams, b: inputParams) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}

export { }; /* Denne er med for å unngå at alt defineres i det globale skopet */
