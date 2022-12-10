
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    var arrayItems = gifts.length
    const wrapped: string [] = []
    for (let i = 0; i < arrayItems; i++) {
        let giftLength = gifts[i].length
        let wrappedGift: String = "**"

        for (let i=0; i<giftLength; ++i) {
            wrappedGift += "*"
        }
        
        wrappedGift += ("\n*" + gifts[i] + "*\n**")  


        for (let i=0; i<giftLength; ++i) {
            wrappedGift += "*"
        }
        
        wrapped.push(wrappedGift)
        //console.log(wrapped)
    }
    return wrapped
}


console.log(wrapped)