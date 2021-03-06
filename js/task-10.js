const inputRef = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  let initialSize = 30;
  const amount = inputRef.value;
  for (let i = 0; i < amount; i += 1) {
    const divRef = document.createElement("div");
    divRef.style.width = `${initialSize}px`;
    divRef.style.height = `${initialSize}px`;
    divRef.style.backgroundColor = getRandomHexColor();
    boxesRef.append(divRef);
    initialSize += 10;
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
