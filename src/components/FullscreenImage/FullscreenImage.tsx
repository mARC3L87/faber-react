import { useState, useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faX,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import './FullscreenImage.scss';

interface FullscreenProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  imageId: number | null;
}

const FullscreenImage = ({ setModal, modal, imageId }: FullscreenProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const galleryData = useAppSelector(selectData).loadedGallery;
  const clickedImage = galleryData?.find((image) => image.id === imageId)!;

  useEffect(() => {
    const findFirstIndex = galleryData?.indexOf(clickedImage);
    if (typeof findFirstIndex === 'number') {
      if (clickedImage) {
        setCurrentIndex(findFirstIndex);
      }
    }
  }, [clickedImage, galleryData]);

  const onRightClick = () => {
    currentIndex === galleryData?.length! - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  const onLeftClick = () => {
    currentIndex === 0
      ? setCurrentIndex(galleryData?.length! - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className='fullscreen-container'>
      <div className='fullscreen-image'>
        <FontAwesomeIcon
          className='close'
          onClick={() => setModal(!modal)}
          icon={faX}
        />
        {clickedImage && (
          <img src={clickedImage?.image} alt={clickedImage?.img_description} />
        )}

        {
          <img
            src={galleryData?.[currentIndex].image}
            alt={galleryData?.[currentIndex].img_description}
          />
        }

        <div className='btn-wrapper'>
          <FontAwesomeIcon
            icon={faAnglesLeft}
            onClick={onLeftClick}
            className='btn btn-left'
          />
          <FontAwesomeIcon
            icon={faAnglesRight}
            onClick={onRightClick}
            className='btn btn-right'
          />
        </div>
      </div>
    </div>
  );
};

export default FullscreenImage;
