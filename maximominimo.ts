import * as readlineSync from "readline-sync";
let maximo,minimo:number;
let nro:number;
console.clear();
console.log("--------------------------------------------");
console.log("--------------MAXIMO y MINIMO---------------");
console.log("--------------------------------------------");
nro = readlineSync.questionFloat("Ingrese un numero: ");
maximo = nro;
minimo = nro;
while (nro !=0) 
                {
                nro = readlineSync.questionFloat("Ingrese un numero: ");      
                if (nro<minimo && nro!=0) 
                               {
                                 minimo = nro;
                               }
                if (nro>maximo && nro!=0)
                               {
                                 maximo = nro;
                               }
                }
console.log("El maximo numero ingresado fue: ",maximo);
console.log("El minimo numero ingresado fue: ",minimo);

 