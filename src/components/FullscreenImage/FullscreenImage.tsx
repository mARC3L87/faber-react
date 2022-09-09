import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './FullscreenImage.scss';

interface FullscreenProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  imageId: number | null;
}

const FullscreenImage = ({ setModal, modal, imageId }: FullscreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryData = useAppSelector(selectData).loadedGallery;

  const clickedImage = galleryData?.find((image) => image.id === imageId);
  console.log(clickedImage);
  const onRightClick = () => {};

  return (
    <div className='fullscreen-container'>
      <div className='fullscreen-image'>
        <FontAwesomeIcon
          className='close'
          onClick={() => setModal(!modal)}
          icon={faX}
        />
        <img src={clickedImage?.image} alt={clickedImage?.img_description} />
        <div className='btn-wrapper'>
          <button className='btn btn-left'>left</button>
          <button onClick={() => onRightClick()} className='btn btn-right'>
            right
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullscreenImage;
