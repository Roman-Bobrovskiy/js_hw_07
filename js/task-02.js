// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let addLi = ingredients.forEach((ingredient) => {
  let newList = document.createElement("li");
  newList.textContent = ingredient;
  let addDomLi = document.querySelector("#ingredients");
  addDomLi.append(newList);
});
