import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../App.css';
const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://test.mybrands.az/api/v1/products/${id}`);
        if (!response.ok) {
          throw new Error("Məhsul məlumatlarını çəkmək mümkün olmadı.");
        }
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };
    fetchProduct();
  }, [id]);

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
        <div>
            {imageUrl ? (
            <img
            style={{ width: "474px" }}
            src={imageUrl}
            alt={product.title_az}/>
            ) : (<p>Şəkil mövcud deyil</p>)}    
        </div>
        <div className="product_info">
            <h1>{product.manufacturer.title}</h1> 
            <p>{product.title_az}</p>
            <p>Qiymət: {product.variations[0].actual_price} AZN</p>
        </div>
    </div>
  );
};
export default ProductCard;
