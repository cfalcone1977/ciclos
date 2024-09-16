import * as readlineSync from "readline-sync";
let cantDados:number;
let indice:number;
let probab:number;
console.clear();
console.log("--------------------------------------------");
console.log("-------------DADOS PROBABILIDAD-------------");
console.log("--------------------------------------------");
cantDados = 0;
indice=1;
probab=1;
while (cantDados<=0) 
        {
        console.clear();    
        cantDados= readlineSync.questionInt("Ingrese el numero de dados: ");
        
        }
for (indice;indice <=cantDados; indice = indice + 1)
                                                    {
                                                    probab = (6 * probab);
                                                    }
probab = 1/probab;
console.log(`La probabilidad de que ${cantDados} dados salgan todos con el numero 6 es: ${probab.toFixed(10)}` );

