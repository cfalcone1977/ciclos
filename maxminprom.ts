import * as readlineSync from "readline-sync";
let maximo,minimo,promedio,cantidad:number;
let nro:number;
console.clear();
console.log("--------------------------------------------");
console.log("--------------MAXIMO y MINIMO---------------");
console.log("--------------------------------------------");
nro = readlineSync.questionFloat("Ingrese un numero: ");
maximo = nro;
minimo = nro;
promedio=nro;
cantidad=1;
while (nro !=0) 
                {
                nro = readlineSync.questionInt("Ingrese un numero: ");  
                if (nro !=0) {
                              cantidad = cantidad +1;
                             }
                if (nro<minimo && nro!=0) 
                               {
                                 minimo = nro;
                               }
                if (nro>maximo && nro!=0)
                               {
                                 maximo = nro;
                               }
                promedio = promedio + nro;  
                console.log(promedio.toFixed(2)," ",cantidad);   
                }
promedio=promedio/cantidad;                
console.log("El maximo numero ingresado fue: ",maximo);
console.log("El minimo numero ingresado fue: ",minimo);
console.log("El valor promedio de los numeros ingresados es:",promedio.toFixed(2));


 