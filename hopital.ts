const Date_Arriver = new Date(2023, 0, 31);
const Sejour = 5;
const Date_Depart = new Date(2023, 1, 5);
const ClasseChambre = {
  1: 350,
  2: 200,
  3: 100
};

let Montant = 0;

console.log("Arrival date: ", Date_Arriver.toLocaleDateString());
console.log("Stay duration: ", Sejour, "nights");
console.log("Departure date: ", Date_Depart.toLocaleDateString());
