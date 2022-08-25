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
    </Fragment>
  );
};

export default Home;
