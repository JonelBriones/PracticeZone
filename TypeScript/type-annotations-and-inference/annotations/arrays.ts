const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values

const newCar = carMakers[0];
const myCar = carMakers.pop();
console.log(newCar);

const allCars = carMakers.map((car: string): string => {
  return car.toUpperCase();
});
console.log(allCars);

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
console.log(importantDates);
