var flush = new Audio('my_beep.wav');
var start = false;
var count = selectedTic();

document.querySelector('#start-button').onclick = function () {
  start = true;
  count = selectedTic();
  document.querySelector('#count').textContent = Number(count).toString();
};

document.querySelector('#stop-button').onclick = function () {
  start = false;
  document.querySelector('#count').textContent = Number(0).toString();
};

function beep() {
  flush.play();
}

setInterval(function () {
  if (start) {
    count = count - 1;
    document.querySelector('#count').textContent = Number(count).toString();
    if (count <= 0) {
      beep();
      count = selectedTic();
      document.querySelector('#count').textContent = Number(count).toString();
    }
  }
}, 1000);

function selectedTic() {
  return Number(document.querySelector('#tic-select').value);
}