let event1 = ["02:00","01:00"]
let event2 = ["1:45","02:00"]
let eventon = event1.concat(event2)
let error

for (let i = 0; i < eventon.length; i++){
    error = eventon[i]

    for (let j = i+1; j < eventon.length; j++){
        if (error === eventon[j]){
            console.log(error)
        }
    }
}
