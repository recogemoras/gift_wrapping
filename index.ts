
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    let wrapping: string [] = [], regexp: RegExp = /./g
    gifts.forEach(function (gift) {
        let asteriscos = gift.replace(regexp, "*") + "**"
        wrapping.push(asteriscos + "\n*" + gift + "*\n" + asteriscos)
    })
    return wrapping
}
console.log(wrapped)