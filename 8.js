let arr = [[1,4,5],[1,3,4],[2,6]];
let result = [];
for (let i of arr) {
    for (let j of i) {
        result.push(j);
    }
}
function bubbleSort(arr) {
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (result[j + 1] < result[j]) {
                let tmp = result[j]
                result[j] = result[j + 1]
                result[j + 1] = tmp
            }
        }
    }
    return result
}
console.log(bubbleSort(result))