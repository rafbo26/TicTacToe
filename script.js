function main() {

    const poleHTMLCollection = document.getElementsByClassName('pole')
    const poleArr = [].slice.call(poleHTMLCollection);
    var turn = 'cross';
    
    poleArr.forEach(pole => {
            pole.addEventListener("click", addCircle); 
        });
    
    function addCircle(evt) {

        if (evt.currentTarget.classList.contains('empty')) {

            evt.currentTarget.classList.remove('empty');
            evt.currentTarget.classList.add('taken');
            
            const newDiv = document.createElement("div");
            
            newDiv.classList.add(turn); 
            evt.currentTarget.appendChild(newDiv);
            turn = turn === 'cross' ? 'circle' : 'cross';
        }
        
    }
}










main();