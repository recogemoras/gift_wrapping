const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);
function wrapping(gifts2) {
  let wrapped2 = [];
  for (let i in gifts2) {
    let asteriscos = gifts2[i].replace(new RegExp(/./g), "*") + "**";
    wrapped2.push(asteriscos + "\n*" + gifts2[i] + "*\n" + asteriscos);
  }
  return wrapped2;
}
console.log(wrapped);
//# sourceMappingURL=index.js.map
