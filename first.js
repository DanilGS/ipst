const month = 0
const year = 0

function season (month){
    if(month => 1 && month <=2 || month == 12){
        console.log('Зима!')
    }
    else if(month >= 3 || month <=5){
        console.log('Весна!!!')
    }
    else if(month >= 6 && month <= 8){
        console.log('Лето!!')
    }
    else if(month >= 9 && month <= 11){
        console.log('Осень!!')
    }

    return month
}

function leapyear (year){
    if(year % 4 === 0){
        console.log('Високосный год')
    }
    else{
        console.log('обычный')
    }
    return year
}
