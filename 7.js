let str = ['дим', 'an', 'рота', 'аргентинам']
let mat = []


function palindrome (str){
    for(let i = 0; i < str.length; i++){

        

        mat.push(str[i] + str[i].slice(0, -1).split('').reverse().join(''))
    }
    return mat
}

console.log(palindrome (str))