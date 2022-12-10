const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);
function wrapping(gifts2) {
  let wrapped2 = [], regexp = /./g;
  gifts2.forEach(function(gift) {
    let asteriscos = gift.replace(regexp, "*") + "**";
    wrapped2.push(asteriscos + "\n*" + gift + "*\n" + asteriscos);
  });
  return wrapped2;
}
console.log(wrapped);
//# sourceMappingURL=index.js.map
