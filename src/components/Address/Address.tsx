import ContactCard from '../ContactCard/ContactCard';
import { selectData } from '../../features/dataSlice';
import { useAppSelector } from '../../app/hooks';
import {
  faLocationDot,
  faMobileScreen,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import './Address.scss';

const Address = () => {
  const addressData = useAppSelector(selectData).address;
  const { email, phone, postal, street, city } = addressData;
  const streetAddress = `ul. ${street},\n${postal} ${city}`;
  const phoneNumber = `Phone: ${phone}`;
  return (
    <section className='contact-container'>
      <div className='contact-wrapper'>
        <ContactCard
          icon={faLocationDot}
          title='Meet Us'
          text={streetAddress}
        />
        <ContactCard icon={faMobileScreen} title='Call Us' text={phoneNumber} />
        <ContactCard icon={faEnvelope} title='Mail Us' text={email} />
      </div>
    </section>
  );
};

export default Address;
