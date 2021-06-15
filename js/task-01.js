let h2Ref = document.querySelectorAll(".item");
// console.log(h2Ref);
h2Ref.forEach((h2Ref) => {
  console.log(`Категория: ${h2Ref.children[0].textContent}`);
  console.log(`В списке ${h2Ref.children[1].children.length} категории`);
});
