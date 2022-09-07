import { useState, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectData, showAlert, removeAlert } from '../../features/dataSlice';
import { FormDataTypes } from './ContactInterface';
import Header from '../Header/Header';
import Address from '../Address/Address';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
  const serviceId: string = process.env.REACT_APP_SERVICE_ID as string;
  const templateId: string = process.env.REACT_APP_TEMPLATE_ID as string;
  const publicKey: string | undefined = process.env
    .REACT_APP_PUBLIC_KEY as string;

  const data = useAppSelector(selectData);
  const alerts = data.alerts;
  const dispatch = useAppDispatch();

  const headerImage = data.items[9];
  const headerText = data.headers[2];

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
    dispatch(removeAlert([e.target.name].toString()));
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === '') {
      dispatch(showAlert('username'));
    } else {
      dispatch(removeAlert('username'));
    }
    if (email === '') {
      dispatch(showAlert('email'));
    } else {
      dispatch(removeAlert('email'));
    }
    if (subject === '') {
      dispatch(showAlert('subject'));
    } else {
      dispatch(removeAlert('subject'));
    }
    if (message === '') {
      dispatch(showAlert('message'));
    } else {
      dispatch(removeAlert('message'));
    }

    if (email === '' || message === '' || subject === '' || username === '') {
      return;
    } else {
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
    }

    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
              {alerts.username && (
                <p className='label-paragraph'>Name required!</p>
              )}
              <input
                type='email'
                name='email'
                placeholder='E-mail'
                value={email}
                onChange={onInputChange}
              />
              {alerts.email && (
                <p className='label-paragraph --email'>E-mail required!</p>
              )}
            </div>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              value={subject}
              onChange={onInputChange}
            />
            {alerts.subject && (
              <p className='label-paragraph-subject'>Subject required!</p>
            )}
            <textarea
              name='message'
              placeholder='Message'
              value={message}
              onChange={onInputChange}
            ></textarea>
            {alerts.message && (
              <p className='label-paragraph-subject'>Message required!</p>
            )}
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
    </motion.div>
  );
};

export default Contact;
