/*
1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

 + -Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
 + -Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
    необходимо увеличивать количество в существующей покупке, а не добавлять новую.
 + -Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
*/

let listArrey = [
  new listBuy("girl", 2, false),
  new listBuy("naruto", 6, false),
  new listBuy("mop", 3, true),
  new listBuy("vaseline", 15, false),
];

function listBuy(name, count, ready) {
  this.name = name || "";
  this.count = count || 0;
  this.ready = ready || false;
}

function logListBuy(list) {
  list.forEach(function ({ name, count, ready }) {
    console.log(`--------------------`);
    console.log(name);
    console.log(count);
    console.log(ready);
    console.log(`--------------------`);
  });
}
// logListBuy(listArrey);

function logBuy(list) {
  let filterdListNotBuy = list.filter(function (obj) {
    return obj.ready === false;
  });
  logListBuy(filterdListNotBuy);

  let filterdListBuy = list.filter(function (obj) {
    return obj.ready === true;
  });
  logListBuy(filterdListBuy);
}

// logBuy(listArrey);

let newObj = new listBuy("mop", 2, true);

// addNewObj(listArrey, newObj);
// function addNewObj(arry, newObject) {
//   let storedValue;
//   arry.forEach(function (element) {
//     if (element.name === newObject.name) {
//       element.count += newObject.count;
//       storedValue = element.count;
//     }
//   });
//   if (!storedValue) {
//     arry.push(newObject);
//   }
// }

// addNewObj(listArrey, newObj);
// logListBuy(listArrey);

function buy(arry, name) {
  arry.forEach(function (element) {
    if (element.name === name && element.ready === false) {
      element.ready = true;
    }
  });
}
buy(listArrey, "vaseline");
logListBuy(listArrey);
