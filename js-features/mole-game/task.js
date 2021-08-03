function getHole(index) {
    for (let i = 1; i < 10; i++) {
let clickHole = document.getElementById(`${index}${i}`)

clickHole.onclick = function() {

    const dead = document.getElementById("dead");
    const lost = document.getElementById("lost");

    if (clickHole.classList.contains('hole_has-mole')) {
        dead.textContent++;
    } else {
        lost.textContent++;
    }
   function clearStats() {
    dead.textContent = 0;
    lost.textContent = 0;
   }
    if (dead.textContent == 10) {
        alert('Победа!');
        clearStats()
    } else if (lost.textContent == 5) {
        alert('Вы проиграли!');
        clearStats()
      }
    }
  }
}

getHole('hole');