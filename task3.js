class Product {
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}

let strNew = String.prototype  
let numNew = Number.prototype



numNew[">"] = function (value) {
  return this > value;
};
numNew["<"] = function (value) {
  return this < value;
};
numNew["="] = function (value) {
  return this == value;
};
numNew["<="] = function (value) {
  return this <= value;
};
numNew["=>"] = function (value) {
  return this >= value;
};

function filter(arr, str) {

  strNew.contains = strNew.includes;
  strNew.starts = strNew.startsWith;
  strNew.ends = strNew.endsWith;

  let cut = str.split("&");
  let filters = cut.map((item) => ({
    options: item.split(/([-\<\>\=\<=\>=])/).filter((v) =>/[^-]/.test(v)),
  })
  );
  let result = arr.filter((value) => {
    for (let fil of filters) {
      if (!value[fil.options[0]][fil.options[1]](fil.options[2])) return false;
    }
    return true;
  });

  return result;
}



  let productClasses = [
  new Product("biberfd", 2, 6, "vfsvfvfabcer"),
  new Product("fdelf", 2, 34, "gooddayabc"),
  new Product("fdzhiwagop", 21, 5, "ggbedfef"),
  new Product("Soupsers", 23, 1, "abcerf"),
  new Product("dsadasfreh", 60, 4, "defguey"),
  new Product("zverev", 124, 1655, "dasdc"),
  new Product("ghoul", 1, 5642, "buders"),
  new Product("bezdoekde", 2, 5, "buledfr"),
  new Product("adasdcds", 53, 5, "umovjofdnv"),
  new Product("Milkcdscdserfd", 414, 5, "popersabc"),
];

console.log('1 Фильтр')
console.log(filter(productClasses, "name-contains-fd&price-=2&quantity->5&description-ends-abc"))
console.log()
console.log('2 Фильтр')
console.log(filter(productClasses,'name-starts-fd&quantity-=5'))
console.log()
console.log('3 Фильтр')
console.log(filter(productClasses,'name-starts-fd'))