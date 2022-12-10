
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    const wrapped: string [] = []
    for (let i in gifts) {
        let giftLength = gifts[i].length, asteriscos = "**";
        for (let j = 0; j < giftLength; ++j) {
            asteriscos += "*"
        }
        wrapped.push(asteriscos + "\n*" + gifts[i] + "*\n" + asteriscos)
    }
    return wrapped
}
console.log(wrapped)