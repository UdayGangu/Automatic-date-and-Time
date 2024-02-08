const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let timerId;

function updateClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  clockElement.textContent = `${hours}:${minutes}:${seconds}`;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);
  dateElement.textContent = formattedDate;
}

startButton.addEventListener('click', () => {
  updateClock();
  timerId = setInterval(updateClock, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(timerId);
});
