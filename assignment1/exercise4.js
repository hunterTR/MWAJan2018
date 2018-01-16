let applyCoupon = (food) => (discount) => 
(item) => 
{
    item.price = item.price - item.price * discount
    return item;
}

let item = {
name: "Biscuits",
type: "food",
category: "food",
price : 2.0
}
console.log(applyCoupon("food")(0.1)(item).price === 1.8);