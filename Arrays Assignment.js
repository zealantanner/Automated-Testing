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

const arr = [1,7,3,4]
arr.push(5)
arr.unshift(0)
console.log(arr)
arr[2] = 2
console.log(arr)

try {
    arr = "turkey"
} catch (error) {
    console.log(error)
}

console.log(arr)

try {
    arr = [5,4,3,2,1,0]
} catch (error) {
    console.log(error)
}
console.log(arr)