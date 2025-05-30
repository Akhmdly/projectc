import { useBasket } from "../context/BasketContext";

const Basket = () => {
const { basket, increaseQuantity, decreaseQuantity, removeFromBasket } = useBasket();

  const handleConfirmBasket = () => {
    alert("Səbət təsdiqləndi!");
  };

  if (basket.length === 0) {
    return <p className="empty">Səbət boşdur.</p>;
  }
  const totalBasketPrice = basket.reduce((total, product) => {
    const unitPrice = product.variations[0].actual_price;
    return total + unitPrice * product.quantity;
  }, 0);

  return (
    <div style={{ margin: "50px" }}>
      <h1>Sizin səbətiniz</h1>
      {basket.map((product, index) => {
        const variationWithImage = product.variations.find(
          (variation) => variation.image?.items?.length > 0
        );
        const imageUrl = variationWithImage
          ? variationWithImage.image.items[0].file
          : null;
        const unitPrice = product.variations[0].actual_price;
        const totalPrice = unitPrice * product.quantity;

        return (
          <div key={index} style={{ display: "flex", marginBottom: "20px" }}>
            {imageUrl && (
              <img
                src={imageUrl}
                alt={product.title_az}
                style={{ width: "200px", objectFit: "cover", marginRight: "10px" }}
              />
            )}
            <div style={{ margin: "30px"}}>
              <h3 style={{ margin: "20px 0", color: "#7a5f5f" }}>{product.title_az}</h3>
              <div style={{ margin: "20px 0" }}>
                <span style={{ fontWeight: "bold" }}>Say: </span>
                <button className="ascd" onClick={() => decreaseQuantity(index)}>-</button>
                <span style={{ margin: "0 10px" }}>{product.quantity}</span>
                <button className="ascd" onClick={() => increaseQuantity(index)}>+</button>
              </div>
              <p>
                <span style={{ fontWeight: "bold" }}>Qiymət: </span>
                {totalPrice.toFixed(2)} AZN
              </p>
              <button className="delete-product" onClick={() => removeFromBasket(index)}>sil</button>
            </div>
          </div>
        );
      })}

      <div style={{ fontSize: "18px", fontWeight: "bold", marginTop: "30px", color: "#333" }}>
        Ümumi məbləğ: {totalBasketPrice.toFixed(2)} AZN
      </div>

      <button className="confirm-btn" onClick={handleConfirmBasket}>
        Səbəti Təsdiqlə
      </button>
    </div>
  );
};

export default Basket;
