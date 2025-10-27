function colorlog(text) {
    console.log('%c'+text, 'background: #ff0000; color: #0000ff')
}

colorlog('super cool');

function add(...values) {
    let total = 0;
    for (let i=0; i<values.length; i++) {
        total += values[i];
    }
    return total;
}

colorlog(add(1,45,65,2,3,6,23,46,3,456,34,56,1))

function multiply(...values) {
    let total = 1;
    for (let i=0; i<values.length; i++) {
        total *= values[i];
    }
    return total;
}

colorlog(multiply(12,add(45,65,2,3,6,23,46,3,456),34,56,1))

function subract(startValue,...values) {
    let total = startValue;
    for (let i=0; i<values.length; i++) {
        total -= values[i];
    }
    return total;
}

colorlog(multiply(12,add(45,65,subract(2,3,6),23,46,3,456),34,56,1))

function addexactly3(num1,num2,num3) {
    return num1+num2+num3;
}

colorlog(multiply(12,add(45,65,subract(2,3,6),23,46,3,456),addexactly3(34,56,1)))

function divide(startValue,...values) {
    let total = startValue;
    for (let i=0; i<values.length; i++) {
        total /= values[i];
    }
    return total;
}

colorlog(multiply(12,add(45,65,subract(2,divide(3,6)),23,46,3,456),addexactly3(34,56,1)))

function divideandadd(thing1,thing2) {
    return add(divide(thing1,thing2),divide(thing2,thing1))
}

colorlog(multiply(12,add(45,65,subract(2,divide(3,6)),23,46,divideandadd(3,456)),addexactly3(34,56,1)))
