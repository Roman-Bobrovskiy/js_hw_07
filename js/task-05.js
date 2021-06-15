// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

let inputRef = document.querySelector("#name-input");
let spamRef = document.querySelector("#name-output");
inputRef.addEventListener("keydown", (event) => {
  inputRef.textContent = event.key;
  spamRef.textContent = event.currentTarget.value;
  if (spamRef.textContent === "") {
    spamRef.textContent = "незнакомец";
  }
});
