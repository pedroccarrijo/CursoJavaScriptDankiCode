let p = document.getElementsByTagName('p') //".getElementByTagName" puxa a tag pelo nome (no caso a tag 'p')
alert(p.length) // mostra a quantidade de 'p' no html 
//".length" mostra tamanho

alert(p[1].innerHTML) // Mostra o que esta escrito no 'p' desejado (indicado por [i])
//".innerHTML" mostra o conteudo

p[0].innerHTML = 'Manipulado via JS!' // troca o valor do 'p' desejado (indicado por [i])

p[1].innerHTML += " adicional" // adiciona algo ao item 'p'