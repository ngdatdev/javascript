const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");
const toggle = document.querySelector('#toggle');
let timerElement = document.getElementById('#timer');
let isMove = false;
let score = 0;
let time = 0;
let timerInterval;

function startTimer() {
	time = 0; 
	timerElement.innerText = `TIME: 0:00`; 
	timerInterval = setInterval(() => {
		time++;
		let minutes = Math.floor(time / 60);
		let seconds = time % 60;
		timerElement.innerText = `TIME: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	}, 1000);
}

toggle.addEventListener('click', () => {
	console.log();
	isMove ?   toggle.innerHTML = 'End' : toggle.innerHTML = 'Start'
	isMove = !isMove
	startTimer()
})

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowDown" || e.key === "Down") {
    moveHorizontal(avatar, 50);
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveHorizontal(avatar, -50);
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    moveVertical(avatar, 50);
    avatar.style.transform = "scale(1, 1)";
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    moveVertical(avatar, -50);
    avatar.style.transform = "scale(-1, 1)";
  }
  if (isTouching(coin, avatar)) {
    moveCoin();
    score++;
    renderScore();
  }
});

const moveVertical = (element, distance) => {
  const extractPos = extractPixel(element.style.left);
  avatar.style.left = `${extractPos + distance}px`;
};

const moveHorizontal = (element, distance) => {
  const extractPos = extractPixel(element.style.top);
  avatar.style.top = `${extractPos + distance}px`;
};

const extractPixel = (pos) => {
  if (!pos) {
    return 100;
  }
  return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
  const y = Math.floor(Math.random() * window.innerHeight);
  const x = Math.floor(Math.random() * window.innerWidth);
  coin.style.left = `${x}px`;
  coin.style.top = `${y}px`;
};

const renderScore = () => {
  const scoreDOM = document.querySelector("#score");
  scoreDOM.innerHTML = `SCORE: ${score}`;
};

function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

moveCoin();
