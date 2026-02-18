import Header from '../components/header';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductsPage() {
  const [products, setNewProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  return (
    <>
      <h1 className="text-light bg-dark mt-5">Products</h1>;
    </>
  );
}
