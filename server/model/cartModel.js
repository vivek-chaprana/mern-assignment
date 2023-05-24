const cartSchema = new mongoose.Schema({
  items: Array,
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
