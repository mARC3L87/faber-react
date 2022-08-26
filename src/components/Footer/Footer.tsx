import './Footer.scss';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className='footer-container'>
      <p>Faber &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
