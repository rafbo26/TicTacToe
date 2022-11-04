function main() {
    const plansza = document.getElementById('plansza');
    const poleArr = document.getElementsByClassName('pole')
    


    poleArr[0].addEventListener("click", addCircle); 

    function addCircle() {
        const newDiv = document.createElement("div");
      
        newDiv.classList.add('circle');
        
        poleArr[0].appendChild(newDiv);
      
        console.log("hi")
      }
}










main();