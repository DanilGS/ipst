class Worker {
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days){
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    
    getNames(){
        return `${this.#name}  ${this.#surname}`
    }

    getRate() {
        return this.#rate;
    }

    setRate(rate){
        this.#rate = rate
    }

    getDays() {
        return this.#days;
    }

    setDays(days){
        this.#days = days
    }

    getSalary(){
        return this.#rate * this.#days
    }
}

let chelic = new Worker('гуня', 'зибневский', 5, 15)
chelic.setRate(35);
chelic.setDays(1500);

console.log(chelic.getSalary() + " " + chelic.getNames())