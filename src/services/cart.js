async function addItem(userCart, item) {
  userCart.push(item);
}

async function createItens(userCart, items) {
  for (const item of items) {
    await addItem(userCart, item);
  }
  
  return userCart;
}

async function deleteItem(userCart, name) {

   const index = userCart.findIndex(item => item.name === name);

    if (index === -1)
      return console.log(`Item ${name} not found in the cart.`);

      userCart.splice(index, 1);
      console.log(`Item ${name} has been removed from the cart.`);

}

async function removeItem(userCart, item) {
 
  const indexFound = userCart.findIndex((p) => p.name === item.name);
  
  if (indexFound === -1) {
    return console.log(`Item ${item.name} not found in the cart.`);
  }

  if(userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity --;
    return console.log(`Item ${userCart[indexFound].name} quantity decreased by 1.`);
  }

  if(userCart[indexFound].quantity === 1) {
    return deleteItem(userCart, userCart[indexFound].name);
  }

}

async function displayCart(userCart) {

  if (userCart.length === 0) {
    displayMessage("Your cart is empty.");
    return;
  }

  console.log("Your cart items:\n");
  console.log("  | Name        | Price x Quant  | SubTotal");
  userCart.forEach((item, index) => {
    
    displayMessage(`${index + 1} | ${item.name} | R$ ${item.price.toFixed(2)} x ${item.quantity}    | SubTotal $${item.subTotal().toFixed(2)}`);

  });

  return displayMessage(await calculateTotal(userCart));

}

async function displayMessage(message) {
  if (!message) {
    message = "";
  }
  console.log("-----------------------------------------------");
  console.log(message);
  
}

async function calculateTotal(userCart) {
  
  if (userCart.length != 0) {
    return displayMessage(`Total Cart: R$ ${userCart.reduce((total, item) => total + item.subTotal(), 0)}`);
  }
  
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart, displayMessage };