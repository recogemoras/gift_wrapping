const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);
function wrapping(gifts2) {
  let wrapping2 = [], regexp = /./g;
  gifts2.forEach(function(gift) {
    let asteriscos = gift.replace(regexp, "*") + "**";
    wrapping2.push(asteriscos + "\n*" + gift + "*\n" + asteriscos);
  });
  return wrapping2;
}
console.log(wrapped);
//# sourceMappingURL=index.js.map
