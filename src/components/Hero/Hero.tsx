import { Link } from 'react-router-dom';
import './Hero.scss';
import faber1 from '../../assets/faber-2.png';

const Hero = () => {
  return (
    <header className='hero-container'>
      <img src={faber1} alt='hero-img' />
      <div className='hero-content'>
        <h1>Quality Wooden Products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem dolore nemo porro harum illum obcaecati, enim ex itaque
          tempora saepe expedita distinctio quae esse eius nulla eum sint
          laborum fugiat?
        </p>
        <Link to='oferta' className='btn-offer'>
          Oferta
        </Link>
      </div>
    </header>
  );
};

export default Hero;
