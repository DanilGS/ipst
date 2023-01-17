class Worker {
    constructor(name, surname,rate,days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.name + " " + this.surname+ " " + (this.rate * this.days)
    }
}

let chelic = new Worker('гуня', 'зибневский', 5, 15)

console.log(chelic.getSalary())