import { ServiceCardProps } from './ServiceCardInterface';
import { Link } from 'react-router-dom';
import './ServiceCard.scss';

const ServiceCard = ({ serviceCategory, items }: ServiceCardProps) => {
  const itemsProperties = items.find(
    (item) => item.category === serviceCategory.service
  );
  return (
    <div className='card-wrapper'>
      <Link
        className='img-service-link'
        to={`/oferta/${serviceCategory.service}`}
      >
        <img
          src={itemsProperties?.image}
          alt={itemsProperties?.img_description}
        />
      </Link>

      <Link className='category-link' to={`/oferta/${serviceCategory.service}`}>
        <p>{serviceCategory.service}</p>
      </Link>
    </div>
  );
};

export default ServiceCard;
