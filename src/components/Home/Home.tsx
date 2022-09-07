import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import Hero from '../Hero/Hero';
import ServiceCard from '../ServiceCard/ServiceCard';
import { motion } from 'framer-motion';
import './Home.scss';

const Home = () => {
  const data = useAppSelector(selectData);
  const introTitle = data.introContent.introTitle;
  const introText = data.introContent.introText;
  const dataImages = data.items.map((item) => item);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <header>
        <Hero />
      </header>
      <section className='intro-container'>
        <h2>{introTitle}</h2>
        <p>{introText}</p>
      </section>
      <section className='intro-services-container'>
        <div className='intro-services'>
          {data.serviceCategories.slice(0, 4).map((serviceCategory) => (
            <div key={serviceCategory.id}>
              <ServiceCard
                serviceCategory={serviceCategory}
                items={dataImages}
              />
            </div>
          ))}
        </div>
        <Link className='btn-fullOffer' to='oferta'>
          Pełna oferta
        </Link>
      </section>
      <section className='intro-gallery'>
        <div className='intro-img-first'>
          <img
            src={dataImages[12].image}
            alt={dataImages[12].img_description}
          />
          <div className='img-content'>
            <h4>Galeria zdjęć</h4>
            <Link className='img-content-link' to='galeria'>
              <p>Pokaż Wszystko</p>
            </Link>
          </div>
        </div>
        <div className='intro-img-second'>
          <img
            src={dataImages[13].image}
            alt={dataImages[13].img_description}
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
