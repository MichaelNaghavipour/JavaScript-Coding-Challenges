const array = [10, 15, 3, 7]
const k = 17
let result = false

function sumUp(array, k) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (k == array[i] + array[j]) {
                result = true
                break;
            }
        }
    }
    return result
}

console.log("k:", k, " Array:", array)
console.log(sumUp(array, k))
