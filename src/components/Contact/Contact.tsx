import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import Header from '../Header/Header';
import Address from '../Address/Address';
import './Contact.scss';

const Contact = () => {
  const data = useAppSelector(selectData);
  const headerImage = data.items[9];
  const headerText = data.headers[2];
  return (
    <div>
      <Header headerImage={headerImage} headerText={headerText} />
      <section className='contact-form-container'>
        <h1>Get in touch</h1>
        <p>
          Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt neque porro quisquam est.
        </p>
        <div className='form-wrapper'>
          <form>
            <div className='form-group'>
              <input type='text' name='username' placeholder='Username' />
              <input type='email' name='email' placeholder='E-mail' />
            </div>
            <input type='text' name='subject' placeholder='Subject' />
            <textarea name='message' placeholder='Message'></textarea>
            <input type='submit' value='Send' className='btn btn-send' />
          </form>
          <div className='map-container'>
            <iframe
              className='map'
              title='faber-map'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              src={data.map}
            ></iframe>
          </div>
        </div>
      </section>
      <div className='address-section'>
        <Address />
      </div>
    </div>
  );
};

export default Contact;
