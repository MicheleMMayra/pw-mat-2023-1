const numeros =[10,19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maça', 'uva', 'jabuticaba','maracuja']

/*
O método find() encontra o PRIMEIRO ELEMENTO de um vetor 
que corresponde ao retorno da função passada como parâmetro
*/

console.log('Primeiro número negativo:', numeros.find(n => n < 0))
console.log('Primeiro múltiplo de 5 :', numeros.find(x => x % 5 === 0))


console.log('Primeira fruta começando com m:',
     frutas.find(f => f.charAt(0) === 'm '))

console.log('Primeira fruta começando com r:',
     frutas.find(f => f.slice(0) === 'r '))


