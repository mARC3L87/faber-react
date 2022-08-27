import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import Header from '../Header/Header';
import './Gallery.scss';

const Gallery = () => {
  const data = useAppSelector(selectData);
  const headerText = data.headers[1];
  const headerImage = data.items[10];
  return (
    <div>
      <Header headerImage={headerImage} headerText={headerText} />
    </div>
  );
};

export default Gallery;
