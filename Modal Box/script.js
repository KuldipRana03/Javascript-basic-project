const btn = document.querySelector(".btn");
const modal = document.getElementById("modal");
const okBtn = document.querySelector(".ok-btn");

btn.addEventListener("click", () => {
  modal.classList.remove("modal");
  modal.classList.add("show");
});

okBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("modal");
});
