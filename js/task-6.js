const validationInput = document.querySelector("#validation-input");

// console.log(validationInput.dataset.length);

validationInput.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
    return;
  }
  event.currentTarget.classList.remove("valid");
  event.currentTarget.classList.add("invalid");
});
