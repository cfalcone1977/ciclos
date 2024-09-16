import * as readlineSync from "readline-sync";
let cantidadNotas:number;
let nota:number;
let promedio:number;
let contadorNotas:number;
console.clear;
console.log("--------------------------------------------");
console.log("--------------Promedio NOTAS-----------------");
console.log("--------------------------------------------");
cantidadNotas = readlineSync.questionInt("Cantidad notas a promediar : ");
contadorNotas = 1;
promedio = 0;
while (contadorNotas <= cantidadNotas) 
      {
        nota = readlineSync.questionFloat(`Ingrese la nota nro. ${contadorNotas}: `);
        contadorNotas = contadorNotas + 1;
        promedio = promedio + nota;      
      }
console.log("\n");      
promedio = promedio / cantidadNotas;
console.log(" El promedio de las notas es:",promedio);
