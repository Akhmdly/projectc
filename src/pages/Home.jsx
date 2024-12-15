import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Product.module.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://test.mybrands.az/api/v1/products/');
        if (!response.ok) {
          throw new Error('Məlumat alınarkən xəta baş verdi');
        }
        const data = await response.json();
        setProducts(data.results);
        console.log(data.results);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Məlumat yüklənir...</p>;
  if (error) return <p>Xəta: {error}</p>;

  return (
    <div className= {styles.container}>

      {products.map((product) => (
        <div
          key={product.id}
          className={styles.card}
          onClick={() => navigate(`/product/${product.product.id}`)}
        >
          <img
            src={product.image.items[0].file}
            alt={product.product.title_az}
            className={styles.image}
          />
          <div>
            <p className={styles.product_title}>{product.product.title_az}</p>
            <h3>{product.price} AZN</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Home;