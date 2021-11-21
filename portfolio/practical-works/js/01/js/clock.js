const emEl = document.querySelector('.clock em');

function getClock () {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,'0');
  const minute = String(date.getMinutes()).padStart(2,'0');
  // const seconds = String(date.getSeconds()).padStart(2,'0');
  emEl.textContent = `${hour}:${minute}`;
}
getClock();
setInterval(getClock, 1000);