// Pseudo-random generator
// ==================================================

const A = 16807,
  M = 2147483647;

function* pseudoRandom(seed) {
  let state = seed;
  while (true) {
    state = (state * A) % M;
    yield state;
  }
}

// — usage:
let generator = pseudoRandom(1);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);