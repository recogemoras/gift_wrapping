const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);
function wrapping(gifts2) {
  const wrapped2 = [];
  for (let i in gifts2) {
    let giftLength = gifts2[i].length, asteriscos = "**";
    for (let j = 0; j < giftLength; ++j) {
      asteriscos += "*";
    }
    wrapped2.push(asteriscos + "\n*" + gifts2[i] + "*\n" + asteriscos);
  }
  return wrapped2;
}
console.log(wrapped);
//# sourceMappingURL=index.js.map
