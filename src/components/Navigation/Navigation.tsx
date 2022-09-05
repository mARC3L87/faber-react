import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navigation.scss';

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div className='nav-container'>
      <nav className='navigation'>
        <Link className='logo-link' to='/'>
          <h1 className='logo'>Faber</h1>
        </Link>
        <div className='hamburger'>
          <FontAwesomeIcon
            onClick={(e) => onOpen(e)}
            className='bars'
            icon={faBars}
          />
          {open && <HamburgerMenu open={open} setOpen={setOpen} />}
        </div>
        <ul className='link-list'>
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
