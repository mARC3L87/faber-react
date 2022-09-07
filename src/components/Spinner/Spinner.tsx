import spinner from '../../assets/Eclipse-1s-200px.svg';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className='spinner'>
      <img src={spinner} alt='loading...' />
    </div>
  );
};

export default Spinner;
