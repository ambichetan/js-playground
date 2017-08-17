function identify(x) {
  return function () {
    return x;
  }
}

var idf = identify(3);
console.log(idf());
console.log(idf());