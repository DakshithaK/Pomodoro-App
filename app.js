const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');

let myInterval;
let state = true;
let totalSeconds;

const updateSeconds = () => {
  const minuteDiv = document.querySelector('.minutes');
  const secondDiv = document.querySelector('.seconds');

  totalSeconds--;

  let minutesLeft = Math.floor(totalSeconds / 60);
  let secondsLeft = totalSeconds % 60;

  secondDiv.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
  minuteDiv.textContent = `${minutesLeft}`;

  if (minutesLeft === 0 && secondsLeft === 0) {
    clearInterval(myInterval);
    state = true; // Allow restart
  }
};

const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent);

  if (state) {
    state = false;
    totalSeconds = sessionAmount * 60;
    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert('Session has already started.');
  }
};

startBtn.addEventListener('click', appTimer);
