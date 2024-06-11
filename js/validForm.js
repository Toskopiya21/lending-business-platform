document.addEventListener("DOMContentLoaded", function () {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");
  var submitButton = document.getElementById("submit");

  var emailErrorMessage = document.getElementById("email-error-message");
  var nameErrorMessage = document.getElementById("name-error-message");
  var phoneErrorMessage = document.getElementById("phone-error-message");
  var errorMessage = document.getElementById("error-message");

  var btn = document.getElementsByClassName("modal-content__body-btn")[0];
  var modal = document.getElementById("modal");
  var modalSuccessfully = document.getElementById("modalSuccessfully");

  var keyPhone = [
    900, 902, 903, 904, 905, 906, 908, 909, 950, 951, 953, 960, 961, 962, 963,
    964, 965, 966, 967, 968, 969, 980, 983, 986, 901, 910, 911, 912, 913, 914,
    915, 916, 917, 918, 919, 978, 981, 982, 984, 985, 495, 987, 988, 989, 920,
    921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 936,
    937, 938, 939, 999, 952, 958, 977, 991, 992, 993, 994, 995, 996,
  ];

  function valPhone() {
    if (phoneInput.value.trim() === "") {
      phoneErrorMessage.innerText = "Enter the phone number.";
      return;
    }
    if (phoneInput.value.length != 12) {
      phoneErrorMessage.innerText = "The number length is incorrect.";
      console.log(phoneInput.value.length, phoneInput.value);
      return;
    }
    if (keyPhone.includes(Number(phoneInput.value.slice(2, 5))) !== true) {
      phoneErrorMessage.innerText = "Invalid area/operator code";
      return;
    }
    phoneErrorMessage.innerText = "";
  }

  function valForm() {
    nameInput.value.trim() === ""
      ? (nameErrorMessage.innerText = "Enter a name.")
      : (nameErrorMessage.innerText = "");
    emailInput.value.trim() === ""
      ? (emailErrorMessage.innerText = "Enter your email address.")
      : (emailErrorMessage.innerText = "");

    valPhone();

    if (
      nameInput.value.trim() !== "" &&
      emailInput.value.trim() !== "" &&
      phoneInput.value.trim() !== "" &&
      phoneInput.value.trim().length === 12 &&
      keyPhone.includes(Number(phoneInput.value.slice(2, 5)))
    ) {
      modal.style.display = "none";
      modalSuccessfully.style.display = "block";
    } else {
      errorMessage.innerText = "Please fill in all required fields.";
    }
  }

  // Функция для проверки полей input
  function checkInputs() {
    if (
      nameInput.value.trim() !== "" &&
      emailInput.value.trim() !== "" &&
      phoneInput.value.trim() !== "" &&
      phoneInput.value.trim().length === 12
    ) {
      btn.style.backgroundColor = "#954CED";
    } else {
      btn.style.backgroundColor = "#B9B9B9";
    }
  }

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

  // Добавляем слушателей событий на поля ввода
  nameInput.addEventListener("input", checkInputs);
  emailInput.addEventListener("input", checkInputs);
  phoneInput.addEventListener("input", checkInputs);
  submitButton.addEventListener("click", valForm);
});
