let strings = 'DDADSADASDAAAD'
let result = []
let newresult

    for(let i = 0; i < strings.length; i++){
        if(result.indexOf(strings[i]) === -1){
            result = result + strings[i]
    }}

    console.log(result)

