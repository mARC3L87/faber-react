import './Home.scss';
import Hero from '../Hero/Hero';
import { Fragment } from 'react';

const Home = () => {
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
    </Fragment>
  );
};

export default Home;
