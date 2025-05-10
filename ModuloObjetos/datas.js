/*let date = new Date() 
console.log(date)// data completa

console.log(date.getDate()) // dia do mes

console.log(date.getDay() ) // dia da semana

console.log(date.getFullYear()) // ano

console.log(date.getHours(),":", date.getMinutes()) // Hora e Minuto*/

//com parametros de data (entrada de padrão americano m/d/a) e calculo de diferença de datas 
let date = new Date("10/24/2005")
let date_2 = new Date("10/24/2024")

console.log(date)
console.log(date_2)

let diferenca = (date_2.getTime() - date.getTime()) / (1000 * 3600 * 24)
console.log(diferenca, "dias ou ", diferenca / 365, "anos")
