function main() {

    
    const poleHTMLCollection = document.getElementsByClassName('pole')
    const poleArr = [].slice.call(poleHTMLCollection);
    var game = [0,0,0,0,0,0,0,0,0];
    let combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    poleArr.forEach(pole => {
            pole.addEventListener("click", gameTurn); 
        });
    
    function gameTurn(evt) {
        playerTurn(evt.currentTarget);
        if (checkForWin()) {
            gameOver('Player');
            return
        }
        AITurn();
        if (checkForWin()) {
            gameOver('AI');
            return
        }
    }
        
    function AITurn() {
        let winInNextRound = checkForOutcome(20);
        let looseInNextRound = checkForOutcome(2);
        if (winInNextRound[0]) {
            console.log(winInNextRound)
            let pole = poleArr[winInNextRound[1]];
            changeDOM(pole, 'circle');
            game[parseInt(pole.id[pole.id.length - 1]) - 1] = 10;
        } else if (looseInNextRound[0]) {
            let pole = poleArr[looseInNextRound[1]];
            changeDOM(pole, 'circle');
            game[parseInt(pole.id[pole.id.length - 1]) - 1] = 10;
        } else {
            for (let i = 0; i < game.length; i++) {
                if (game[i] === 0) {
                    changeDOM(poleArr[i], 'circle');
                    game[parseInt(poleArr[i].id[poleArr[i].id.length - 1]) - 1] = 10;
                    return;
                }
            }
        }
    }

    function checkForOutcome(outcome) {
        answer = false;
        nextMove = -1;
        combinations.forEach(comb => {
            let sum = comb.reduce((partialSum, a) => partialSum + game[a], 0);
            if (sum === outcome) {
                answer = true;
                console.log(outcome, comb);
                nextMove = findNextMove(comb);
                console.log(nextMove);
            }
        })
        return [answer, nextMove];
    }

    function findNextMove(comb) {
        let answer;
        comb.forEach(el => {
            if (game[el] === 0) {
                answer = el;
            }
        })
        return answer;
    }

    function playerTurn(pole) {
        if (pole.classList.contains('empty')) {
            
            changeDOM(pole, 'cross');
            game[parseInt(pole.id[pole.id.length - 1]) - 1] = 1;
            
        } 
        
    }
    
    function gameOver(winner) {
        let msg = document.getElementById('msg');
        console.log(winner + ' wins!');
        msg.innerHTML = winner + ' wins!';
        
        poleArr.forEach(pole => {
            pole.removeEventListener("click", gameTurn); 
        });

    }

    function changeDOM(pole, player) {
        
        const crossOrCircle = document.createElement("div");
        
        crossOrCircle.classList.add(player); 
        pole.appendChild(crossOrCircle);
        pole.classList.remove('empty');
        pole.classList.add('taken');
    }
        
    function checkForWin() {
        let isWin = false;
        combinations.forEach(comb => {
            let sum = comb.reduce((partialSum, a) => partialSum + game[a], 0);
            if (sum === 3 || sum === 30) {
                isWin = true;
            }
        })
        return isWin;
    }



}

main();