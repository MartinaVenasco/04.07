const obj1 = { foo: "bar" };
const obj2 = { name: "Mio nome" };
// const obj3 = {...obj1, ...obj2};

// console.log (obj3)

const union = (a, b) => {
  return { ...a, ...b };
};

console.log(union(obj1, obj2));

const union2 = (a, b, valore) => {
  return { ...a, ...b, valore };
};

console.log(union2(obj1, obj2, (union2.valore = "ciao")));

const myPhrases = [
  "ciao, vado a dormire",
  "va bene, ci rivedremo presto",
  "Miaooo",
  "Ciao vorrei parlarti di un problema particolare",
  "ciao",
  "Divertitevi",
].filter((stringa) => {
  return stringa.length > 10;
});

console.log(myPhrases);

console.clear();

const getProductHTML = (product) => {
    const { name, price } = product;
    return `<li>${name} - ${price}€</li>`;
  };

const shop = {
  _products: [],
  get products() {
    return this._products;
  },
  set products(newProducts) {
    this._products = "Nuovi prodotti", newProducts;
	document.body.innerHTML = "";

	newProducts.forEach((product) => {
	  document.body.innerHTML += getProductHTML(product);
	});
  },
};

console.log(shop.products);
shop.products = [
  { id: 1, name: "TV", price: 40 },
  { id: 2, name: "PC", price: 30 },
];
