// const input = document.getElementById("customInput");
// const optionsContainer = document.getElementById("options");
// const options = optionsContainer.querySelectorAll(".custom-option");

// function toggleDropdown() {
//   optionsContainer.classList.toggle("active");
// }

// function selectOption(option) {
//   input.value = option.textContent;
//   optionsContainer.classList.remove("active");
// }

// document.addEventListener("click", (e) => {
//   if (!input.contains(e.target) && !optionsContainer.contains(e.target)) {
//     optionsContainer.classList.remove("active");
//   }
// });

// input.addEventListener("input", filterOptions);

// function filterOptions() {
//   const searchTerm = input.value.toLowerCase();
//   options.forEach((option) => {
//     const text = option.innerText.toLowerCase();
//     option.style.display = text.includes(searchTerm) ? "block" : "none";
//   });
// }
