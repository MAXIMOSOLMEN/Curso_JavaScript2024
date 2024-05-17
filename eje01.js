/*Determina el mayor de tres números:
Declara tres variables a, b y c con valores numéricos y utiliza condicionales
para determinar cuál de ellos es el mayor*/
let a=Number(prompt("Ingrese el primer numero"));
let b=Number(prompt("Ingrese el segundo numero"));
let c=Number(prompt("Ingrese el tercer numero"));
let mayor=0;
if(a>b && a>c){
    mayor=a;
}else if (b>a && b>c){
    mayor=b;
}else{
    mayor=c;
}
console.log('el numero mayor es:'+mayor)

