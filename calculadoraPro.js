
let numeros = [];
let total = 0;


function calculadora(){
    
    let operacion = prompt(`¿Qué operación quieres realizar? \n [ + ] suma \n [ - ] resta \n [ * ] multiplicación \n [ / ] división \n [ √ ] raíz cuadrada (inserta un nº)`);

//CONDICIONAL --> sistema de elección de operación. 
if (operacion === "+"){
        console.log("Operación: SUMA " + "(" + operacion + ")");
        añadirNumeros();
        suma();

    } else if (operacion === "-"){
        console.log("Operación: RESTA " + "(" + operacion + ")");
        añadirNumeros();
        resta();

    } else if (operacion === "*"){
        console.log("Operación: MULTIPLICACIÓN " + "(" + operacion + ")");
        añadirNumeros();
        multiplicacion();

    } else if (operacion === "/"){
        console.log("Operación: DIVISIÓN " + "(" + operacion + ")");
        añadirNumeros();
        division();

    } else {
        
        let op = parseFloat(operacion);

        //OPERACIÓN RAIZ CUADRADA --> funciona por defecto si no se selecciona ningún operador y se pone un número positivo
        if (op > 0){
            let op = operacion;
            console.log("Operación: RAÍZ de " + operacion);

            let total = Math.sqrt(op);
            console.log("Total = " + total);
        
        //CONTROL DE ERRORES
        } else if (op < 0){
            alert("¡No existen raíces de números negativos!");
            seguirCalculando();

        } else {
            alert("¡Eso no es un número!");
            seguirCalculando();
        };
    };
    
};


//FUNCION PARA AÑADIR NÚMEROS ---> Te pregunta por 2 números y luego te pregunta si quieres añadir
// Con el bucle for y .push va añadiendo los números al array [numeros] y lo retorna.
function añadirNumeros(){
    
    for (let i = 0; i <= numeros.length; i++){
        
        let num1 = prompt("Inserta un número");
        let num2 = prompt("Inserta otro número");
        
        numeros.push(parseFloat(num1));
        numeros.push(parseFloat(num2));
        añadirNumeritos = confirm("¿Quieres añadir más numeros?");

        while (añadirNumeritos === true) {
            let num = prompt("Inserta otro número");
            numeros.push(parseFloat(num));
            añadirNumeritos = confirm("¿Quieres añadir más numeros?");
        };

        
    console.log(numeros);
    return numeros;
    };
};

//FUNCIONES DE OPERADORES ---> Primero vuelve a declarar "total" y luego opera el arreglo. Devuelve un alert() y el resultado en consola.

function suma(){
    let total = 0;
    for (let j of numeros){
        total += j;
    };
    if (numeros.includes(NaN)){
        alert("Debes introducir los números correctamente");
        seguirCalculando();
    } else {
    alert(`El resultado de tu suma es ${total}`);
    console.log("Total = " + total);
    };
};

function resta(){
    let total = numeros.shift();
    for (let j of numeros){
        total -= j;
    };
    if (numeros.includes(NaN)){
        alert("Debes introducir los números correctamente");
        seguirCalculando();
    } else {
    alert(`El resultado de tu resta es ${total}`);
    console.log("Total = " + total);
    };
};

function multiplicacion(){
    let total = 1;
    for (let j of numeros){
        total *= j;
    }
    if (numeros.includes(NaN)){
        alert("Debes introducir los números correctamente");
        seguirCalculando();
    } else {
    alert(`El resultado de tu multiplicación es ${total}`);
    console.log("Total = " + total)};
};

function division(){
    let total = numeros.shift()
    for (let j of numeros){
        total /= j;
    };
    if (numeros.includes(NaN)){
        alert("Debes introducir los números correctamente");
        seguirCalculando();
    } else if (total == Infinity){
        alert("Es imposible dividir entre 0 :(");
        seguirCalculando();
    } else {
        alert(`El resultado de tu división es ${total}`);
        console.log("Total = " + total)};
};


//FUNCION PARA SEGUIR CALCULANDO

function seguirCalculando() {
    let seguir = confirm("¿Quieres seguir calculando?");
        if (seguir === true){
            return true;
        } else { alert("¡Hasta pronto! ♥")};
            return false;     
};

//FUNCION PARA VACIAR EL ARRAY
function vaciarArray() {
    for (k = 0; k <= numeros.length; k++){
        numeros = [];
    };
};



alert("Bienvenido/a a la Calculadora ISDI Coders");

calculadora();
while (seguirCalculando() === true){ 
    vaciarArray();
    calculadora();
}; 


