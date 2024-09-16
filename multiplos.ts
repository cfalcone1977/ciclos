import * as readlineSync from "readline-sync";
let multi2,multi3:number;
let indice:number;
console.clear();
console.log("--------------------------------------------");
console.log("------------------MULTIPOS------------------");
console.log("-------------Multiplos de 2 y 3-------------");
indice = 1;
for (indice;indice <=100;indice=indice+1)
                                        {
                                         multi2= indice % 2;
                                         multi3= indice % 3;
                                         if (multi2==0 && multi3==0) 
                                                                  {
                                                                  console.log(`${indice} es multiplo de 2 y 3`);
                                                                  }
                                                                   else if (multi2==0) 
                                                                                    {
                                                                                    console.log(`${indice} es multiplo de 2`);
                                                                                    }
                                                                                    else if (multi3==0)                
                                                                                                {
                                                                                                 console.log(`${indice} es multiplo de 3`);
                                                                                                }

                                        }
