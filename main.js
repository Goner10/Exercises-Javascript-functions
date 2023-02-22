
//Estos no forman parte de los ejercicios
function suma(a, b) {
    return a + b
}
console.log(suma(1, 2))
console.log(suma(3, 5))

//Esto no forma parte de los ejercicios
function greet(greeting = "Hello", name) {
    if (!name) {
        return greeting
    } else {
        return `${greeting} ${name}`
    }
}
console.log(greet())




//Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.
function resta(a, b) {
    return a - b
}
console.log(resta(5, 2))

//Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
function nota() {
    let nota = prompt("Introduce tu nota")
    switch (nota) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
            resultado = "Insuficiente";
            break;
        case "5":
        case "6":
            resultado = "Suficiente";
            break;
        case "7":
        case "8":
            resultado = "Notable";
            break;
        case "9":
        case "10":
            resultado = "Sobresaliente";
            break;
        default:
            break;
    }
    return resultado

}
console.log(nota())



//Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’
function duplicaNumero(numero) {
    if (typeof numero != "number") {
        return "Debo ser ejecutada con un numero";
    }

    else numero === "number"
    return (numero *2)
    
}
console.log(duplicaNumero(10))


//Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. 
function caracterInicial(hola) {
    if (typeof hola !== "string") {
        return "Debo ser ejecutada con un string"
    }

    else if (hola == ""){
        return "Debo ser ejecutada con un string no vacio"
    }
    else {
        return hola[0]
    }
}

console.log(caracterInicial(""))


//Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.

function ultimoCaracter(adios){
    if( typeof adios !== "string"){
        return "Debo ser ejecutada con un string"
    }
    else if( adios == ""){
        return "'Debo ser ejecutada con un string no vacío"
    }
    else{
        return adios.slice(-1)
    }
}
 console.log(ultimoCaracter("hola"))

//Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de caracteres
  
function cuentaCaracteres(mi){
    if(typeof mi != "string"){
        return "Debo ser ejecutada con un string"
    }
    else{
        return mi.length
    }
}
console.log(cuentaCaracteres("Gonzalo"))

// Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.

function esPalindromo(text){
    let textReversed = text.split("").reverse().join("");
    return textReversed === text ? "es palindromo" : "no es palindromo;"
}
console.log(esPalindromo("oso"))

    

//Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
function getPrecioMostrar(dos){
    if(typeof dos != 'number'){
        return "No es un formato correcto"
    }
    else{
        let result = dos.tofixed(2) + '$'
        return result
    }
}
let num1 = 10
console.log(getPrecioMostrar())

//Crea la función division que acepte como argumento dos números y devuelva el resultado de su división
function division(a, b){
    return a / b
}
console.log(division(6, 3))

//Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más

function array(arr){
    return arr.filter(i => i >= 5)
}
let arr1= [2, 4, 8, 9, 10]
console.log(array(arr1))


//Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false.
function esPrimo(){
    let str = prompt('Comprueba si es un numero primo ')
    let num = parseInt(str)
    for (let i = 2; i <= Math.ceil(num / 2); i++){
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(esPrimo())