
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    const wrapped: string [] = []
    for (let i in gifts) {
        let asteriscos = "**";
        for (let j of gifts[i]) {
            asteriscos += "*"
        }
        wrapped.push(asteriscos + "\n*" + gifts[i] + "*\n" + asteriscos)
    }
    return wrapped
}
console.log(wrapped)