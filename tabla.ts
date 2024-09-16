import * as readlineSync from "readline-sync";
let nro1:number;
let nro2:number;
let indice:number;
let multi:number;
console.clear();
console.log("--------------------------------------------");
console.log("------------TABLA MULTIPLICACION------------");
console.log("--------------------------------------------");
nro1 = 0;
nro2 = 0;
multi = 0;
indice=1;
nro1 = readlineSync.questionInt("    Ingrese la tabla a calcular: ");
nro2 = readlineSync.questionInt("    Ingrese hasta que numero:    ");
for (indice; indice <= nro2; indice = indice + 1) 
    {
     console.log(` ${nro1} x ${indice} = `,multi = nro1 * indice);
    }  
