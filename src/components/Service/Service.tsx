import { useState, useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Service.scss';

const Service = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const time = setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 500);
    return () => {
      clearTimeout(time);
    };
  }, [loading]);

  const params = useParams();
  const data = useAppSelector(selectData);
  const headerText = params.serviceId?.replace('-', ' ');
  const headerImage = data.items[8];
  const servicePhoto = data.items.filter(
    (item) => item.category === params.serviceId
  );
  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <Header headerText={headerText} headerImage={headerImage} />
      <section className='service-container'>
        <ul>
          {data.serviceCategories.map((serviceName) => (
            <Link
              key={serviceName.id}
              onClick={() => setLoading(!loading)}
              className='service-link'
              to={`/oferta/${serviceName.service}`}
            >
              <li
                className={`service-list ${
                  serviceName.service === params.serviceId ? 'active' : ''
                }`}
              >
                {serviceName.service.replace('-', ' ')}
              </li>
            </Link>
          ))}
        </ul>
        <img
          src={servicePhoto[1]?.image}
          alt={servicePhoto[1]?.img_description}
        />
      </section>
      <section className='service-description-container'>
        <div className='service-contact'>
          <p>Phone +48 123 456 789</p>
          <p>e-mail: e-mail@email.com</p>
        </div>
        <div className='service-content'>
          <p>Handmade Fruniture</p>
          <p>
            Expound the actual teachings of the great explorer of the truth, the
            master-builder of human happiness. No one rejects, dislikes, or
            avoids pleasure itself, because it is pleasure, but because those
            who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone
            who loves or pursues or desires to obtain pain of itself,
            Occasionally circumstances occur in which toil and pain can procure
            him some great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure. because it is pleasure, but because
            those who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone
            who loves or pursues or desires to obtain pain of itself.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default Service;
