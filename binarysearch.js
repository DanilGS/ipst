let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function binarySearch(a,item){
    let start = 0
    let end = a.length
    let middle;
    let found = false
    let position = -1
    while (found === false && start <= end){
        middle = Math.floor((start + end)/2);
        if (a[middle] === item){
            found = true
            position = middle
            return position;
        }
        if (item < a[middle]){ // - правая
            console.log("Отрезал правую сторону")
            end = middle - 1
        } else {
            console.log("Отрезал левую сторону")
            start = middle + 1
        }
    }
    return position;
}

console.log(binarySearch(a,5))