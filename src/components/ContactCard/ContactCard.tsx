import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactCard.scss';

interface ContactCardProps {
  icon: IconProp;
  title: string;
  text: string;
}
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
