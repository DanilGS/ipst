class Hello{
    constructor(str){
        this.str = str;
    }
    reverse(){
        return this.str.split('').reverse().join('')
    }
    ucFirst(){
        return this.str.charAt(0).toUpperCase() + this.str.slice(1)
    }
    ucWords(){
        return this.str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
    }
}
let Hello1 = new Hello ("саня денис данил андюрха")
console.log(Hello1.reverse())
console.log(Hello1.ucFirst())
console.log(Hello1.ucWords())