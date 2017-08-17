const increment = (i) => {
  return () => i++;
};

const closure = increment(0);

console.log(closure());
console.log(closure());
console.log(closure());