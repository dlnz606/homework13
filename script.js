//окно
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("openModal").addEventListener("click", function () {
    document.getElementById("modal").classList.remove("hidden");
  });

  document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("modal").classList.add("hidden");
  });
});

//слайдеры
let slides = document.querySelectorAll(".slider img");
let index = 0;

document.getElementById("next").addEventListener("click", function () {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
});

document.getElementById("prev").addEventListener("click", function () {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
});

// форма
document.getElementById("form").addEventListener("submit", function (event) {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let valid = true;

  emailError.textContent = "";
  passwordError.textContent = "";

  if (!email.includes("@")) {
    emailError.textContent = "Некорректный email";
    valid = false;
  }
  if (password.length < 6) {
    passwordError.textContent = "Пароль должен содержать 6 символов";
    valid = false;
  }

  if (!valid) event.preventDefault();
});
