const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number]; // type alias / declaring tuple order
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 20];
const tea: Drink = ["black", false, 0];

// console.log(pepsi);
// console.log(sprite);
// console.log(tea);

// comparing tuples vs objects
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsePower: 400,
  weight: 3354,
};
