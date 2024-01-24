// (a: number, b: number) = type annotations of arguments
// : number is the return annotations of what the function returns
const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(4, 5));

const logger = (message: string): void => {
  console.log(message);
};
const throwError = (message: string): void => {
  if (!message) {
    // throw new Error(message);
  }
};

// console.log(logger("hello word"));

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
