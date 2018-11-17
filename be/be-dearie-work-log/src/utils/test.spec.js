const FILE = "./prodpwdutils.js";

const utils = require(FILE);

let {
    hash,
    seed1,
    seed2
} = utils.hash("demo", "demo123");
console.log(`hash : ${hash}`);
console.log(`seed1 : ${seed1}`);
console.log(`seed2 : ${seed2}`);

const verified = utils.verifyHash("demo", "demo123",
    hash, seed1, seed2);

console.log(`verified : ${verified}`);