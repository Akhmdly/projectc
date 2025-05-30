import { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from '../Product.module.css';

const Children = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://test.mybrands.az/api/v1/products/?product__gender=2');
        if (!response.ok) {
          throw new Error('Məlumat alınarkən xəta baş verdi');
        }
        const data = await response.json();
        setProducts(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  if (loading) return <p>Məlumat yüklənir...</p>;
  if (error) return <p>Xəta: {error}</p>;

  return (
    <div className={styles.container}>
      {products.map((product) => {
        const id = product.product.id;
        const isFavorite = favorites.includes(id);

        return (
          <div key={id} className={styles.card}>
            <div className={styles.favoriteIcon} onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(id);
            }}>
              {isFavorite ? (
                <FaHeart color="red" size={20} />
              ) : (
                <FaRegHeart size={20} />
              )}
            </div>

            <img
              src={product.image.items[0].file}
              alt={product.product.title_az}
              className={styles.image}
              onClick={() => navigate(`/product/${id}`)}
            />

            <div>
              <p className={styles.product_title}>{product.product.title_az}</p>
              <h3>{product.price} AZN</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Children;
