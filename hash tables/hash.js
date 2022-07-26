// basic hash function using "CharCodeAt()" method
// this both function only works for strings
// Not constant time - linear in key length
// could be little more random

// function hash(key, arrlen) {
//   let total = 0;
//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrlen;
//   }

//   return total;
// }

console.log(`hash value  is: `, hash("yash", 11));
console.log(`hash value  is: `, hash("pink", 9));

// improved hash function
function hash(str, strlen) {
  let total = 0;
  let prime_num = 31;
  for (let i = 0; i < Math.min(str.length, 100); i++) {
    let char = str[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * prime_num + value) % strlen;
  }
  return total;
}
