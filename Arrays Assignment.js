function fruitTime() {
    let fruits = ["peach","apple","banana","orange"]
    console.log(fruits[2])
    fruits.push("pear")
    console.log(fruits)
    fruits[1] = "tomato"
    console.log(fruits)
    fruits.unshift("guava")
    console.log(fruits)
}


function mixedTime() {
    let mixed = [false,"1","2",[3],{"num":4},()=>"5"]
    console.log(mixed)
    mixed[1] = parseInt(mixed[1])
    console.log(mixed)
}


// fruitTime()
mixedTime()
// console.log("done")