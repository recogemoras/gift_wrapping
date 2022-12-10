
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    let arrayItems = gifts.length
    const wrapped: string [] = []
    for (let i = 0; i < arrayItems; i++) {
        wrapped.push(wrapGift(gifts[i]))
    }
    return wrapped
}

function wrapGift (gift) {
    let wrappedGift = asteriscs(gift)
    wrappedGift += ("\n*" + gift + "*\n")
    return wrappedGift += asteriscs(gift)
}

function asteriscs (gift) {
    let giftLength = gift.length
    let asteriscs: string = "**"
    for (let i=0; i<giftLength; ++i) {
        asteriscs += "*"
    }
    
    return asteriscs
}

console.log(wrapped)