import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './HamburgerMenu.scss';

interface HamburgerTypes {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const HamburgerMenu = ({ open, setOpen }: HamburgerTypes) => {
  const onClose = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(!open);
    console.log('click');
  };
  return (
    <div className={`hamburger-container ${open ? 'slideIn' : 'slideOut'}`}>
      <FontAwesomeIcon
        onClick={(e) => onClose(e)}
        className='close'
        icon={faX}
      />
      <ul className='hamburger-list'>
        <NavLink to='/' className='nav-link'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/oferta' className='nav-link'>
          <li>Oferta</li>
        </NavLink>
        <NavLink to='/galeria' className='nav-link'>
          <li>Galeria</li>
        </NavLink>
        <NavLink to='/kontakt' className='nav-link'>
          <li>Kontakt</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
