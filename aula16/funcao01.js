function parImpar(n){
    if( n % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

let res  = parImpar(10);
console.log(res);
console.log(parImpar(10));