const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);
function wrapping(gifts2) {
  var arrayItems = gifts2.length;
  const wrapped2 = [];
  for (let i = 0; i < arrayItems; i++) {
    wrapped2.push(wrapGift(gifts2[i]));
  }
  return wrapped2;
}
function wrapGift(gift) {
  let wrappedGift = asteriscs(gift);
  wrappedGift += "\n*" + gift + "*\n";
  return wrappedGift += asteriscs(gift);
}
function asteriscs(gift) {
  let giftLength = gift.length;
  let asteriscs2 = "**";
  for (let i = 0; i < giftLength; ++i) {
    asteriscs2 += "*";
  }
  return asteriscs2;
}
console.log(wrapped);
//# sourceMappingURL=index.js.map
