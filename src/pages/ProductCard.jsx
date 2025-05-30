import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "../App.css";
import { useBasket } from "../context/BasketContext";

const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const { addToBasket } = useBasket();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://test.mybrands.az/api/v1/products/${id}`);
        if (!response.ok) {
          throw new Error("Məhsul məlumatlarını çəkmək mümkün olmadı.");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const toggleFavorite = () => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const handleAddToBasket = () => {
    addToBasket(product);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const isFavorite = favorites.includes(id);

  if (loading) return <p>Məlumat yüklənir...</p>;
  if (error) return <p>Xəta: {error}</p>;

  const variationWithImage = product.variations.find(
    (variation) => variation.image?.items?.length > 0
  );

  const imageUrl = variationWithImage
    ? variationWithImage.image.items[0].file
    : null;

  return (
    <div className="product_card">
      <div style={{ position: "relative" }}>
        {imageUrl ? (
          <img style={{ width: "474px" }} src={imageUrl} alt={product.title_az} />
        ) : (
          <p>Şəkil mövcud deyil</p>
        )}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={toggleFavorite}
        >
          {isFavorite ? <FaHeart size={24} color="red" /> : <FaRegHeart size={24} />}
        </div>
      </div>

      <div className="product_info">
        <h1>{product.manufacturer.title}</h1>
        <p style={{ fontWeight: "bold", fontSize: "30px", margin: "20px 0" }}>
          {product.title_az}
        </p>
        <p style={{ fontSize: "25px", margin: "20px 0" }}>
          Qiymət: {product.variations[0].actual_price} AZN
        </p>
        <button onClick={handleAddToBasket}>Səbətə əlavə et</button>

        {showNotification && (
          <div className="notification">
            ✅ Məhsul səbətə əlavə olundu!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
