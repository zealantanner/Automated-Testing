// const add = (...values) => values.reduce((tot,val)=>tot+val,0)

// console.log(add(12,45))

// const addAndSubtract = (...values) => add(values[0],values[1])- values[2]

// console.log(addAndSubtract(100,50,25))

// const divide = (num1,num2) => num1/num2

// console.log(divide(300,4))

// const add2 = (num1,num2) => num1+num2

// console.log(add2(300,4))

// const subract = (startval, ...values) => startval - values.reduce((tot,val)=>tot+val,0)

// console.log(subract(300,4,2,4,5,6,7,8))

const multiplyAndAdd = (startval, ...values) => startval + values.reduce((tot,val)=>tot*val,1)

console.log(multiplyAndAdd(300,4,2,4,5,6,7,8))