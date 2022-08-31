import { useState, useRef } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import Header from '../Header/Header';
import Address from '../Address/Address';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {
  const serviceId: string = process.env.REACT_APP_SERVICE_ID as string;
  const templateId: string = process.env.REACT_APP_TEMPLATE_ID as string;
  const publicKey: string | undefined = process.env
    .REACT_APP_PUBLIC_KEY as string;

  const data = useAppSelector(selectData);
  const headerImage = data.items[9];
  const headerText = data.headers[2];

  interface FormDataTypes {
    username: string;
    email: string;
    subject: string;
    message: string;
  }
  const [formData, setFormData] = useState<FormDataTypes>({
    username: '',
    email: '',
    subject: '',
    message: '',
  });
  const { username, email, subject, message } = formData;

  const formRef = useRef<HTMLFormElement | null>(null);

  const onInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === '' || subject === '' || message === '' || email === '') {
      return;
    }
    if (formRef.current === null) {
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
    console.log(formData);
  };

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
          <form ref={formRef} onSubmit={formSubmit}>
            <div className='form-group'>
              <input
                type='text'
                name='username'
                placeholder='Username'
                value={username}
                onChange={onInputChange}
              />
              <input
                type='email'
                name='email'
                placeholder='E-mail'
                value={email}
                onChange={onInputChange}
              />
            </div>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              value={subject}
              onChange={onInputChange}
            />
            <textarea
              name='message'
              placeholder='Message'
              value={message}
              onChange={onInputChange}
            ></textarea>
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
