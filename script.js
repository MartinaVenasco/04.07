
const obj1 = {foo: 'bar'};
const obj2 = {name: 'Mio nome'};
// const obj3 = {...obj1, ...obj2};

// console.log (obj3)

const union = (a,b) => { 

 return {...a,...b}
    };
  
console.log (union(obj1,obj2))


const union2  = (a, b, valore) => {
return{...a,...b, valore} 
;};

console.log(union2(obj1, obj2, (union2.valore ='ciao')))


const myPhrases = [
"ciao, vado a dormire",
"va bene, ci rivedremo presto",
"Miaooo",
"Ciao vorrei parlarti di un problema particolare",
"ciao",
"Divertitevi",
].filter((stringa)=> {return stringa.length > 10;})

console.log (myPhrases);



		console.clear()
let shop = {

		_products: [
			{id: 1, name: 'TV', price: 40}, 
			{id: 2, name: 'Moon Lamp', price:"$10"}
		],
		get getProducts() {
		return this._products;

	  },
	  set setProducts(value) { 
		this._products=  [...this._products, value]
	  },
	};

console.log (shop.getProducts);

shop.setProducts = {id:3,name:"pc", price:"387"};

console.log(shop.getProducts);

const ListProduct = document.createElement('ul')
document.body.append(ListProduct)
ListProduct.innerText = 'PRODOTTO'
const productID =document.createElement('li')
ListProduct.append(productID)
productID.innerText= shop.getProducts[1].id
const productName =document.createElement('li')
ListProduct.append(productName)
productName.innerText= shop.getProducts[1].name
const productPrice =document.createElement('li')
ListProduct.append(productPrice)
productPrice.innerText= shop.getProducts[1].price








