//1
console.log('Hello World!');



//2
let personas=['Cordero','Benezra','Castera','Ghelman','Ekes','Lipreti','Mas'];

function arrayTradicional(array){
    array.forEach(elemento => {
        console.log(elemento);
    });
}

const arrayFlecha=(array)=>{
    let comentario='';
    array.forEach(elemento => {
        comentario+=(elemento.toString()+', ')
    });
    console.log(comentario);
}

arrayTradicional(personas);
arrayFlecha(personas);



//3
personas.push('Lucas M.');
arrayFlecha(personas);



//4
console.log(personas.lastIndexOf('Ghelman'));



//5
const numeros=[14,1,2,9,12,18,10,9,12,18];
let suma=numeros.reduce((a,b)=>a+b);
console.log(suma);



//6
personas.reverse();
arrayFlecha(personas);



//7
const NumerosOrdenados = numeros.sort((a, b) => a - b);
arrayFlecha(NumerosOrdenados);



//8
const algunosNumerosMayores = numeros.filter(n => n > 5);
arrayFlecha(algunosNumerosMayores);



//9
const numsRepetidos = {};
numeros.forEach((num) => {
  numsRepetidos[num] = (numsRepetidos[num] || 0) + 1;
});
console.log(numsRepetidos);