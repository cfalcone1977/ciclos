import * as readlineSync from "readline-sync";
let contador,porcentaje,positivos:number;
let nro:number;
console.clear();
console.log("--------------------------------------------");
console.log("-----------Positivos y Porcentaje-----------");
console.log("--------------------------------------------");
nro = readlineSync.questionFloat("Ingrese un numero: ");
contador = 0;
porcentaje = 0;
positivos = 0;
while (nro !=0) 
                {
                contador = contador + 1;    
                if (nro>0) 
                               {
                                 positivos = positivos + 1 ;
                               }
                nro = readlineSync.questionFloat("Ingrese un numero: ");                 
                }
if (contador>0) 
              {
                porcentaje = (positivos * 100)/contador;
              }
console.log("Numero positivos ingresados:  ",positivos);
console.log("El pocentaje de positivos es: ",porcentaje.toFixed(2));

 