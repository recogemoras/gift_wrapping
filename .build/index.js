const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);
function wrapping(gifts2) {
  const wrapped2 = [];
  for (let i in gifts2) {
    let asteriscos = "**";
    for (let j of gifts2[i]) {
      asteriscos += "*";
    }
    wrapped2.push(asteriscos + "\n*" + gifts2[i] + "*\n" + asteriscos);
  }
  return wrapped2;
}
console.log(wrapped);
//# sourceMappingURL=index.js.map
