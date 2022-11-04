function main() {

    const poleHTMLCollection = document.getElementsByClassName('pole')

    var poleArr = [].slice.call(poleHTMLCollection);
    
    poleArr.forEach(pole => {
            pole.addEventListener("click", addCircle); 
        });
    
    function addCircle(evt) {
        const newDiv = document.createElement("div");
        
        newDiv.classList.add('circle');
        newDiv.setAttribute('id', 'taken');
        
        evt.currentTarget.appendChild(newDiv);
        
        }
}










main();