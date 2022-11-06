/* PROYECTO AIRLINES PRO - ISDI CODERS - Adrián García
 * 
 * Interfaz de usuario para una aplicación de aerolínea (por terminal).
 * Se puede visualizar los vuelos, ver su coste medio y comprobar si realizan escala.
 * Además se pueden crear nuevos vuelos y eliminar cualquier vuelo seleccionado.
 * 
 * User interface for an airline application (per terminal).
 * You can view the flights, see their average cost and check if they make a stopover.
 * Furthermore you can create new flights and delete any selected flight.
 * 
 * Tested on Mozilla Firefox.
 */ 


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

//* CONSTRUCTOR DE VUELOS
class Flight {
    constructor(id, to, from, cost, scale) {
        this.id = id;
        this.to = to;
        this.from = from;
        this.cost = cost;
        this.scale = scale;
    }
}

//* BIENVENIDA
const hello = ()=>{
    do{
    userName = prompt("Saludos!\nBienvenido/a a la APP de vuelos de ISDI CODERS.\n\n¿Cuál es tu nombre de usuario?");
    } while (userName === "" || userName === null || parseInt(userName) || userName === undefined);
    
    alert("Bienvenido/a " + userName + ".");
    console.log("Bienvenido/a " + userName + ".\nEstos son los vuelos programados para hoy  ➞");
};

//* INTERFAZ PRINCIPAL
const interface = ()=>{
    console.clear();

    const precios = [];
    let total = 0;

    //Coste medio de los vuelos
    for (i = 0; i < flights.length; i++){

        precios.push(flights[i].cost);
        total += precios[i];
        media = total / flights.length;
    };

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

//* INICIO DE SESIÓN
const userChooser = ()=>{
    let result = prompt("Bienvenido/a " + userName + ".\n\nEstos son los vuelos programados para hoy ➞\nInicia sesión para más funciones.\n\nINICIO DE SESIÓN: \nUsuario (user: por defecto) \nAdministrador (admin)");

    if (result === "admin"){
        admin = true;
        console.log("SESIÓN: Administrador");
    } else {
        admin = false;
        console.log("SESIÓN: Usuario");
    };

    if (admin === false){
        userInterface();
    } else {
        adminInterface();
    };
};

//* INTERFAZ MODO USUARIO
const userInterface = ()=>{
    do{
        do {
        searchValue = +prompt("SESIÓN: Usuario\n\nFiltra por precio máximo (€)");
            if (searchValue == 0){
                resetInterface();
            };
        } while (isNaN(searchValue) || searchValue == "");

        console.clear();
        console.log(`\nVuelos disponibles por ${searchValue}€ o menos:`);
        
        for (i = 0; i < flights.length; i++){
            if (flights[i].scale == true){
                scaleValue = "SI";
                } else {
                scaleValue = "NO";
            };
            
            if (flights[i].cost <= searchValue){

                console.log(`\nVuelo nº ${flights[i].id + 1}:`);
                console.log(`Desde ${flights[i].from} hasta ${flights[i].to} \nPrecio: ${flights[i].cost} € Escala: ` + scaleValue);

            };
        };
        stillSearching = confirm("SESIÓN: Usuario\n\n¿Seguir buscando?");
         
    } while (stillSearching === true);

    
    if (stillSearching === false){
        resetInterface();
    };
};

//* INTERFAZ MODO ADMINISTRADOR
const adminInterface = ()=>{
    let confirmFlight = confirm("SESIÓN: Administrador\n\n¿Quieres crear un vuelo?");
    if (confirmFlight === true){
        createFlight();
        interface();
    } else {
        resetInterface();
    };
};

//* CREAR NUEVO VUELO (Admin)
const createFlight = ()=>{
    do {
        do {
            from = prompt("SESIÓN: Administrador\n\nLugar de salida");
            
        } while (from == "" || from == null || parseInt(from) || from == undefined);

        do {
            to = prompt("SESIÓN: Administrador\n\nLugar de llegada");
            
        } while (to == "" || to == null || parseInt(to) || to == undefined);

        do {
            cost = +prompt("SESIÓN: Administrador\n\nPrecio");
        } while (isNaN(cost) || cost == null || cost == "");

            scale = confirm("SESIÓN: Administrador\n\n¿Es necesario hacer escala?");

        flights.push(new Flight(flights.length,to,from,cost,scale));
        interface();
        addMoreFlights = confirm("SESIÓN: Administrador\n\n¿Quieres añadir más vuelos?");

    } while (addMoreFlights == true && flights.length <= 14);
    if (addMoreFlights == false){
        resetInterface();
    }
    if (flights.length >= 15){
        cleanFlight();
    };
};

//* ELIMINAR VUELO (Admin)
const cleanFlight = ()=>{

    alert("Solo puedes añadir hasta 15 vuelos :D");

    do {
        eraseFlights = confirm("SESIÓN: Administrador\n\n¿Deseas eliminar un vuelo?");

        if (eraseFlights === true) {
            
            eraseFlight = +prompt("SESIÓN: Administrador\n\nIndroduce el Nº del vuelo que deseas eliminar.\nDeja el campo vacío para eliminar el último vuelo introducido.\n ↓ ↓ ↓");
                
            if (isNaN(eraseFlight) || eraseFlight == 0 || eraseFlight == undefined){
                alert(`Último vuelo eliminado con éxito.`);
                flights.pop();
                interface();

            } else {
                alert(`Vuelo nº ${flights[eraseFlight].id}: ${flights[eraseFlight - 1].from} - ${flights[eraseFlight - 1].to} eliminado con éxito.`);
                flights.splice(eraseFlight - 1,1);
                interface();
            };

        } else if (eraseFlight == null){
            resetInterface();
        };

    } while (eraseFlights === true);

};

//* RESETEO DE INTERFAZ
const resetInterface = ()=>{
    interface();
    alert("Cerrando programa... \nDebes volver a iniciar sesión");
    userChooser();
};




hello();
interface();
userChooser();

