import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SingleProduct() {
  const { id } = useParams();
  const [product, SetProduct] = useState();
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        SetProduct(res.data);
        setLoader(false);
      })
      .catch((err) => {
        setError('Errore nel caricamento del prodotto');
        setLoader(false);
      });
  };

  useEffect(fetchProduct, []);

  if (loader)
    return (
      <p
        className="bg-warning-subtle p-5
"
      >
        Caricamento...
      </p>
    );
  if (error) return <p className="bg-danger p-5">{error}</p>;

  return (
    <>
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
    </>
  );
}
