// PROYECTO AIRLINES  - ISDI CODERS - Adrián García

//* VUELOS POR DEFECTO
const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

//* BIENVENIDA
const hello = ()=>{
    do{
    userName = prompt("Saludos!\nBienvenido/a a la APP de vuelos de ISDI CODERS.\n\n¿Cuál es tu nombre de usuario?");
    } while (userName === "" || userName === null || parseInt(userName) || userName === undefined);
    
    alert("Bienvenido/a " + userName + ".");
};

//* INTERFAZ PRINCIPAL
const interface = ()=>{
    
    const precios = [];
    let total = 0;

    //Coste medio de los vuelos
    for (i = 0; i < flights.length; i++){

        precios.push(flights[i].cost);
        total += precios[i];
        media = total / flights.length;
    };

    console.log("Bienvenido/a " + userName + ".\nEstos son los vuelos programados para hoy  ↓");
    console.log(`\nEl coste medio de los vuelos es de ${media.toFixed(2)} €`);

    //Mostrar vuelos
    for (i = 0; i < flights.length; i++){
        if (flights[i].scale == true){
            scaleValue = "SI";
             } else {
            scaleValue = "NO";
        };
 
        console.log(`\nVuelo nº ${flights[i].id + 1}:`);
        console.log(`Desde ${flights[i].from} hasta ${flights[i].to} \nPrecio: ${flights[i].cost} € Escala: ` + scaleValue);
    };
};

hello();
interface();