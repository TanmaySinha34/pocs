import "../App.css";

function ProductList({ product, addToCart }) {
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => {
        return (
          <div style={{ width: "33%" }} key={productIndex}>
            <div className="product-item">
              <img src={productItem.url} width="100%" height="250px" />
              <p>
                {productItem.name} | {productItem.category}{" "}
              </p>
              <p> {productItem.seller} </p>
              <p> Rs. {productItem.price} /-</p>
              <button
                className="btn btn-outline-primary"
                onClick={() => addToCart(productItem)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
