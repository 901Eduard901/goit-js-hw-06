function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

changeColorBtn.addEventListener("click", onColorChange);

function onColorChange() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
};