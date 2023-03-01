const func = require("./task1.js");

// 1
console.log("Решение 1 задачи.");
console.log(func.getText("я хОчУ КуШАть!"));
console.log();

// 2
console.log("Решение 2 задачи.");
console.log(
  func.getSpace(`Вот  пример строки,в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно.
  Если есть лишние подряд идущие пробелы, они должны быть устранены.`)
);
console.log();

// 3
console.log("Решение 3 задачи.");
console.log(func.getLengthWord(`  Вот пример строки , в которой     используются знаки препинания .`));
console.log();

// 4
console.log("Решение 4 задачи.");
console.log(
  func.getCountUnicWords(
    `Текст, в котором слово текст несколько раз встречается и слово тоже`
  )
);
console.log();
