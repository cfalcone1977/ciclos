import * as readlineSync from "readline-sync";
let nombre:string;
let practica,problemas,teorica,nota:number;
let pausa:string;
nota=0;
nombre= " ";
while (nombre != "") {
                        console.clear();
                        console.log("--------------------------------------------");
                        console.log("--------------CALIFICACIONES----------------");
                        console.log("--------------------------------------------");
                        nombre = readlineSync.question("Ingrese el nombre: ");
                        if (nombre!="") {                              
                                         practica = readlineSync.questionFloat("Ingrese calificacion practica:  "); 
                                         if (practica>=0 && practica <=10) {
                                                                         problemas = readlineSync.questionFloat("Ingrese calificacion problemas: ");
                                                                         if (problemas>=0 && problemas <=10){
                                                                                                            teorica = readlineSync.questionFloat("Ingrese calificacion teorica:   ");
                                                                                                            if (teorica>=0 && teorica <=10){
                                                                                                                                           console.log(`La calificacion del alumno ${nombre} es:`);
                                                                                                                                           console.log(`Practica: ${practica}, problemas: ${problemas}, teorica: ${teorica}`);                     
                                                                                                                                           nota=((practica/100)*10) + ((problemas/100)*50) + ((teorica/100)*40);
                                                                                                                                           console.log("Nota Final:",nota);    
                                                                                                                                           pausa=readlineSync.question("Presione ENTER para continuar...");        
                                                                                                                                          }
                                                                                                                                          else {
                                                                                                                                                console.log("NOTA DE TEORICA MAL INGRESADA");
                                                                                                                                                pausa=readlineSync.question("Presione ENTER para continuar...");
                                                                                                                                               }

                                                                                                           }
                                                                                                           else {
                                                                                                                console.log("NOTA DE PROBLEMAS MAL INGRESADA");
                                                                                                                pausa=readlineSync.question("Presione ENTER para continuar...");
                                                                                                                }
                                                                          }
                                                                          else {
                                                                                console.log("NOTA DE PRACTICA MAL INGRESADA");
                                                                                pausa=readlineSync.question("Presione ENTER para continuar...");
                                                                               }
                                          }
                      }

                     
