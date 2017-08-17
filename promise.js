console.log('Playground started  <<<<');

const promise = new Promise((resolve, reject) => {
  reject('success');
});

promise.then(() => {
  console.log('success');
}, () => {
  console.log('failed');
});

console.log('Playground finished >>>>');