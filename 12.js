class Worker {
    #name;
    #this;
    #surname;
    #rate
    #days;
    constructor(name, surname,rate,days) {
       this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getSalary(){
        return `${this.#rate *this.#days}`
    }
    getNames(){
        return `${this.#name}  ${this.#surname}`
    }
}

let chelic = new Worker('гуня', 'зибневский', 5, 15)

console.log(chelic.getSalary() + " " + chelic.getNames())