import { useParams } from 'react-router-dom';

export default function SingleProduct() {
  const { id } = useParams();
  return <h1>Sono la singola page di un prodotto {id}</h1>;
}
