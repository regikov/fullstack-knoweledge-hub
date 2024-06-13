// Create a JavaScript object named cart representing a shopping cart.
// Add properties such as items (an array of objects representing items in the cart), total (the total cost of items), and addItem (a method for adding items to the cart).
// Implement the addItem method to add items to the cart array and update the total cost.
// Test the addItem method by adding sample items to the cart
// and displaying the updated cart object.


let cart = {
    items: [],
    total: 0
  };
  
  function addItem(itemName, itemPrice) {
    let newItem = {
      name: itemName,
      price: itemPrice
    };
    
    cart.items.push(newItem);
    cart.total += itemPrice;
  }
  
  addItem('catfood', 5);
  
  console.log(cart);
  









