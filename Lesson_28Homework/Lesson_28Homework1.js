/*
1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

+поле, хранящее радиус окружности;
+get-свойство, возвращающее радиус окружности;
+set-свойство, устанавливающее радиус окружности;
+get-свойство, возвращающее диаметр окружности;
+метод, вычисляющий площадь окружности;
+метод, вычисляющий длину окружности.
+Продемонстрировать работу свойств и методов. 

*/

class RadiusDescription {
  radius;

  constructor(radius) {
    this.radius = radius || 5;
  }

  get getRadius() {
    return this.radius;
  }

  set getRadius(value) {
    this.radius = value;
  }

  get getDiametr() {
    return this.radius * 2;
  }
  square = function () {
    let R = this.radius;

    let resultSquare = Math.PI * R ** 2;

    console.log(resultSquare);
  };

  round = function () {
    let R = this.radius;
    let resultRound = 2 * Math.PI * R;
    console.log(resultRound);
  };
}

let setUp = new RadiusDescription(10);
console.log(setUp.getRadius);

setUp.getRadius = 2;
console.log(setUp.getRadius);


console.log(setUp.getDiametr);

setUp.square();

setUp.round();
