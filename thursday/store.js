catalog = [
    {name:"pencil", prices: 1.00},
    {name:"sharpener", prices: 2.00},
    {name:"tablet", prices: 3.00},
];

let cart = [];

const showCatalog = () => catalog.forEach((p,i) => console.log(i, p.name, p.price)); 
const addToCart = (product_index, qty=1)=>{cart.push({"product":catalog[product_index], "qty":qty})};
const showCart = ()=>cart.forEach((l,i) => console.log(i, l.product, l.qty));
const updateQTY = (line_index, qty) => cart[line_index].qty = qty;
const removeLine = (line_index) => cart.splice(line_index, 1)
