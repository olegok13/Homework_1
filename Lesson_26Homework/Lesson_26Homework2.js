/*. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

Функция сложения 2-х объектов-дробей;

Функция вычитания 2-х объектов-дробей;

Функция умножения 2-х объектов-дробей;

Функция деления 2-х объектов-дробей;

Функция сокращения объекта-дроби.

*/

let obj = {
    numerator1: 1,
    denominator1: 2,
    numerator2: 10,
    denominator2: 15,
  
    addition() {
      console.log(
        this.numerator1 / this.denominator1 + this.numerator2 / this.denominator2
      );
    },
  
    offtake() {
      console.log(
        this.numerator1 / this.denominator1 - this.numerator2 / this.denominator2
      );
    },
  
    multiplication() {
      console.log(
        (this.numerator1 / this.denominator1) *
          (this.numerator2 / this.denominator2)
      );
    },
    division() {
      console.log(
        this.numerator1 /
          this.denominator1 /
          (this.numerator2 / this.denominator2)
      );
    },
  
    cut() {
      let min;
  
      if (this.numerator2 > this.denominator2) {
        min = this.denominator2;
      } else {
        min = this.numerator2;
      } // i do not know, what number be bigger,
      //also i can use conditional (ternary) operator(let min = this.numerator2 > this.denominator2? this.numerator2:this.numerator2 )
  
      for (let i = min; i >= 1; i--) {
        if (this.numerator2 % i === 0 && this.denominator2 % i === 0) {
          console.log(`${this.numerator2 / i} / ${this.denominator2 / i}`);
  
          break;
        }
      }
    },
  };
  
  obj.addition();
  obj.offtake();
  obj.multiplication();
  
  obj.cut();
  