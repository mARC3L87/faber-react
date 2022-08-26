import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import Hero from '../Hero/Hero';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Home.scss';

const Home = () => {
  const data = useAppSelector(selectData);
  const dataImages = data.items.map((item) => item);
  return (
    <Fragment>
      <header>
        <Hero />
      </header>
      <section className='intro-container'>
        <h2>Welcome To Our Workshop.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          tempor tortor eget velit porttitor, vel tincidunt ipsum rhoncus. Sed a
          augue eu eros vulputate rhoncus at et enim. Aenean accumsan ac risus
          quis placerat. Curabitur nec pellentesque sem. Integer facilisis augue
          odio, et interdum erat efficitur at. Ut risus velit.
        </p>
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
    </Fragment>
  );
};

export default Home;
