/*5. Número máximo entre cuatro números:
Declara cuatro variables a, b, c y d con valores numéricos. Utiliza condicionales
para determinar cuál de los cuatro números es el mayor y muéstralo.
*/
let a=Number(prompt("Ingrese el primer numero"));
let b=Number(prompt("Ingrese el segundo numero"));
let c=Number(prompt("Ingrese el tercer numero"));
let d=Number(prompt("Ingrese el cuarto numero"));
let mayor=0;
if(a>b && a>c && a>d){
    mayor=a;
}else if (b>a && b>c && b>d){
    mayor=b;
}else if (c>a && c>b && c>d){
    mayor=c;
}else{
    mayor=d
}
alert('el numero mayor es:'+mayor)
console.log('el numero mayor es:'+mayor)

