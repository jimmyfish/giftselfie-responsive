const orders = [500, 30, 99, 15, 223];

const total = orders.reduce((acc, cur) => acc + cur)

const withTax = orders.map(v => v * 1.1)

const highValue = orders.filter(v => v > 100)
console.log(total, withTax, highValue);