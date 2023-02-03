var Date_Arriver = new Date(2023, 0, 31);
var Sejour = 5;
var Date_Depart = new Date(2023, 1, 5);
var ClasseChambre = {
    1: 350,
    2: 200,
    3: 100
};
var Montant = 0;
console.log("Arrival date: ", Date_Arriver.toLocaleDateString());
console.log("Stay duration: ", Sejour, "nights");
console.log("Departure date: ", Date_Depart.toLocaleDateString());
for (var Classe in ClasseChambre) {
    Montant = ClasseChambre[Classe] * Sejour;
    console.log("Total \u00E0 payer pour la chambre de classe ".concat(Classe, ": $"), Montant);
}
