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
  console.log(itemsProperties?.category);
  return (
    <div>
      <h1>{serviceCategory.service}</h1>
      <h1>{itemsProperties?.category}</h1>
    </div>
  );
};

export default ServiceCard;
