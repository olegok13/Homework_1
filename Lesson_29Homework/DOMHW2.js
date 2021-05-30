/*
2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном.
 На модальном окне должен быть текст и кнопка "Закрыть".
 Изначально модальное окно не отображается. 
 При клике на кнопку "Открыть" появляется модальное окно, 
 на кнопку "Закрыть" – исчезает.
*/

let buttonOpen = document.querySelector(".start");

let buttonClose = document.querySelector(".close");

let modelWindow = document.querySelector(".hystmodal__window");

buttonOpen.onclick = function () {
  modelWindow.classList.add("hystmodal__active");
};

buttonClose.onclick = function () {
  modelWindow.classList.remove("hystmodal__active");
};
