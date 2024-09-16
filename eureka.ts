import * as readlineSync from "readline-sync";
let clave:string;
let contador:number;
const claveOk = "eureka";
console.clear;
console.log("--------------------------------------------");
console.log("------------Verificador de Clave------------");
console.log("--------------------------------------------");
contador = 1;
clave = "";
while (clave != claveOk && contador <=3) 
      {
        clave = readlineSync.question(`Ingrese su clave: `);
        contador = contador + 1;
      }
if (clave === claveOk) {
                        console.log("\n");
                        console.log("             CLAVE CORRECTA");
                     }
                    else {
                         console.log("       CLAVE INCORRECTA - OPORTUNIDADES AGOTADAS");
                         }
