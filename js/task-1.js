const listItems = document.querySelectorAll("#categories > .item");

console.log(`Number of categories: ${listItems.length}`);

const itemsLogging = listItems.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
