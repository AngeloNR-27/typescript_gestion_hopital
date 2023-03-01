const dateArrivee = new Date(2023, 0, 31);
const dureeSejour = 5;
const dateDepart = new Date(2023, 1, 5);
const tarifsChambres = {
  1: 350,
  2: 200,
  3: 150
};

for (const classeChambre in tarifsChambres) {
  const montantTotalChambre = tarifsChambres[classeChambre] * dureeSejour;
  console.log(`Total à payer pour la chambre de classe ${classeChambre}: $${montantTotalChambre}`);
}

console.log("date arriver: ", dateArrivee.toLocaleDateString());
console.log("duree de sejour: ", dureeSejour, "nights");
console.log("date de depart: ", dateDepart.toLocaleDateString());
