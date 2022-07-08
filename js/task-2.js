const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createList = (options) => {
  return options.map((ingredient) => {
    const itemRef = document.createElement("li");
    itemRef.textContent = ingredient;
    itemRef.classList.add("item");
    return itemRef;
  });
};

const ingredientsRef = document.querySelector("#ingredients");

const itemListRef = createList(ingredients);

ingredientsRef.append(...itemListRef);
