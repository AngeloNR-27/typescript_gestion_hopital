var dateArrivee = new Date(2023, 0, 31);
var dureeSejour = 5;
var dateDepart = new Date(2023, 1, 5);
var tarifsChambres = {
    1: 350,
    2: 200,
    3: 150
};
for (var classeChambre in tarifsChambres) {
    var montantTotalChambre = tarifsChambres[classeChambre] * dureeSejour;
    console.log("Total \u00E0 payer pour la chambre de classe ".concat(classeChambre, ": $").concat(montantTotalChambre));
}
console.log("date arriver: ", dateArrivee.toLocaleDateString());
console.log("duree de sejour: ", dureeSejour, "nights");
console.log("date de depart: ", dateDepart.toLocaleDateString());
