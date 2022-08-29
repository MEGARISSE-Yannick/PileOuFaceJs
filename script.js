
let face = 0;
let pile = 0;
let coin = document.querySelector("#coin");
let coinBl = document.querySelector("#coinBlock");
let flipBtn = document.querySelector("#flipBbtn");
let resetBtn = document.querySelector("#resetBtn");

function jeu() { //lancement de la fonction jeu avec le random et l'animation
      let i = Math.floor(Math.random() * 2);
      coinBl.style.animation = "none";
      coin.style.animation = "none";
      if (i) {
            setTimeout(function () {
                  coinBl.style.animation = "lancer 4s ease-out ";
                  coin.style.animation = "spin-face 3.7s linear";
            }, 100);
            face++;
      } else {
            setTimeout(function () {
                  coinBl.style.animation = "lancer 4s ease-out";
                  coin.style.animation = "spin-pile 3.7s linear";
            }, 100);
            pile++;
      }
      // définit les fonction (stats & button reset)
      setTimeout(updateStats, 3000);
      disableButton();
};

// Compteur de point

function updateStats() {
      document.querySelector("#face-score").textContent = `Face: ${face}`;
      document.querySelector("#pile-score").textContent = `Pile: ${pile}`;
}

// Désactive le bouton au lancer pour eviter multiple appuie

function disableButton() {
      flipBtn.disabled = true;
      setTimeout(function () {
            flipBtn.disabled = false;
      }, 3000);
}

// Reset les stats du jeu

resetBtn.addEventListener("click", () => {
      coin.style.animation = "none";
      pile = 0;
      face = 0;
      updateStats();
});
