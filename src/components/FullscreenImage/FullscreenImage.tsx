import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './FullscreenImage.scss';

interface FullscreenProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FullscreenImage = ({ setModal, modal }: FullscreenProps) => {
  return (
    <div className='fullscreen-container'>
      <FontAwesomeIcon
        className='close'
        onClick={() => setModal(!modal)}
        icon={faX}
      />
    </div>
  );
};

export default FullscreenImage;
