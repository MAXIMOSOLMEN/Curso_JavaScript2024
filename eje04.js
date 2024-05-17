/*4. Comparación de dos números: Declara dos variables a y b con valores numéricos y utiliza
 condicionales para comparar si a es mayor, menor o igual a b.*/
let a=Number(prompt("Ingrese el primer numero"));
let b=Number(prompt("Ingrese el segundo numero"));
let mayor=0;
if(a==b){
    alert('los numeros a: '+a+'y b: '+b+'son iguales')
    console.log('los numeros a: '+a+'y b: '+b+'son iguales')
}else if (a>b){
    mayor=a;
    alert('el mayor es a: '+a)
    console.log('el numero mayor es a:'+mayor)
}else{
    mayor=b;
    alert('el mayor es b: '+b)
    console.log('el numero mayor es b:'+mayor)
}


