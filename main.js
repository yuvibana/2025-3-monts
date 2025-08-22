
const orders = [
  {
    orderId: 1,
    items: [
      { name: "Laptop", price: 500, quantity: 1 },
      { name: "Mouse", price: 20, quantity: 2 }
    ]
  },
  {
    orderId: 2,
    items: [
      { name: "Phone", price: 300, quantity: 1 },
      { name: "Charger", price: 15, quantity: 2 }
    ]
  },
  {
    orderId: 3,
    items: [
      { name: "Tablet", price: 100, quantity: 1 },
      { name: "Keyboard", price: 40, quantity: 1 }
    ]
  }
];


function filterOrdersByValue(orders) {
  return orders.filter(order => {
    const totalValue = order.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    return totalValue > 100;
  });
}

const result = filterOrdersByValue(orders);
console.log(result);
