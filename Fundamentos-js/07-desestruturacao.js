//Destruturação de vetor 

let frutas =['laranja', 'banana', 'maça']

//A destrutursção cria variáveis avulsas e 
//atribui os elementos do vetor, EM ORDEM, a 
//cada uma delas 
let [fruta1, fruta2, fruta3] = frutas 

console.log({fruta1, fruta2, fruta3})

//Destruturação parcial: 1 a 2 frutas 
let [f1, f2] = frutas 

console.log({f1, f2})

//Destruturação parcial 1 e 3 frutas 
let [g1, , g3] = frutas 
console.log({g1, g3})

//Destrituração parcial: 2 e 3 frutas 
let [, h2, h3] = frutas 
console.log({h2, h3})
 
/**************************** */

//Problemas: troca de valores entre varáveis (swap)
// É necessário usar o ; 
let  x = 5, y = 10 
console.log('Antes do swap:', {x, y})

//swap
let aux = x 
x = y 
y = aux 

//Swap usando destruturação 
[x, y] = [y, x]

console.log('Depois do swap:', {x, y});

/************************** */

//Destruturação de objetos 
let pessoa = {
    nome: 'Orkutilson de Oliveira' , 
    sexo: 'M',
    dataNasc: '2010-04-29',
    email: 'orkutilson@gmail.com',

}

//Na desestruturação de objetos, as variáveis avulsas: 
//1) PRECISAM ter o MESMO NOME das propriedades do objeto 
//2) Podem ser especificadas em qualquer ordem 
//3) Pode ser feita a desestruturação parcial 

let {sexo, nome, email } = pessoa 

console.log({nome, sexo, email})



