let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// creates a variable of type Date which Date is an object
let now: Date = new Date();

// create arrays of specfic types
let colors: string[] = ["red", "blue", " yellow"];
let numbers: number[] = [0, 1, 2];
let truths: boolean[] = [true, false, true];

// create Classes
class CarClass {
  id: number;
  make: number;
  brand: string;
}

//create a new variable by instatiating a new class of Car
let newCar: CarClass = new CarClass();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
/* (i: number) => void
description of a function

(i: number) => {
  console.log(i);
};
implementation */

// variables whose type cannot be inferred correctly
let listNumbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // boolean | number = value can be eithere

for (let i = 0; i < listNumbers.length; i++) {
  if (listNumbers[i] > 0) {
    numberAboveZero = listNumbers[i];
  }
}

/*
 cannot change the type of apples
 type annotation = :type = value
 apples = ''
 apples = []
 apples = {}

 when assigning new variables, you must assign a type to it.
 
type annotations for functions: we tell ts what type of arguments our function recieves and the type of values it returns

type inference for functions: ts figures out what type of value our function returns
*/
