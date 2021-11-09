const inputRange = document.querySelector('#font-size-control');
const outputTextSize = document.querySelector('#text');

inputRange.addEventListener("click", onInputRange);

function onInputRange() {
    outputTextSize.style.fontSize = `${inputRange.value}px`;
};