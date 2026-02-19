export default function ProductCard({ product }) {
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
}
