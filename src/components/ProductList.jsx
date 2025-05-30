import { useEffect, useState } from 'react';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://test.mybrands.az/api/v1/products/?categories=17&product__gender=3');
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
  if (loading) return <p>Məlumat yüklənir...</p>;
  if (error) return <p>Xəta: {error}</p>;
  return (
    <div className='container'>
      {products.map((product) => (
        <div key={product.id} className='card'>
          <img
            src={product.image.items[0].file}
            alt={product.product.title_az}
            className='image'/>
          <h3>{product.product.title_az}</h3>
          <p>{product.price} AZN</p>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
