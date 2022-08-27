import { Link } from 'react-router-dom';
import './ServiceCard.scss';

interface Items {
  id: number;
  image: string;
  img_description: string;
  category: string;
}
interface ServiceCardProps {
  items: Items[];
  serviceCategory: {
    id: number;
    service: string;
  };
}

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
