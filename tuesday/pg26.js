let cart  = [ 
    {item: "Bread", price: 3.29, quantity: 2}, 
    {item: "Milk", price: 4.09, quantity: 1}, 
    {item: "T-Bone Steak", price: 12.99, quantity: 2}, 
    {item: "Baking Potato", price: 1.89, quantity: 6}, 
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1}, 
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1}, 
    {item: "Apples", price: 0.66, quantity: 6} 
    ]; 

cart.map(i => i.item + ":\t$" + i.price).forEach(s => console.log(s)); /// can use `${} ${}`
// console.log(i.item)
cart.sort((a, b) => a.price - b.price).map(o => o.price + ":\$" + o.price).forEach(s => console.log(s));
total = cart.reduce((a, v) => (v.quantity * v.price) + a , 0);
console.log(total.toFixed(2));

cart.sort((a,b)=> a.price - b.price);
cart.forEach(p => console.log(p.item + " $ " + p.price.toFixed(2)));



////////
let addOnOptions  = [ 
    {item: "A/C", price: 1019.00}, 
    {item: "Sunroof", price: 699.99}, 
    {item: "Mud flaps", price: 299.49}, 
    {item: "Heated seats", price: 1199.99}, 
    {item: "AM/FM Stereo w/ cassette player", price: 199.00} 
]; 
 
let oneCheapOption =  addOnOptions.filter(a=> a.price <= 500);
for(i = 0; i < oneCheapOption.length; i++) {
    console.log(oneCheapOption[i].item)
}
//    addOnOptions.find((arrayValue) => arrayValue.price < 500); 
 
// if (oneCheapOption != undefined) { 
//    console.log(oneCheapOption.item +  
//                " $" + oneCheapOption.price); 
// } 
// else { 
//    console.log("No options under $500"); 
// } 


let products = [ 
    {product: "Gummy Worms", price: 5.79}, 
    {product: "Plain M&Ms", price: 2.89}, 
    {product: "Peanut M&Ms", price: 2.89}, 
    {product: "Swedish Fish", price: 3.79}, 
  
    // TODO:  fill the array with 10 candies of various 
    //        price ranges 
 ]; 

 let candy = products.filter(a => a.price <= 4.00)
    for( i = 0; i < candy.length; i++){
        console.log(candy[i].product, candy[i].price)
 };

products.filter(m => m.product.includes("M&M")).forEach(m => console.log(m.product))

// const s = "Swedish Fish"
console.log(products.filter(p => p.product === "Swedish Fish").length ? "Yes" : "no")
console.log(products.find(p=>p.product == "Swedish Fish"))
console.log(products.find(p=>p.product == "Swedish Fish") !== undefined ? "Yes" : "No")



/////////

let academyMembers = [ 
    {  
      memID: 101,  
      name: "Bob Brown",  
      films: ["Bob I", "Bob II", "Bob III", "Bob IV"]  
    }, 
    {  
      memID: 142,  
      name: "Sallie Smith",  
      films: ["A Good Day", "A Better Day"]  
    }, 
    {  
      memID: 187,  
      name: "Fred Flanders",  
      films: ["Who is Fred?", "Where is Fred?",  "What is Fred?", "Why Fred?"] 
    }, 
    {  
      memID: 203,  
      name: "Bobbie Boots",  
      films: ["Walking Boots", "Hiking Boots",  
              "Cowboy Boots"]  
    }, 
];

// academyMembers.filter(d => d.memID.includes("187")).forEach(d => console.log(d.name));
console.log( academyMembers.find(m => m.memID === 187).name);

academyMembers.filter(m => m.films.length >= 3).forEach(m => console.log(m.name))

academyMembers.filter(m => m.name.startsWith("Bob")).forEach(m =>console.log(m.name))


/////////


 
let vehicles = [ 
  { 
      color: "Silver", 
      type: "Minivan", 
      registrationState: "CA", 
      licenseNo: "ABC-101", 
      registrationExpires: new Date("3-10-2022"), 
      capacity: 7 
  }, 
  { 
      color: "Red", 
      type: "Pickup Truck", 
      registrationState: "TX", 
      licenseNo: "A1D-2NC", 
      registrationExpires: new Date("8-31-2023"), 
      capacity: 3 
  }, 
  { 
      color: "White",
      type: "Pickup Truck", 
      registrationState: "TX", 
      licenseNo: "A22-X00", 
      registrationExpires: new Date("9-31-2023"), 
      capacity: 6 
  }, 
  { 
      color: "Red", 
      type: "Car", 
      registrationState: "CA", 
      licenseNo: "ABC-222", 
      registrationExpires: new Date("12-10-2022"), 
      capacity: 5 
  }, 
  { 
      color: "Black", 
      type: "SUV", 
      registrationState: "CA", 
      licenseNo: "EEE-222", 
      registrationExpires: new Date("12-10-2021"), 
      capacity: 7 
  }, 

  { 
      color: "Red", 
      type: "SUV", 
      registrationState: "TX", 
      licenseNo: "ZZ2-101", 
      registrationExpires: new Date("5-30-2022"), 
      capacity: 5 
  }, 
  { 
      color: "White", 
      type: "Pickup Truck", 
      registrationState: "TX", 
      licenseNo: "CAC-7YT", 
      registrationExpires: new Date("1-31-2022"), 
      capacity: 5 
  }, 
  { 
      color: "White", 
      type: "Pickup Truck", 
      registrationState: "CA", 
      licenseNo: "123-ABC", 
      registrationExpires: new Date("3-31-2029"), 
      capacity: 5 
  } 
];


vehicles.filter(j => j.color.includes("Red")).forEach(j => console.log(j.color, j.type));
vehicles.filter(v => v.color.toUpperCase() === "RED").forEach(v => console.log(v.licenseNo));

vehicles.filter(v => v.registrationExpires < new Date() ).forEach(v => console.log(v.licenseNo));

vehicles.filter(v => v.capacity >= 6 ).forEach(v => console.log(v.color, v.type));

console.log(vehicles.find(v => v.licenseNo.endsWith("222"))) 
// wont work since they have two, this only works with one match


