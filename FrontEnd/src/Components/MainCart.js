import "./MainCart.css";
import Header from "./Header";
import ProductList from "./ProductList";
import CartList from "./CartList";
import { useState } from "react";
import Data from "../shared/constant/constantData";

function MainCart() {
  const [product, setProduct] = useState([
    {
      url: Data.burger,
      name: "Burger",
      category: "Snacks",
      seller: "McD",
      price: 199,
    },
    {
      url: Data.dnut,
      name: "Doracake",
      category: "Cake",
      seller: "Flurys",
      price: 299,
    },
    {
      url: Data.cheesecake,
      name: "Blueberry",
      category: "Cake",
      seller: "Flurys",
      price: 500,
    },
    {
      url: Data.ccupcake,
      name: "Almond Joy",
      category: "Cupcake",
      seller: "Flurys",
      price: 400,
    },
    {
      url: Data.snwtch,
      name: "Sandwitch",
      category: "Snacks",
      seller: "Mio A More",
      price: 200,
    },
    {
      url: Data.icrm,
      name: "Ice Cream",
      category: "Dessert",
      seller: "McD",
      price: 100,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>

      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={product} addToCart={addToCart}></ProductList>
      )}
    </div>
  );
}
export default MainCart;
