import { NavLink, Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className='nav-container'>
      <nav className='navigation'>
        <Link className='logo-link' to='/'>
          <h1 className='logo'>Faber</h1>
        </Link>
        <ul>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
            to='/'
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
            to='/oferta'
          >
            <li>Oferta</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
            to='/galeria'
          >
            <li>Galeria</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
            to='/kontakt'
          >
            <li>Kontakt</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
