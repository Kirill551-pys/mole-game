let wins = 0;
let losses = 0;
let holes = [];
const counterDead = document.getElementById(`dead`);
const counterLost = document.getElementById(`lost`);

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

// Инициализируем массив лунок
for (let i = 1; i <= 9; i++) {
  holes.push(getHole(i));
}

// Функция для рандомного выбора лунки для крота
function getRandomHole() {
  return holes[Math.floor(Math.random() * holes.length)];
}

// Обработчик событий для каждой лунки
holes.forEach((hole) => {
  hole.addEventListener('click', () => {
    if (hole.classList.contains('hole_has-mole')) {
      wins++;
      counterDead.textContent = `${wins}`;
      if (wins === 10) {
        alert('Вы победили!');
        wins = 0;
        losses = 0;
      }
    } else {
      losses++;
      counterLost.textContent = `${losses}`;
      if (losses === 5) {
        alert('Вы проиграли!');
        wins = 0;
        losses = 0;
      }
    }
  });
});