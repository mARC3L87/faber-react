import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactCardProps } from './ContactCardInterface';
import './ContactCard.scss';

const ContactCard = ({ icon, title, text }: ContactCardProps) => {
  return (
    <div className='contact-card'>
      <FontAwesomeIcon className='card-icon' icon={icon} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ContactCard;
