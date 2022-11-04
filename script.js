function main() {

    const poleHTMLCollection = document.getElementsByClassName('pole')
    const poleArr = [].slice.call(poleHTMLCollection);
    var turn = 'cross';
    var game = [0,0,0,0,0,0,0,0,0];
    var gameOver = false;
    
    poleArr.forEach(pole => {
            pole.addEventListener("click", addCircle); 
        });
    
    function addCircle(evt) {

        if (evt.currentTarget.classList.contains('empty') && !gameOver) {

            evt.currentTarget.classList.remove('empty');
            evt.currentTarget.classList.add('taken');
            
            const newDiv = document.createElement("div");
            
            newDiv.classList.add(turn); 
            evt.currentTarget.appendChild(newDiv);
            game[parseInt(evt.currentTarget.id[evt.currentTarget.id.length - 1]) - 1] = turn === 'cross' ? 1 : 10;
            
            gameOver = checkForWin();

            turn = turn === 'cross' ? 'circle' : 'cross';

        } else if (gameOver) {
            const msg = document.getElementById('msg');
            msg.innerHTML = turn + ' wins';
        }
        
    }

    function checkForWin() {
        let combinations = [
            [game[0], game[1], game[2]],
            [game[3], game[4], game[5]],
            [game[6], game[7], game[8]],
            [game[0], game[3], game[6]],
            [game[1], game[4], game[7]],
            [game[2], game[5], game[8]],
            [game[0], game[4], game[5]],
            [game[2], game[4], game[6]]
        ];
        isWin = false;
        combinations.forEach(comb => {
            let sum = comb.reduce((partialSum, a) => partialSum + a, 0);
            if (sum === 3 || sum === 30) {
                isWin = true;
            }
        })
        return isWin;
    }

}

main();