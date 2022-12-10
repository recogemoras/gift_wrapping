const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);
function wrapping(gifts2) {
  var arrayItems = gifts2.length;
  const wrapped2 = [];
  for (let i = 0; i < arrayItems; i++) {
    let giftLength = gifts2[i].length;
    let wrappedGift = "**";
    for (let i2 = 0; i2 < giftLength; ++i2) {
      wrappedGift += "*";
    }
    wrappedGift += "\n*" + gifts2[i] + "*\n**";
    for (let i2 = 0; i2 < giftLength; ++i2) {
      wrappedGift += "*";
    }
    wrapped2.push(wrappedGift);
  }
  return wrapped2;
}
console.log(wrapped);
//# sourceMappingURL=index.js.map
