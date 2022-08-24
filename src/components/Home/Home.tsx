import { Fragment } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import Hero from '../Hero/Hero';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Home.scss';

const Home = () => {
  const data = useAppSelector(selectData);
  console.log(data);
  const dataImages = data.items.map((item) => item);
  console.log(dataImages);
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
      <section className='intro-services'>
        {data.serviceCategories.slice(0, 4).map((serviceCategory) => (
          <div key={serviceCategory.id}>
            <ServiceCard serviceCategory={serviceCategory} items={dataImages} />
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default Home;
