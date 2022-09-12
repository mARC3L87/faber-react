import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import { Link } from 'react-router-dom';
import './FooterLinks.scss';

const FooterLinks = () => {
  const servicesData = useAppSelector(selectData);
  const { serviceCategories, address } = servicesData;

  return (
    <div className='footer-links-container'>
      <div className='footer-links-wrapper'>
        <div className='footer-col logo'>
          <h2>Faber</h2>
          <p>{address.phone}</p>
          <p>{`ul. ${address.street},`}</p>
          <p>
            {address.postal} {address.city}
          </p>
          <p>{address.email}</p>
        </div>
        <div className='footer-col useful-links'>
          <h2>Przydatne Linki</h2>
          <ul>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/oferta'>
              <li>Oferta</li>
            </Link>
            <Link to='/galeria'>
              <li>Galeria</li>
            </Link>
            <Link to='/kontakt'>
              <li>Kontakt</li>
            </Link>
          </ul>
        </div>
        <div className='footer-col services'>
          <h2>Usługi</h2>
          <ul>
            {serviceCategories.map((serviceName) => (
              <Link key={serviceName.id} to={`/oferta/${serviceName.service}`}>
                <li>{serviceName.service.replace('-', ' ')}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
