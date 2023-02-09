// function rollDice2(playerPoint){

//     //the base case
//     if ( playerPoint === 5) return "player will win";

//     let playerDice = Math.floor(Math.random() * 6 );
//     console.log("player", playerDice);
//     let pcDice = Math.floor(Math.random() * 6);
//     console.log('pc', pcDice);
    
//     if (playerDice > pcDice){
//         playerPoint = rollDice2(playerPoint + 1);
//         console.log(`Player get 1 point * rollDice(${playerPoint}`);
//     }else{
//         console.log("PC get 1 point");

//     }
// }

// rollDice2(0);

console.log(`%c ---Roll Dice 2 -----`, `color:yellow;`)
//way 2
function rollDice(){
    numberDice = Math.floor(Math.random() * 6) + 1;
    return numberDice;
}

let playerPoint = 0;
let pcPoint = 0

while (playerPoint < 5 && pcPoint <5){

    const playerDice = rollDice();
    console.log("playerDice", playerDice);

    const pcDice = rollDice()
    console.log("pcDice", pcDice);

    checkDices(playerDice,pcDice);

    if (playerPoint === 5){
        console.log(`Player win`);
    }else{
        console.log(`PC win`);
    }
}


function checkDices (playerDice, pcDice){
    if (playerDice > pcDice){
        playerPoint +=1;
        console.log(`Player point in total point is: ${playerPoint}`);

    }else if(playerDice < pcDice){
        pcPoint += 1;
        console.log(`PC dice  point in total point is: ${pcPoint}`);

    }else{
        console.log(`It's draw - No one get point`);
    }
}
