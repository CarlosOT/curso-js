let num = [5,8,2,9,3];
num[5] = 10;
num[6] = 11;
num[7] = 12;

console.log(`Elementos do vetor antes do método sort(): ${num}`);

//colocando todos os elementos em ordem
num.sort()
console.log(`Elementos do vetor depois do método sort(): ${num}`);

//usando o método push o javascript adiciona o elemento no último índice
num.push(500);
console.log(`Elementos do vetor depois do método sort() com push(): ${num}`);

//
console.log('')
console.log(`Elemento dentro do vetor no índice 7: ${num[7]}`)
console.log(`Tamanho do vetor: ${num.length}`);