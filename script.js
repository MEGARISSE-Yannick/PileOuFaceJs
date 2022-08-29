
let face = 0;
let pile = 0;
let coin = document.querySelector("#coin");
let coinBl = document.querySelector("#coinBlock");
let flipBtn = document.querySelector("#flipBtn");
let resetBtn = document.querySelector("#resetBtn");

flipBtn.addEventListener("click", () => {
      let i = Math.floor(Math.random() * 2);
      coin.style.animation = "none";
      if (i) {
            setTimeout(function () {
                  coin.style.animation = "spin-face 3s forwards";
            }, 100);
            face++;
      } else {
            setTimeout(function () {
                  coin.style.animation = "spin-pile 3s forwards";
            }, 100);
            pile++;
      }
      // définit les fonction (stats & button reset)
      setTimeout(updateStats, 3000);
});

// Compteur de point
function updateStats() {
      document.querySelector("#face-score").textContent = `Face: ${face}`;
      document.querySelector("#pile-score").textContent = `Pile: ${pile}`;
}

// Reset les stats du jeu
resetBtn.addEventListener("click", () => {
      coin.style.animation = "none";
      pile = 0;
      face = 0;
      updateStats();
});
