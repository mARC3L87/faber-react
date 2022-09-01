import { HeaderProps } from './HeaderInterface';
import './Header.scss';

const Header = ({ headerImage, headerText }: HeaderProps) => {
  return (
    <header className='header-container'>
      <img src={headerImage.image} alt={headerImage.img_description} />
      <h1>{headerText}</h1>
    </header>
  );
};

export default Header;
