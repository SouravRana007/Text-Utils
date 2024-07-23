promises arfe the promise of code executuion
reolve and reject afre two states of promises
resolve will exute the code and reject shows the error
let p = new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    // console.log("hello");
    resolve(true);
  }, 5000);
});
let p1 = new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    // console.log("Jai Shree Ram");
    reject(new Error("i am new error"));
  }, 5000);
});
console.log(p, p1);
p1.catch((error) => {
  console.log("some eroor in on p1");
});
p.then((value) => {
  console.log(value);
});

