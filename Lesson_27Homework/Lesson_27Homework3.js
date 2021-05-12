/*4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, 
для которого она предназначена. Написать несколько функций для работы с ним^

+Вывод на экран всех аудиторий;
+Вывод на экран аудиторий для указанного факультета;
+Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия,
 количества студентов и названия факультета;
+Функция сортировки аудиторий по количеству мест;
+Функция сортировки аудиторий по названию (по алфавиту).
*/

function Auditory(name = "", placesCount = 10, faculty = "") {
  this.name = name;
  this.placesCount = placesCount;
  if (placesCount < 10) {
    this.placesCount = 10;
  }
  if (placesCount > 20) {
    this.placesCount = 20;
  }
  this.faculty = faculty;
}

function Group(name = "", studentsCount = 0, faculty = "") {
  this.name = name;
  this.studentsCount = studentsCount;
  this.faculty = faculty;
}

let auditoryArray = [
  new Auditory("№1", 13, "ГНПФ"),
  new Auditory("№2", 15, "ГНПФ"),
  new Auditory("№3", 19, "АНІМЕ"),
  new Auditory("№4", 16, "АНІМЕ"),
  new Auditory("№5", 19, "НГП"),
];

function log(auditoriees) {
  auditoriees.forEach(function ({ name, placesCount, faculty }) {
    console.log(`-----------------------------------------------`);
    console.log(`аудиторія: ${name}`);
    console.log(`кількість місць: ${placesCount}`);
    console.log(`факультет: ${faculty}`);
    console.log(`-----------------------------------------------`);
  });

  // for (let i = 0; i < auditoriees.length; i++) {
  // let {name, placesCount, faculty} = auditoriees[i];
  //   console.log(`-----------------------------------------------`);
  //   console.log(`аудиторія: ${auditoriees[i].name}`);
  //   console.log(`кількість місць: ${auditoriees[i].placesCount}`);
  //   console.log(`факультет: ${auditoriees[i].faculty}`);
  //   console.log(`-----------------------------------------------`);
  // }
}

function logForFaculty(auditoriees, faculty) {
  let filterdAuditories = auditoriees.filter(function (auditory, index) {
    // console.log(auditory,index);
    return auditory.faculty === faculty;
  });
  if (filterdAuditories.length > 0) {
    log(filterdAuditories);
  } else {
    console.log(`Немає такої аудиторії для факультету`);
  }
}

// log(auditoryArray);
// logForFaculty(auditoryArray, "ГНПФ");

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log(
//   numbers.filter(function (number) {
//     return number === 0 % 2;
//   })
// );

let groupNB111 = new Group("NB111", 14, "ГНПФ");
let groupANIME = new Group("ANIME", 19, "АНІМЕ");

function logForGroup(auditoriees, group) {
  let filterdStudentsCount = auditoriees.filter(function (auditory) {
    return (
      auditory.placesCount >= group.studentsCount &&
      auditory.faculty === group.faculty
    );
  });
  if (filterdStudentsCount.length > 0) {
    log(filterdStudentsCount);
  } else {
    console.log(`Підходящої аудиторій немає`);
  }
}

// logForGroup(auditoryArray, groupANIME);

// auditoryArray.sort(function(auditory1,auditory2){
//   if (auditory1.placesCount > auditory2.placesCount){
//     return 1;
//   }
//   return -1;
// });

auditoryArray.sort(function(prev,next){
  if (prev.name > next.name){
    return 1;
  }
  return -1;
});
console.log(auditoryArray)