let pile = 0;
let face = 0;
let coin = document.querySelector("#coin")
let coinFace = document.querySelector("#face")
let coinPile = document.querySelector("#pile")
let flipBtn = document.querySelector("#flipBtn");
let resetBtn = document.querySelector("#resetBtn");

function jeu() {
      

      let i = Math.floor(Math.random() * 2);
      if (i) {
            setTimeout(function () {
                  coinFace.style.animation = "flipFace 0.5s linear 0s  alternate;"
                  coinPile.style.animation = "flipPile 0.5s linear 0s  alternate;"
            }, 3000);
            face++;

      } else {
            setTimeout(function () {
                  coinFace.style.animation = "flipFace 0.5s linear 0s  alternate;"
                  coinPile.style.animation = "flipPile 0.5s linear 0s  alternate;"
            }, 3000);
            pile++;

      }
}
function jeu() {
      let i = Math.floor(Math.random() * 2);
      coin.style.animation = "hidden";
      document.querySelector("#face").style = "z-index: 1;";
      document.querySelector("#pile").style = "z-index: 1;";
      if (i) {
            setTimeout(function () {
            coin.style.animation = "spin-face  3s forwards";
            }, 10);
            face++;
            setTimeout(() => {
            document.querySelector("#face").style = "z-index: 3;";
            }, 3000);
      } else {
            setTimeout(function () {
                  coin.style.animation = "spin-pile  3s forwards";
                  setTimeout(() => {
                        document.querySelector("#pile").style = "z-index: 3;";
                        }, 3000);
            }, 10);
            pile++;
      }
}

flipBtn.addEventListener("click", () => {
      jeu()
      setTimeout(() => {

            score()
      }, 3000);;
})

//affichage du score avec les valeurs face et pile
function score() {
      document.querySelector("#pile-score").textContent = `Pile: ${pile}`;
      document.querySelector("#face-score").textContent = `Face: ${face}`;
}

// Reset le jeux
resetBtn.addEventListener("click", () => {
      alert("Le jeux va etre relancer ");
      coin.style.animation = "none";
      pile = 0;
      face = 0;
      score();
});