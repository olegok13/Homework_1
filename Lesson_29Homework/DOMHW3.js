/*
 3. Создать HTML-страницу со светофором и кнопкой, 
 которая переключает светофор на следующий цвет.
*/

let button = document.querySelector("button");
let lamp = document.querySelector("div");
button.onclick = function () {
  if (lamp.classList.contains("conteiner")) {
    lamp.classList.remove("conteiner");
    lamp.classList.add("conteiner2");
  } else if (lamp.classList.contains("conteiner2")) {
    lamp.classList.remove("conteiner2");
    lamp.classList.add("conteiner3");
  } else if (lamp.classList.contains("conteiner3")) {
    lamp.classList.remove("conteiner3");
    lamp.classList.add("conteiner");
  }
};
