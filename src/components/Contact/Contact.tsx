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
      <section className='contact-container'>
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
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2413.815079180016!2d18.0969601!3d52.77160909999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47035927e406a19b%3A0x347e5a6074771130!2sUs%C5%82ugi%20Cmentarne%20-%20Jaros%C5%82aw%20%C5%81ukomski%20-%20Faber!5e0!3m2!1spl!2spl!4v1661883280340!5m2!1spl!2spl'
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
