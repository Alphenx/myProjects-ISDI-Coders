const suma = (num1,num2)=>{
    return parseFloat(num1) + parseFloat(num2);
}

const resta = (num1,num2)=>{
    return parseFloat(num1) - parseFloat(num2);
}

const multiplicacion = (num1,num2)=>{
    return parseFloat(num1) * parseFloat(num2);
}

const division = (num1,num2)=>{
    return parseFloat(num1) / parseFloat(num2);
}

const raiz = (num1)=>{ Math.sqrt(num1) }



function calculadora() {
    let operacion = prompt(`¿Qué operación quieres realizar? \n 1: suma \n 2: resta \n 3: multiplicación \n 4: división`);
        
    if (operacion == 1) {
            let numA = prompt("Inserta primer número");
            let numB = prompt("Inserta segundo número");
            resultado = suma(numA,numB);
            console.log(numA + " + " + numB + " = " + resultado)
        alert(`El resultado de tu suma es ${resultado}`);

        } else if (operacion == 2) {
            let numA = prompt("Inserta primer número");
            let numB = prompt("Inserta segundo número");
            resultado = resta(numA,numB);
            console.log(numA + " - " + numB + " = " + resultado)
        alert(`El resultado de tu resta es ${resultado}`);

        } else if (operacion == 3) {
            let numA = prompt("Inserta primer número");
            let numB = prompt("Inserta segundo número");
            resultado = multiplicacion(numA,numB);
            console.log(numA + " * " + numB + " = " + resultado)
        alert(`El resultado de tu multiplicación es ${resultado}`);

        } else if (operacion == 4) {
            let numA = prompt("Inserta primer número");
            let numB = prompt("Inserta segundo número");
            resultado = division(numA,numB);
            console.log(numA + " / " + numB + " = " + resultado)
        alert(`El resultado de tu división es ${resultado}`);

        } else {
        alert("No se ha podido ejecutar la operación");

        return resultado;


    }

    seguirCalculando()
}

function seguirCalculando() {
    let seguir = confirm("¿seguir calculando?")
        if (seguir === true){
            calculadora()}
        else {
            alert("¡Hasta pronto!")}
}



alert("Bienvenido/a a la Calculadora ISDI Coders");
calculadora()
