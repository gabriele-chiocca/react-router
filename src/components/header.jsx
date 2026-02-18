import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="bg-light mb-3 p-3 d-flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
      </header>
    </>
  );
}
