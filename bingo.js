const bingoCard = [
    { number: 1, matched: false },
    { number: 2, matched: false },
    { number: 3, matched: false },
    { number: 4, matched: false },

    { number: 5, matched: false },
    { number: 6, matched: false },
    { number: 7, matched: false },
    { number: 8, matched: false },

    { number: 9, matched: false },
    { number: 10, matched: false },
    { number: 11, matched: false },
    { number: 12, matched: false },

    { number: 13, matched: false },
    { number: 14, matched: false },
    { number: 15, matched: false },
    { number: 16, matched: false },
];

const usedNumbers = [];
let lined = false;
let binged = false;
let pointsCounter = 0

const buttonGenCard = document.querySelector("#buttonGenCard")
const buttonConfirm = document.querySelector("#confirm")
const buttonPlay = document.querySelector("#play")




//Generador de números del 1 al 99 - sin repetirse.
const numberGenerator = () => {
    generatedNumber = Math.floor((Math.random()*99)+1);
    
    if (usedNumbers.includes(generatedNumber)){
        numberGenerator();
    };
    
    return generatedNumber;
};





//Pregunta el nombre y devuelve userName.
const askUserName = () => {
    do{
    userName = prompt("Saludos!\nBienvenido/a al BINGO de ISDI CODERS.\n\n¿Cuál es tu nombre de usuario?");

    } while (userName === "" || userName === null || !isNaN(userName));
    
    alert("Bienvenido/a " + userName + ".");
    document.getElementById("userPlaying").innerHTML = `<b>Player:</b> ${userName}.`;

    buttonGenCard.addEventListener("click", bingoCardGenerator);
    pointsTable();
    return userName;
};





const confirmCard = () =>{
    alert("¡Cartón fijado!\nPuedes empezar a jugar.");
    buttonGenCard.removeEventListener("click", bingoCardGenerator)
    buttonPlay.addEventListener("click", newTurn);
    return;
}






//Genera cartones sin repetir numeros.
const bingoCardGenerator = () =>{
    const usedCardNumbers = [];
    bingoCard.forEach((randomNumber) => {
        randomNumber.number = numberGenerator();
        randomNumber.matched = false;
        usedCardNumbers.push(randomNumber.number)
    });

    const repeated = usedCardNumbers.filter((item, index) => usedCardNumbers.indexOf(item) !== index)

    if (repeated.length > 0){
        bingoCardGenerator();
    };

    showBingoCard();
    buttonConfirm.addEventListener("click", confirmCard)
    return;
};

buttonGenCard.addEventListener("click", bingoCardGenerator);


//PLAY - Genera un nº, lo guarda y después lo muestra.
const newTurn = () => {
    usedNumbers.push(numberGenerator());
    document.getElementById("lastNumber").innerHTML = generatedNumber;
    console.log(usedNumbers);
    matchNumber();
    return;
};




//Comprueba si ha salido el numero en bingoCard y lo valida.
const matchNumber = () => {
    bingoCard.forEach((element)=>{
        if (usedNumbers.includes(element.number)){
            element.matched = true;
            element.number = "X".fontcolor("red");
            pointsCounter ++;
            showBingoCard();
        };
    });
    lineAndBingoChecker();
    
    console.table(bingoCard);
};

const showUsedNumbers = () => {
    document.getElementById("lastNumber").innerHTML = numberGenerator();
    console.log(usedNumbers)
}




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
    pointsTable();

    
};



const lineAndBingoChecker = () =>{
    while (lined === false){

        if (bingoCard[0].matched === true
            && bingoCard[1].matched === true
            && bingoCard[2].matched === true
            && bingoCard[3].matched === true){
            
            alert("line");
            pointsCounter += 10;
            console.log("line");
            lined = true;

        } else if (bingoCard[4].matched === true
            && bingoCard[5].matched === true
            && bingoCard[6].matched === true
            && bingoCard[7].matched === true){

            alert("line");
            pointsCounter += 10;
            console.log("line");
            lined = true;

        } else if (bingoCard[8].matched === true
            && bingoCard[9].matched === true
            && bingoCard[10].matched === true
            && bingoCard[11].matched === true){

            alert("line");
            pointsCounter += 10;
            console.log("line");
            lined = true;

        } else if (bingoCard[12].matched === true
            && bingoCard[13].matched === true
            && bingoCard[14].matched === true
            && bingoCard[15].matched === true){
            
            alert("line");
            pointsCounter += 10;
            console.log("line");
            lined = true;

        } else {
            console.log("no line");
            return;
        }
    };

    
    if (bingoCard[0].matched === true
        && bingoCard[1].matched === true
        && bingoCard[2].matched === true
        && bingoCard[3].matched === true

        && bingoCard[4].matched === true
        && bingoCard[5].matched === true
        && bingoCard[6].matched === true
        && bingoCard[7].matched === true
        
        && bingoCard[8].matched === true
        && bingoCard[9].matched === true
        && bingoCard[10].matched === true
        && bingoCard[11].matched === true

        && bingoCard[12].matched === true
        && bingoCard[13].matched === true
        && bingoCard[14].matched === true
        && bingoCard[15].matched === true){

        alert("Bingo");
        pointsCounter += 20;
        console.log("bingo");
        binged = true;

        seguir = confirm("¿Quieres seguir jugando?")
        if (seguir === true){
            bingo();
        } else {
            alert("Hasta pronto!")
        };
    };
    

    return lined, binged;
};

const pointsTable = () =>{
    playerName.innerHTML = `<h3>${userName}</h3>`;
    playerPoints.innerHTML = `<h3>${pointsCounter} pts</h3>`;
}





//Output generatedNumber, usedNumbers[], bingoCard table.
function bingo() {
    askUserName();
};

bingo();








