document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы input и кнопку submit
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");
  var submitButton = document.getElementById("submit");
  var emailErrorMessage = document.getElementById("email-error-message");
  var nameErrorMessage = document.getElementById("name-error-message");
  var phoneErrorMessage = document.getElementById("phone-error-message");

  phoneInput.addEventListener("input", function mask() {
    const phoneNumber = phoneInput.value.trim();
    const phonePrefix = "+7";

    if (!phoneNumber.startsWith(phonePrefix)) {
      phoneInput.value = phonePrefix + phoneNumber;
    }
    if (phoneInput.value === "+7") {
      console.log(phoneInput.value === "");
      phoneInput.placeholder = "+7 900 000 00 00 ";
      phoneInput.value = "";
    } else {
      phoneInput.placeholder = "+7 900 000 00 00 ";
    }
  });

  function valForm() {
    console.log(phoneInput.value.trim());
    nameInput.value.trim() === ""
      ? (nameErrorMessage.innerText = "Введите имя")
      : null;
    emailInput.value.trim() === ""
      ? (emailErrorMessage.innerText = "Введите почту")
      : null;
    phoneInput.length !== 11
      ? (phoneErrorMessage.innerText = "Неверная длина номера")
      : null;
    phoneInput.value.trim() === ""
      ? (phoneErrorMessage.innerText = "Введите номер телефона")
      : null;
    // if (
    //   nameInput.value.trim() === "1" &&
    //   emailInput.value.trim() === "1"
    //   // &&
    //   // phoneInput.value.trim() === "1"
    // ) {
    //   emailErrorMessage.innerText = "Введите почту";
    //   nameErrorMessage.innerText = "Введите имя";
    //   phoneErrorMessage.innerText = "Введите телефон";
    // }
  }

  // Функция для проверки полей input
  function checkInputs() {
    if (
      nameInput.value.trim() !== "" &&
      emailInput.value.trim() !== "" &&
      phoneInput.value.trim() !== ""
    ) {
      // submitButton.removeAttribute("disabled");
    } else {
      // submitButton.setAttribute("disabled", "disabled");
    }
  }

  // Добавляем слушателей событий на поля ввода
  nameInput.addEventListener("input", checkInputs);
  emailInput.addEventListener("input", checkInputs);
  phoneInput.addEventListener("input", checkInputs);
  submitButton.addEventListener("click", valForm);
});
// function validForm() {
//   console.log("fgkflng");
//   if (
//     nameInput.value.trim() === "" &&
//     emailInput.value.trim() === "" &&
//     phoneInput.value.trim() === ""
//   ) {
//     emailErrorMessage.innerText = "Введите почту";
//     nameErrorMessage.innerText = "Введите имя";
//     phoneErrorMessage.innerText = "Введите телефон";
//   }
// }
