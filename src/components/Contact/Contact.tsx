import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import Header from '../Header/Header';
import './Contact.scss';

const Contact = () => {
  const data = useAppSelector(selectData);
  const headerImage = data.items[9];
  const headerText = data.headers[2];
  return (
    <div>
      <Header headerImage={headerImage} headerText={headerText} />
    </div>
  );
};

export default Contact;
