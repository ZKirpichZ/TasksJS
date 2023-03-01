// Было очень интересно (НО ТУТ ОЧЕНЬ "МНОГО КОСЯКОВ", ПОЖАЛУЙСТА НЕ СУДИТЕ СТРОГО).

const operation = {
  getAddition(a, b) {
    let negative = a.includes("-") && b.includes("-") ? "-" : "";
    if (!a.includes("-") && b.includes("-")) {
      a = a.replace("-", "");
      b = b.replace("-", "");
      return this.getSubtraction(a, b);
    } else if (a.includes("-") && !b.includes("-")) {
      a = a.replace("-", "");
      b = b.replace("-", "");
      return this.getSubtraction(b, a);
    }
    a = a.replace("-", "");
    b = b.replace("-", "");
    let result = [];
    let a_arr = a.split("").reverse();
    let b_arr = b.split("").reverse();
    let max = Math.max(a_arr.length, b_arr.length);

    let flag = 0;
    let i = 0;

    while (i < max || flag != 0) {
      let mas_a = a_arr[i] == undefined ? 0 : Number(a_arr[i]);
      let mas_b = b_arr[i] == undefined ? 0 : Number(b_arr[i]);
      let ind = mas_a + mas_b + flag;

      if (ind >= 10) {
        result[i] = ind - 10;
        flag = 1;
      } else {
        result[i] = ind;
        flag = 0;
      }
      i++;
    }
    return (negative + result.reverse().join(""));
  },

  //вычитание в столбик
  getSubtraction(a, b) {
    if (a.includes("-") && !b.includes("-")) {
      return this.getAddition(a, "-" + b);
    } else if (!a.includes("-") && b.includes("-")) {
      return this.getAddition(a, b);
    }
    let result = [];
    let minus = false;
    let a_arr = a.split("").reverse();
    let b_arr = b.split("").reverse();
    let max = Math.max(a_arr.length, b_arr.length);

    if (a.length < b.length) {
      [a_arr, b_arr] = [b_arr, a_arr];
      minus = true;
    } else if (a.length == b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] <= b[i]) {
          minus = true;
          [a_arr, b_arr] = [b_arr, a_arr];
          break;
        } else {
          break;
        }
      }
    }
    if (a.includes("-") && b.includes("-")) {
      a = a.replace("-", "");
      b = b.replace("-", "");
      if (minus == true) {
        return this.getSubtraction(b, a);
      } else {
        return this.getSubtraction(a, b) == "0"
          ? "0"
          : "-" + this.getSubtraction(a, b);
      }
    }

    let flag = 0;
    let i = 0;

    while (i < max || flag != 0) {
      let mas_a = a_arr[i] == undefined ? 0 : Number(a_arr[i]);
      let mas_b = b_arr[i] == undefined ? 0 : Number(b_arr[i]);
      let ind = mas_b + flag;

      if (mas_a < ind) {
        result[i] = 10 + mas_a - ind;
        flag = 1;
      } else {
        result[i] = mas_a - ind;
        flag = 0;
      }
      i++;
    }

    if (minus) {
      result.push("-");
    }

    result = result.reverse().join("").replace(/\b0+/g, "");
    return result ? result : "0";
  },

  // умножение в столбик
  getMultiplication(a, b) {
    let negative =
      a.includes("-") && !b.includes("-")
        ? "-"
        : !a.includes("-") && b.includes("-")
        ? "-"
        : "";
    a = a.replace("-", "");
    b = b.replace("-", "");

    let a_arr = a.split("").reverse();
    let b_arr = b.split("").reverse();
    let result = [];

    for (let i = 0; i < a_arr.length; i++) {
      for (let j = 0; j < b_arr.length; j++) {
        let multiply = a_arr[i] * b_arr[j];
        result[i + j] = result[i + j] ? result[i + j] + multiply : multiply;
      }
    }
    // console.log(result); для проверки что все правильно сложилось
    for (let i = 0; i < result.length; i++) {
      let num = result[i] % 10;
      let step = Math.floor(result[i] / 10);
      result[i] = num;

      if (result[i + 1]) {
        result[i + 1] += step;
      } else if (step != 0) {
        result[i + 1] = step;
      }
    }
    // console.log(result); для проверки результата
    return negative + result.reverse().join("");
  },

  getDivision(a, b) {
    if (b.length == 1 && b[0] == "0") {
      return "Не смей делить на 0";
    } else if ((a.length == 1) & (a[0] == "0")) {
      return "0";
    }
    let negative =
      a.includes("-") && !b.includes("-")
        ? "-"
        : !a.includes("-") && b.includes("-")
        ? "-"
        : "";

    a = a.replace("-", "");
    b = b.replace("-", "");
    if (a.length < b.length) {
      return "0";
    } else if (a.length == b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] < b[i]) {
          return "0";
        }
        break;
      }
    }

    let result = "";

    let index = 0;
    let step = a[index] - "0";
    while (step < b) {
      step = step * 10 + a[index + 1].charCodeAt(0) - "0".charCodeAt(0);
      index += 1;
    }
    index += 1;

    while (a.length > index) {
      result += String.fromCharCode(Math.floor(step / b) + "0".charCodeAt(0));

      step = (step % b) * 10 + a[index].charCodeAt(0) - "0".charCodeAt(0);
      index += 1;
    }
    result += String.fromCharCode(Math.floor(step / b) + "0".charCodeAt(0));

    if (result.length == 0) return "0";
    return negative + result;
  },
};

module.exports = operation
