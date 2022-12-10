
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    let wrapped: string [] = []
    for (let i in gifts) {
        let asteriscos = gifts[i].replace(new RegExp(/./g), "*") + "**";
        wrapped.push(asteriscos + "\n*" + gifts[i] + "*\n" + asteriscos)
    }
    return wrapped
}
console.log(wrapped)