var modal = document.getElementById("modal");
var modalSuccessfully = document.getElementById("modalSuccessfully");

var btns = document.getElementsByClassName("ui-btn-primary");
var btnsClose = document.getElementById("closeModalSuccess");

var openModal = function () {
  modal.style.display = "block";
};

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", openModal);
}

var span = document.getElementById("close");
var spanSuccessfully = document.getElementById("closeModalSuc");

span.onclick = function () {
  modal.style.display = "none";
};

spanSuccessfully.onclick = function () {
  modalSuccessfully.style.display = "none";
};
btnsClose.onclick = function () {
  modalSuccessfully.style.display = "none";
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalSuccessfully) {
    modalSuccessfully.style.display = "none";
  }
};
var modalCookies = document.getElementById("modalCookies");

var btnsDeclineCloseCookies = document.getElementById("decline");
var btnsAcceptCloseCookies = document.getElementById("accept");
var modalCookies = document.getElementById("modalCookies");

var spanCookies = document.getElementById("closeModalCook");

btnsAcceptCloseCookies.onclick = function () {
  modalCookies.style.display = "none";
};
btnsDeclineCloseCookies.onclick = function () {
  modalCookies.style.display = "none";
};
spanCookies.onclick = function () {
  modalCookies.style.display = "none";
};

setTimeout(
  () => {
    modalCookies.style.display = "block";
  }, 1000)