// Pseudo-random generator
// ==================================================

function* pseudoRandom(seed) {
  let state = seed;
  while (true) {
    // advance state
    state = (state * 16807) % 2147483647;
    // yield the new “random” integer
    yield state;
  }
}

// — usage:
let generator = pseudoRandom(1);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);