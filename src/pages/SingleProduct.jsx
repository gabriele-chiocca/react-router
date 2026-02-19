import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SingleProduct() {
  const { id } = useParams();
  const [product, SetProduct] = useState();
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.data || !res.data.id) {
          navigate('/404');
          return;
        }
        console.log(res.data);
        SetProduct(res.data);
        setLoader(false);
      })
      .catch((err) => {
        setError('Errore nel caricamento del prodotto' + err);
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
