class Animal{
    constructor(){
        this.nome = 'cachorro'
    }
}


// extends uni tudo que há na outra class com a noa
class Cachorro extends Animal{
    constructor(nome){
        super(nome)
    }
}
cachorro = new Cachorro()
animal = new Animal()
console.log(animal.nome)