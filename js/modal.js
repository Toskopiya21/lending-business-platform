// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// // var btn = document.getElementById("ui-btn-primary");
// var btn = document.getElementsByClassName("ui-btn-primary");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
// Получаем модальное окно
var modal = document.getElementById("myModal");

// Получаем все кнопки с классом 'ui-btn-primary'
var btns = document.getElementsByClassName("ui-btn-primary");

// Функция для открытия модального окна
var openModal = function () {
  modal.style.display = "block";
};

// Добавляем обработчик событий ко всем кнопкам
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", openModal);
}

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на <span> (x), закрывается модальное окно
span.onclick = function () {
  modal.style.display = "none";
};

// Когда пользователь нажимает в любом месте за пределами модального окна, оно закрывается
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
