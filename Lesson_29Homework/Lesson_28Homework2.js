/* Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

+поле, которое хранит цвет маркера;
+поле, которое хранит количество чернил в маркере (в процентах);
+метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, 
+пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
+Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

Продемонстрировать работу написанных методов. 
*/

class SimpleMarker {
  color;
  amountInk;
  constructor(color, amountInk) {
    this.color = color || "blue";
    this.amountInk = amountInk || 100;
  }

  print(text) {
    for (let i = 0; i <= text.length; i++) {
      if (this.amountInk < 0.5) {
        break;
      }
      if (text[i] !== " ") {
        this.printLetter(text[i]);
      }
    }
  }

  printLetter(a) {
    this.amountInk = this.amountInk - 0.5;

    console.log(a);
  }
}

class Refillable extends SimpleMarker {
  refill() {
    this.amountInk = 100;
  }
}

let value = new Refillable("gold", 10);

console.log(value.amountInk);
value.print("ця залупа стала зрозумілою");
console.log(value.amountInk);
value.refill();
console.log(value.amountInk);

// let color = new SimpleMarker("red", 10);
// console.log(color.amountInk);
// color.print("ця залупа стала зрозумілою");

// console.log(color.amountInk);
