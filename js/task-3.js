const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  const textValue = inputEl.value.trim();

  outputEl.textContent = textValue === "" ? "Anonymous" : textValue;
});
