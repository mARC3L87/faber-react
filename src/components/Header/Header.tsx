import './Header.scss';

interface HeaderProps {
  headerText: string | undefined;
  headerImage: {
    id?: number;
    image: string;
    img_description: string;
    category?: string;
  };
}
const Header = ({ headerImage, headerText }: HeaderProps) => {
  return (
    <header className='header-container'>
      <img src={headerImage.image} alt={headerImage.img_description} />
      <h1>{headerText}</h1>
    </header>
  );
};

export default Header;
