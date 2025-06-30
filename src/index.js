import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart =[];
const myWhislist = [];

console.log(" 🛒 Welcome to the shopping cart application!");

const item1 = await createItem("Apple", 1.99, 1);
const item2 = await createItem("Orange", 1.75, 2);
const item3 = await createItem("Banana", 1.00, 3);
const item4 = await createItem("Grapes", 2.50, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWhislist, item2);
await cartService.addItem(myCart, item3);

await cartService.deleteItem(myCart, item1 .name);



console.log("Your cart items:");
console.log(cartService.calculateTotal(myCart));

