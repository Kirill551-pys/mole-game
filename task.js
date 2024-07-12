let wins = 0;
let losses = 0;
let holes = [];

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

// Функция для добавления крота в лунку
function addMole() {
  const randomHole = getRandomHole();
  randomHole.classList.add('hole_has-mole');
  setTimeout(() => {
    randomHole.classList.remove('hole_has-mole');
    addMole();
  }, 1000); // крот исчезает через 1 секунду
}

addMole();

// Обработчик событий для каждой лунки
holes.forEach((hole) => {
  hole.addEventListener('click', () => {
    if (hole.classList.contains('hole_has-mole')) {
      wins++;
      console.log(`Wins: ${wins}`);
      if (wins === 10) {
        alert('Вы победили!');
        wins = 0;
        losses = 0;
      }
    } else {
      losses++;
      console.log(`Losses: ${losses}`);
      if (losses === 5) {
        alert('Вы проиграли!');
        wins = 0;
        losses = 0;
      }
    }
  });
});