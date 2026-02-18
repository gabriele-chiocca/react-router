import { NavLink } from 'react-router-dom';
import Header from '../components/header';

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <h1 className="text-light bg-dark p-5">Homepage</h1>;
    </>
  );
}
