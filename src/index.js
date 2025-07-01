import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart =[];
const myWhislist = [];

console.log(" 🛒 Welcome to the shopping cart application!\n\n");


const item1 = await createItem("Apple      ", 1.99, 1);
const item2 = await createItem("Orange     ", 1.75, 3);
const item3 = await createItem("Banana     ", 0.99, 1);
const item4 = await createItem("Grapes     ", 2.50, 1);
const item5 = await createItem("Watermelon ", 3.00, 2);


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);   
await cartService.addItem(myCart, item5);   
await cartService.addItem(myWhislist, item3);   



//await cartService.deleteItem(myCart, "Banana");

await cartService.displayCart(myCart);

