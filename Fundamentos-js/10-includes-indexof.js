const carros = ['chavette', 'Fusca', 'Opala', 'Maverick', 'Belina', 'Del Rey']

/*
O método includes() testa se um dado elemento existe em um vetor. 
Retorna true se existir, ou false caso contrário. 
*/ 
console.log('Tem Fusca?', carros. includes('Fusaca'))
console.log('Tem Corcel?', carros. includes('Corcel'))
console.log('Tem Belina?', carros. includes('Belina'))

/*
O método endex() retorna o índice (posição) de um elemento no vetor. 
Caso o elemento não exista, retorna o valor -1. 
*/ 

console.log('Posição de Fusca:', carros.indexOf('Fusca'))
console.log('Posição de Corcel:', carros.indexOf('Corsel'))
console.log('Posição de Belina:', carros.indexOf('Belina'))

console.log(carros)

