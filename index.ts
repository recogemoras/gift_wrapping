
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    let wrapped: string [] = [], regexp: RegExp = /./g
    for (let i in gifts) {
        let asteriscos = gifts[i].replace(regexp, "*") + "**";
        wrapped.push(asteriscos + "\n*" + gifts[i] + "*\n" + asteriscos)
    }
    return wrapped
}
console.log(wrapped)