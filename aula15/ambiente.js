let num = [5,8,2,9,3];

console.log(`Elementos do vetor antes do método sort(): ${num}`);

//usando o método push o javascript adiciona o elemento no último índice
num.push(1);
console.log(`Elementos do vetor antes do método sort() com push(): ${num}`);

//colocando todos os elementos em ordem
num.sort()
console.log(`Elementos do vetor depois do método sort() e push(): ${num}`);

//
console.log('')
console.log(`Elemento dentro do vetor no índice 4: ${num[4]}`)
console.log(`Tamanho do vetor: ${num.length}`);

//mostrando elementos dentro do vetor usando for
console.log('')
for(let posicao = 0; posicao < (num.length); posicao++){
    console.log(`Posição do índice [${posicao}]: ${num[posicao]}`);
}