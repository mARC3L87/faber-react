import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import Header from '../Header/Header';
import ServiceCard from '../ServiceCard/ServiceCard';
import { motion } from 'framer-motion';
import './Offer.scss';

const Offer = () => {
  const data = useAppSelector(selectData);
  const headerText = data.headers[0];
  const headerImage = data.items[11];
  const dataImages = data.items.map((item) => item);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header headerText={headerText} headerImage={headerImage} />
      <section className='offer-container'>
        <h1>{data.offerContent.offerTitle}</h1>
        <p>{data.offerContent.offerText}</p>
      </section>
      <section className='offer-gallery-container'>
        {data.serviceCategories.map((serviceCategory) => (
          <div key={serviceCategory.id}>
            <ServiceCard serviceCategory={serviceCategory} items={dataImages} />
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Offer;
