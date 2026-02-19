import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductsPage() {
  const [products, setNewProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    next: null,
    prev: null,
  });

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
        <div className="row centercontainer">
          {products.map((product) => {
            return (
              <div className="card cardwith">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                ></img>
                <div className="card-body cardwithbody">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.price}</p>
                  <a href="#" className="btn btn-primary">
                    Scopri di più
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
