const clock = document.getElementById("clock");
const containers = document.querySelectorAll(".container");
const toggleButton = document.getElementById("toggle-button");
let clockInterval;

function updateTime() {
  let d = new Date();

  let h = d.getHours() % 12 || 12;
  h = h.toString().padStart(2, "0");
  let m = d.getMinutes().toString().padStart(2, "0");
  let s = d.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${h}:${m}:${s}`;
}

clockInterval = setInterval(updateTime, 1000);

toggleButton.onclick = () => {
  containers.forEach((element) => {
    element.classList.toggle("show");
  });
  if (toggleButton.innerText === "Clock") {
    clearInterval(clockInterval);
    clockInterval = null;
    toggleButton.innerText = "Stop Watch";
  } else {
    clearInterval(interval);
    interval = null;
    toggleButton.innerText = "Clock";
    toggleWatch.innerHTML = "Start";
    clockInterval = setInterval(updateTime, 1000);
  }
};

const stopWatch = document.getElementById("stop");
const toggleWatch = document.getElementById("toggle");
// Stores the interval ID returned by setInterval(),
// enabling the script to manage the timer interval.
let time = 0;
let interval;

function startTimer() {
  toggleWatch.innerHTML = "Stop";
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    time += 1;
    let hours = Math.floor(time / (100 * 60 * 60))
      .toString()
      .padStart(2, "0");
    let min = Math.floor((time / (100 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    let sec = Math.floor((time / 100) % 60)
      .toString()
      .padStart(2, "0");
    let msec = Math.floor(time % 100)
      .toString()
      .padStart(2, "0");
    stopWatch.innerText = `${hours}:${min}:${sec}:${msec}`;
  }, 10);
}

function stopTimer() {
  toggleWatch.innerHTML = "Start";
  clearInterval(interval);
  interval = null;
}

toggleWatch.onclick = function () {
  if (interval) {
    stopTimer();
  } else {
    startTimer();
  }
};

function reset() {
  time = 0;
  toggleWatch.innerHTML = "Start";
  clearInterval(interval);
  interval = null;
  stopWatch.innerText = "00:00:00:00";
}
