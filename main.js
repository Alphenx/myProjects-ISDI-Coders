const bingoCard = [
    //Line 1
    { number: "X", matched: false },
    { number: "X", matched: false },
    { number: "X", matched: false },
    { number: "X", matched: false },
    //Line 2
    { number: "X", matched: false },
    { number: "X", matched: false },
    { number: "X", matched: false },
    { number: "X", matched: false },
    //Line 3
    { number: "X", matched: false },
    { number: "X", matched: false },
    { number: "X", matched: false },
    { number: "X", matched: false },
    //Line 4
    { number: "X", matched: false },
    { number: "X", matched: false },
    { number: "X", matched: false },
    { number: "X", matched: false },
];

let usedNumbers = [];
let userName = "User";

const buttonGenCard = document.getElementById("newCard");
const buttonConfirm = document.getElementById("confirmCard");
const buttonPlay = document.querySelector("#play");
const userInput = document.querySelector("#textInput");
const submitInput = document.querySelector("#addName");


//Generador de números del 1 al 99.
const numberGenerator = () => {
    let generatedNumber = Math.floor((Math.random()*99)+1);
    return generatedNumber;
};


//Consigue el nombre.
const addName = ()=>{
    userName = userInput.value

    if (userName === ""){
        addName();
        return;
    };

    userPlaying.innerHTML = `<b>Player:</b> ${userName}.`;
    playerPoints.innerHTML = `<h3>0 pts</h3>`; //`<h3>${pointsCounter} pts</h3>`;
    playerName.innerHTML += `<h3>${userName}</h3>`;

    userInput.value = ""
    userInput.placeholder = "Genera un cartón y pulsa ✔"
    userInput.disabled = true;
    submitInput.disabled = true;

    buttonGenCard.addEventListener("click", bingoCardGenerator);
    buttonConfirm.addEventListener("click", confirmCard);
    return userName;
};


//Muestra la puntuación
showPoints = () =>{
    let pointsCounter = 100 - (usedNumbers.length)
    playerPoints.innerHTML = `<h4>${pointsCounter} pts</h4>`;
}


//Genera cartones sin repetir numeros.
const bingoCardGenerator = () =>{
    const usedCardNumbers = [];
    let repeated = [];
    userInput.disabled = true;

    bingoCard.forEach((randomNumber) => {
        randomNumber.number = numberGenerator();
        randomNumber.matched = false;
        usedCardNumbers.push(randomNumber.number)
    });

    repeated = usedCardNumbers.filter((item, index) => usedCardNumbers.indexOf(item) !== index)
    
    if (repeated.length > 0){
        bingoCardGenerator();
    };

    showBingoCard();
};


//Confirma el cartón.
const confirmCard = () =>{
    for (let i = 0; i < bingoCard.length; i++){
        if(bingoCard[i].number == "X"){
            userInput.placeholder = "Primero genera un cartón";
        } else {
            userInput.placeholder = "¡Cartón fijado! Puedes empezar a jugar.";

            buttonGenCard.removeEventListener("click", bingoCardGenerator)
            buttonPlay.addEventListener("click", bombo);
        };
    };
};


//Muestra el cartón.
function showBingoCard() {
    //Fila1
    document.getElementById("0").innerHTML = bingoCard[0].number;
    document.getElementById("1").innerHTML = bingoCard[1].number;
    document.getElementById("2").innerHTML = bingoCard[2].number;
    document.getElementById("3").innerHTML = bingoCard[3].number;
    //Fila2
    document.getElementById("4").innerHTML = bingoCard[4].number;
    document.getElementById("5").innerHTML = bingoCard[5].number;
    document.getElementById("6").innerHTML = bingoCard[6].number;
    document.getElementById("7").innerHTML = bingoCard[7].number;
    //Fila3
    document.getElementById("8").innerHTML = bingoCard[8].number;
    document.getElementById("9").innerHTML = bingoCard[9].number;
    document.getElementById("10").innerHTML = bingoCard[10].number;
    document.getElementById("11").innerHTML = bingoCard[11].number;
    //Fila4
    document.getElementById("12").innerHTML = bingoCard[12].number;
    document.getElementById("13").innerHTML = bingoCard[13].number;
    document.getElementById("14").innerHTML = bingoCard[14].number;
    document.getElementById("15").innerHTML = bingoCard[15].number;

};


//ACCIÓN PRINCIPAL - Play
const bombo = () =>{
    let lastNumberGenerated = document.getElementById("lastNumber").innerHTML = numberGenerator();

    if (usedNumbers.includes(lastNumberGenerated)){
        bombo();
        return;
    };
    
    usedNumbers.push(lastNumberGenerated)

    if (usedNumbers.length === 99){
        alert("Has agotado el número máximo de turnos")
        resetBingo();
        return;
    };

    matchNumber();
    showPoints();

    if (bingoChecker() === true){
        matchNumber();
        buttonPlay.removeEventListener("click", bombo)
        userInput.placeholder = "¡BINGOOOOOOO!"

        setTimeout(wantToReset(), 2000)

    } else if (lineChecker() === true){
        userInput.placeholder = "¡ENHORABUENA, HAS CONSEGUIDO LÍNEA!"
    };

    console.table(usedNumbers);
    return lastNumberGenerated;
};


//Comprueba si ha salido el numero en bingoCard y lo cambia por X.
const matchNumber = () => {

    bingoCard.forEach((element)=>{

        if (usedNumbers.includes(element.number)){
            element.matched = true;
            element.number = "X".fontcolor("red");
            showBingoCard();

        };
    });
};


//Comprueba si hay línea y devuelve true en caso afirmativo.
const lineChecker = () =>{
    if (bingoCard[0].matched === true
        && bingoCard[1].matched === true
        && bingoCard[2].matched === true
        && bingoCard[3].matched === true){
        
        return true;

    } else if (bingoCard[4].matched === true
        && bingoCard[5].matched === true
        && bingoCard[6].matched === true
        && bingoCard[7].matched === true){

        return true;

    } else if (bingoCard[8].matched === true
        && bingoCard[9].matched === true
        && bingoCard[10].matched === true
        && bingoCard[11].matched === true){

        return true;

    } else if (bingoCard[12].matched === true
        && bingoCard[13].matched === true
        && bingoCard[14].matched === true
        && bingoCard[15].matched === true){
        
        return true;

    } else {
        return false;
    };
};


//Comprueba si hay bingo y devuelve true en caso afirmativo.
const bingoChecker = () =>{
    let bingoEvent = 0;
    
    for (let i = 0; i < bingoCard.length; i++){
        if(bingoCard[i].matched === true){
            bingoEvent++
        };
    };
    
    if (bingoEvent < 16){
        return false;
    } else if (bingoEvent >= 16){
        return true;
    };
};


//Pregunta para seguir jugando
wantToReset = () =>{
    let reset = confirm(`¡Enhorabuena! Has ganado en ${usedNumbers.length} turnos\n¿Quieres echar otra partida?`);

    if (reset === true){
        resetBingo();
        bingo();
    } else {
        alert("Hasta pronto");
        return;
    }
}


//Reset
resetBingo = () =>{

    userInput.placeholder = "Genera un cartón y pulsa ✔"
    buttonPlay.removeEventListener("click", bombo)
    buttonConfirm.addEventListener("click", confirmCard)
    buttonGenCard.addEventListener("click", bingoCardGenerator)

    bingoCard.forEach((element)=>{
        element.matched = false;
        element.number = "X";
        showBingoCard();
    });

    usedNumbers = [];
};


//Funcion BINGO
const bingo = () =>{

    //Botones por defecto hacen focus a userInput.
    buttonPlay.addEventListener("click", ()=>{
        userInput.focus();
    });

    buttonConfirm.addEventListener("click", ()=>{
        userInput.focus();
    });

    buttonGenCard.addEventListener("click", ()=>{
        userInput.focus();
    });

    //Evento formulario.
    textInputForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        addName();
    });

};


bingo();