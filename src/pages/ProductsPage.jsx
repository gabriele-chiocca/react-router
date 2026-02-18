import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductsPage() {
  const [products, setNewProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setNewProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Errore nel caricamento dei prodotti');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1 className="text-center text-light bg-primary mt-5 p-5">Products</h1>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3">
                <div key={product.id}>
                  <h3>{product.title}</h3>
                  <img src={product.image} alt={product.title} width="100" />
                  <p>{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
