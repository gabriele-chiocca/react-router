import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SingleProduct() {
  const { id } = useParams();
  const [product, SetProduct] = useState();
  const [loader, setLoader] = useState();

  const fetchProduct = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
    });
  };
  useEffect(fetchProduct, []);

  return (
    <>
      <h1>Sono pagina {id}</h1>
    </>
  );
}
