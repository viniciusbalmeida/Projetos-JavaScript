let num = [ 8, 1 , 7, 4, 2, 9]
num.sort()
num.push()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor está na posição ${pos}`)
}























/*
valores.sort()
for(let pos in  valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/




/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */




/*num[3] = 6
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[4]}`)*/