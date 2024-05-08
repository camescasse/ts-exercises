function getRandomInt(max): number {
  return Math.floor(Math.random() * max);
}

const ride = new Promise<string>((resolve, reject) => {
  const arrived = getRandomInt(2);
  arrived ? resolve('Driver arrived!') : reject('Driver rejected...');
});

ride
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

export default ride;
