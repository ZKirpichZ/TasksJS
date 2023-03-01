const func = require("./task2.js");


console.log('Сложение');
console.log(func.getAddition("-12", "30"));
console.log(func.getAddition("5440000004444", "1111110000001"));
console.log(func.getAddition("-10000000000000000000003427829387483297489230742322", "5003213213210000000003427829387483297489230742322"));
console.log();

console.log('Вычитание');
console.log(func.getSubtraction("20000000000000000000000000000000000000000000000000", "1232132132131232132132132131231231"));
console.log(func.getSubtraction("-1230232928149018492141242142142142142142141", "-654654654645646654654654654654654"));
console.log(func.getSubtraction("-4", "3"));
console.log();

console.log('Умножение');
console.log(func.getMultiplication("-200000000000000000000000000000005", "-332132132132132132132132132"));
console.log(func.getMultiplication("-123123123", "65656565"));
console.log(func.getMultiplication("21742891742174021974892107421", "42098634569068940869054654"));
console.log();

// ЕСТЬ погрешности
console.log('Деление');
console.log(func.getDivision("5050505050505050505050505050", "-25"));
console.log(func.getDivision("200000000000000005", "200000000000000005"));
console.log(func.getDivision("2983421048219084921421421", "0"));

