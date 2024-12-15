import { useEffect, useState } from "react";
import styles from '../Brands.module.css';
function Brands() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://test.mybrands.az/api/v1/products/manufacturers');
        if (!response.ok) {
          throw new Error('Məlumat alınarkən xəta baş verdi');
        }
        const data = await response.json();
        console.log(data);
        const filteredProducts = data.filter((product) => product.logo_url);
        setProducts(filteredProducts);
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
    <div>
      <div className= {styles.container}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.logo_url}
              alt={product.title}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
