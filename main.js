// lear
// Hover Card

window.addEventListener("DOMContentLoaded", () => {
  const switchBtn = document.querySelector(".switch-btn");

  switchBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-body");
    switchBtn.innerHTML =
      switchBtn.innerHTML == '<i class="fa fa-sun-o"></i>'
        ? '<i class="fa fa-moon-o"></i>'
        : '<i class="fa fa-sun-o"></i>';
  });
});
