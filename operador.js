/*Calculadora simple:
Declara tres variables: a (un número), operador (un operador aritmético como
cadena), y b (otro número). Utiliza condicionales para realizar la operación
correspondiente y muestra el resultado.
*/
let a=Number(prompt("Ingrese el primer numero"));
let b=Number(prompt("Ingrese el segundo numero"));
let operador=prompt("Ingrese sólo un operador: +,-,*,/");
if(operador=="+"){
    let suma=a+b
    alert('la suma es: '+suma)
    console.log('La suma es: ',suma)
}else if(operador=="-"){
    let resta=a-b
    alert('la resta es: '+resta)
    console.log('La resta es: ',resta)
}else if(operador=="*"){
    let multi=a*b
    alert('la multiplicacion es: '+multi)
    console.log('La multiplicacion es: ',multi)
}else if(operador=="/"){
    let divi=a/b
    alert('la division es: '+divi)
    console.log('La division es: ',divi)
}else{
    alert('este operador no existe')
    console.log('este operador no existe')
}

