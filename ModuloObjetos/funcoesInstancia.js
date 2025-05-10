/*function Pessoa(){
    this.nome = "Pedro";
}

let pessoa = new Pessoa();
console.log(pessoa.nome)*/

function Pessoa(){
    this.nome = "Pedro"
    this.idade = 18
    this.returnAnimal = function(animal){
        return animal
    } // function criada dentro de outra 
}

function Animal(){
    this.nome = "cachorro"
    this.raca = "vira-lata"
}


let pessoa = new Pessoa()
let animal = new Animal()
let animal_2 = new Animal() //recebe as mesmas informações da function Animal 
animal_2.nome = "gato" // altera o parametro nomeado após o "."

console.log(pessoa.nome)
console.log((pessoa.returnAnimal(animal).nome), (pessoa.returnAnimal(animal).raca))//dados originais da function
console.log((pessoa.returnAnimal(animal_2).nome), (pessoa.returnAnimal(animal_2).raca)) // mesmos dados da function Animal porém com o "nome" alterado