//  promise chaininh busing mjultiple .then()
let s = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("descion pending !");
    resolve(45);
  }, 2000);
});
s.then((value) => {
  console.log(value);
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("RANA JI KESE HO !");
    }, 2000);
  });
  return p;
}).then((value) => {
  console.log("we are done!");
});