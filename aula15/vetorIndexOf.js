let valores = [8,1,7,4,2,9];
valores.sort();
console.log(valores);
console.log("")

for(let pos in valores){
    console.log(`O valor ${valores[pos]} está na posição ${valores.indexOf(valores[pos])}`);
}