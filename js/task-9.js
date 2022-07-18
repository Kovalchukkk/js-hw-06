const refs = {
  body: document.body,
  btnChangeColor: document.querySelector(".change-color"),
  colorText: document.querySelector(".color"),
};

refs.btnChangeColor.addEventListener("click", handleColorChangeBtnClick);

function handleColorChangeBtnClick() {
  const color = getRandomHexColor();

  refs.body.style.backgroundColor = color;
  refs.colorText.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
