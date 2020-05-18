var x = Symbol(); 
var y = Symbol();
 console.log( x == y);
 console.log(x != y);
 
 //contare fino a 10
 for(var i = 1; i<=10; i++)
 console.log(i)

//somma primi dieci numeri
 console.log("stampiamo la somma dei primi dieci numeri:")
     var somma = 0;
 for(var i=1; i<=10; i++){
      somma = somma + i;  
 }
 console.log(somma)

//fattoriale primi 5 numeri
 console.log("stampiamo il fattoriale dei primi 5 numeri:")
 var fattoriale = 1;
 for(var i = 1; i<=5; i++){
     fattoriale = fattoriale * i;
 }
 console.log(fattoriale)

//funzione e chiamata
 function saluta(persona) { 
     console.log("Ciao " + persona);
 }
 
 saluta("Caio");

 //funzione arrow (altro modo per scrivere una funzione standard)
 prova = (arrow) =>{
     console.log("funzione" + arrow );
 }
 prova(" Arrow");

 //funzione arrow passaggio più parametri
 somma = (a, b, c, d = 0) => console.log( a + b + c + d )
 somma(1,2,3);

 //return
 function area(lato1, lato2) { 
     return lato1 * lato2 
    }
console.log("La prima area vale " + area(1,2) + ", la seconda " + area(3,4))

//array Sort
var arr1 = [10, 2, 3];
console.log(arr1);
console.log("uso la sort per ordinare l'array")
console.log(arr1.sort((a,b) => a-b))
//array push
arr1.push(5);
console.log("uso array push per inserire il numero 5 all'array")
console.log(arr1);
//array concat
var arr2 = [3,12,6]
console.log("concateno un altro array")
console.log(arr1.concat(arr2))
//array pop
console.log("uso array pop per svuotare l'array")
arr1.pop()
console.log(arr1)
arr1.pop()
console.log(arr1)
arr1.pop()
console.log(arr1)
//array slice
console.log("nuovo array su cui uso slice per spezzarlo")
var arr2 = [10, 2, 3, 4, 5, 6]
console.log(arr2.slice(2))
//metodo EVERY array
var arr4 = [10, 20, 30, 40, 50, 60] 
function maggiorenne(num) { 
    return num >= 18; 
}
console.log(arr4.every(maggiorenne))
//metodo FOREACH array
function duplica(num) {
     console.log(num * 2); 
}
console.log(arr4.forEach(duplica))
//metodo MAP
var array8 = [3,9,11,4];
var array7 = array8.map(duplica);
console.log(array7);

//metodo FILTER
var arr3 = [10, 20, 30, 40, 50, 60] 
var filtrati = arr3.filter( (numero) => numero > 30)
 console.log(arr3)
 console.log(filtrati)

 