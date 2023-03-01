// 1.1 Задание
function getText(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// 1.2 Задание
function getSpace(str) {
  str = str
      .trim()
      .replace(/\s*([,.!?:;]+)(?!\s*$)\s*/g, '$1 ')
      .replace(/\s+/g, ' ');
    if (str.slice(-2, -1) == ' ') {
      str = str.slice(0, -2) + str.slice(-1);
    }
    return str;
}


// 1.3 Задание
function getLengthWord(str) {
  return getSpace(str).split(" ").length; // надеюсь текст без лишних пробелов и одиночых знаков без пробелов:D
}



// 1.4 Задание (намудрил я тут, сделав по условию)
function getCountUnicWords(str) {
  let text = str
    .toLowerCase()
    .replace(/[.,!?:;()]/g, "")
    .split(" "); // с регулярками проще
  let words = new Set(text);
  let result = new Map();
  let fullResult = "";
  for (let word of words) {
    let count = text.filter((el) => el == word).length;
    result.set(word, count);
  }
  for (let key of result.keys()) {
    let num = result.get(key).toString();
    nuinu = !(['11','12','13','14'].includes(num.slice(-2))) && (num.slice(-1) < 5 && num.slice(-1) > 1) ? "раза" : "раз";
    fullResult += `"${key}" - ${num} ${nuinu}, `;
  }
  return fullResult.slice(0, -2) + ".";
}

module.exports = {getText, getSpace, getLengthWord, getCountUnicWords}

