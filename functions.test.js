const { returnTwo, greeting, add } = require(`./functions`);

test(`return2 works`, () => {
    expect(returnTwo()).toBe(2)
})

test(`greeting works`, () => {
    expect(greeting(`John`)).toBe(`Hello, John.`)
})

test(`add works`, () => {
    expect(add(2, 2)).toBe(4)
})