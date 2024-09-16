import * as readlineSync from "readline-sync";
let numero:number;
console.clear();
console.log("--------------------------------------------");
console.log("----------------PAR IMPAR o 0---------------");
console.log("--------------------------------------------");
numero = 0;
while (numero <= 0) 
      {
        numero = readlineSync.questionInt("Ingrese un numero: ");
        console.clear();
      }
if ( numero % 2 === 0) {
                        console.log("\n");
                        console.log("    EL NUMERO ES PAR");
                       }
                    else {
                         console.log("\n");
                         console.log("    EL NUMERO ES IMPAR");
                         }
