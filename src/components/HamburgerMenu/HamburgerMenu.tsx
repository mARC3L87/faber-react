import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './HamburgerMenu.scss';

interface HamburgerTypes {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const HamburgerMenu = ({ open, setOpen }: HamburgerTypes) => {
  useEffect(() => {
    const onClose = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as HTMLBodyElement)) {
        setOpen(!open);
      }
    };
    document.body.addEventListener('click', onClose, { capture: true });
    return () => {
      document.body.removeEventListener('click', onClose);
    };
  }, [open, setOpen]);

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      className={`hamburger-container ${open ? 'slideIn' : 'slideOut'}`}
    >
      <FontAwesomeIcon
        onClick={() => setOpen(!open)}
        className='close'
        icon={faX}
      />
      <ul onClick={() => setOpen(!open)} className='hamburger-list'>
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
