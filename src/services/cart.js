async function addItem(userCart, item) {
  userCart.push(item);
  
}

async function deleteItem(userCart, name) {

   const index = userCart.findIndex(item => item.name === name);

    if (index === -1)
      return console.log(`Item ${name} not found in the cart.`);

      userCart.splice(index, 1);
      console.log(`Item ${name} has been removed from the cart.`);

}

async function removeItem(userCart, name) {
  
}

async function calculateTotal(userCart) {
  
  return userCart.reduce((total, item) => total + item.subTotal(), 0);

}

export { addItem, deleteItem, removeItem, calculateTotal };