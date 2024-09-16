import * as readlineSync from "readline-sync";
let nro1:number;
let nro2:number;
let indice:number;
let suma:number;
console.clear();
console.log("--------------------------------------------");
console.log("-------------SUMA entre NUMEROS-------------");
console.log("--------------------------------------------");
nro1 = 0;
nro2 = 0;
suma = 0;
nro1 = readlineSync.questionInt("    Ingrese el numero a iniciar la suma:   ");
nro2 = readlineSync.questionInt("    Ingrese el numero a finalizar la suma: ");
if (nro1 <= nro2) 
                {
                 for (indice = nro1; indice <= nro2; indice = indice + 1) 
                    {
                     suma=suma + indice;
                    }   
                console.log(suma);   
                } 
               else 
                    {
                    for (indice = nro2; indice <= nro1; indice = indice + 1) 
                            {
                             suma=suma + indice;
                            }   
                        console.log(suma);   
                    }

                   