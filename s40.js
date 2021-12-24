var numeros=[100,200,300,400]  
console.log(numeros);

numeros.push(50);      
console.log(numeros);

numeros.pop();        
console.log(numeros);

numeros.unshift(80); 
console.log(numeros)

numeros.shift();   
console.log(numeros);
//Metodo Slilce()para crear un arreglo Temporal se bebe indicar desde donde comienza y donde termina.
var numeros=[19,20,36,44,34,89,90,87,65,98]
console.log (numeros)
console.log(numeros.slice(5,10))

console.log (numeros)
console.log(numeros.slice(0,8))

var nombre = ["Elizabhet","eveling","Hinostroza", "Salcedo"]
console.log(nombre)
nombre.splice(2,0, 'Romero')
console.log("Slice 0 elemento")
console.log(nombre)

nombre. splice ( 3,1);
console.log ("Slice 1 elemento")
console.log(nombre)

nombre = ['Elizabhet','Eveling','Hinostroza', 'Salcedo'];
console.log("Slice 2 elemento")
console.log(nombre)
nombre.splice(0,3, 'Eli', 'Hinostroza', 'muro');
console.log(nombre)

/*metodo concat()
une 2 arreglos*/
console.log("CONCAT()");
const array1 = ['a','b','c'];
console.log(array1);
const array2 = ['d','e','f'];
console.log(array2);
const array3 = array1.concat(array2);
console.log(array3);
/* usando concat para inir mas de 2 arreglos*/
const arreglo1 =['a','b','c'];
console.log(arreglo1);
const arreglo2 =['d','e','f'];
console.log(arreglo2);
const arreglo3 =['g','h','i'];
console.log(arreglo3);
const arreglo4 =['j','k','l'];
console.log(arreglo4);
const arreglo5 = arreglo1.concat(arreglo2, arreglo3, arreglo4);
console.log(arreglo5)

const arreglo6 =['gato','cachorro','elefante'];
console.log(arreglo6);
const arreglo7 =['patito','lorito','alpca'];
console.log(arreglo7);
const arreglo8 =['osito panda','monito','conejo'];
console.log(arreglo8);
const arreglo9 =['vicuña','leopardo','tigre'];
console.log(arreglo9);
const arreglo10 = arreglo6.concat(arreglo7, arreglo8, arreglo9);
console.log(arreglo10)