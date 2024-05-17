/*2.Determina el rango de un número: Declara una variable número con un valor numérico y utiliza
 condicionales para determinar en qué rango se encuentra.*/
let RI=Number(prompt("Ingrese Rango Inicial"));
let RF=Number(prompt("Ingrese Rango Final"));
let NUM=Number(prompt("Ingrese un numero"));
let mayor=0;
if(NUM>=RI && NUM<=RF){
    alert('esta dentro del rango'+NUM)
    console.log('el rango es:'+RI+'-'+RF+',El numero es:'+NUM+', esta dentro del rango')
}else{
    alert('el numero esta fuera del rango'+NUM)
    console.log('el rango es:'+RI+'-'+RF+',El numero es:'+NUM+', esta fuera del rango')
}


