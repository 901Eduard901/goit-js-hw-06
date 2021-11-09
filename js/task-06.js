const textInput = document.querySelector('#validation-input');

textInput.addEventListener("blur", onFocusInput);

function onFocusInput() {
  if (textInput.value.length === 6) {
    textInput.setAttribute("class", "valid");
  } else textInput.setAttribute("class", "invalid");
};