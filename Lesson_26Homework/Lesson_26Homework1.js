let car = {
  maker: "Audi",
  model: "a4",
  dateoOfManufacture: "2005",
  averageSpeed: 80,
};

function show(a) {
  console.log(car);
}

show();

function calc(distation) {
  let drivingTime;

  drivingTime = distation / car.averageSpeed;
  let restTime;

  restTime = drivingTime / 4;
  return drivingTime > 4 ? Math.floor(drivingTime + restTime) : drivingTime + restTime;
}
console.log(calc(320));

