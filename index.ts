
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    let wrapped: string [] = [], regexp: RegExp = /./g
    gifts.forEach(function (gift) {
        let asteriscos = gift.replace(regexp, "*") + "**";
        wrapped.push(asteriscos + "\n*" + gift + "*\n" + asteriscos)
    })
    return wrapped
}
console.log(wrapped)