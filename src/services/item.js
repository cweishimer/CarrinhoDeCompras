async function createItem(name, price, quantity) {

return {
    name: name,
    price: price,
    quantity: quantity,
    subTotal: ()=> price * quantity,
  };

}

export default createItem;
