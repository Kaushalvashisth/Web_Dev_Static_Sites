setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const CD = new Date();
  const hours = CD.getHours();
  const min = CD.getMinutes();
  const sec = CD.getSeconds();

  const secondDegrees = sec * 6;
  const minuteDegrees = (min + sec / 60) * 6; //total minutes
  const hourDegrees = (hours + min / 60 + sec / 3600) * 30; //total hours
  setRotation(secondHand, secondDegrees);
  setRotation(minuteHand, minuteDegrees);
  setRotation(hourHand, hourDegrees);
}

function setRotation(element, degrees) {
  element.style.setProperty("--rotation", degrees);
}

setClock();
