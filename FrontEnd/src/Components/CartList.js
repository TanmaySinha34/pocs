import { useEffect, useState } from "react";
import "../App.css";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div>
      {CART?.map((cartItem, cartindex) => {
        return (
          <div key={cartindex}>
            <img src={cartItem.url} width={200} height={150} />
            <span> {cartItem.name} </span>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span> {cartItem.quantity} </span>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>
            <span> Rs. {cartItem.price * cartItem.quantity} </span>
          </div>
        );
      })}

      <h2 style={{ float: "right" }}>
        {" "}
        <strong>Total</strong> <span></span>
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </h2>
    </div>
  );
}

export default CartList;
