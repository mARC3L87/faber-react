import { Data } from './DataInterface';
import faber1 from '../assets/faber-1.png';
import faber2 from '../assets/faber-2.png';
import faber3 from '../assets/faber-3.png';
import faber4 from '../assets/faber-4.png';
import faber5 from '../assets/faber-5.png';
import faber6 from '../assets/faber-6.png';
import faber7 from '../assets/faber-7.png';
import faber8 from '../assets/faber-8.png';
import faber9 from '../assets/faber-9.png';
import faber10 from '../assets/faber-10.png';
import faber11 from '../assets/faber-11.png';
import faber12 from '../assets/faber-12.png';
import faber13 from '../assets/faber-13.png';
import faber14 from '../assets/faber-14.png';

export const data: Data = {
  status: 'idle',
  loading: false,
  address: {
    phone: '+48 123 456 789',
    email: 'email@mail.com',
    city: 'Janikowo',
    postal: '88-160',
    street: ' Przyjezierna 13',
  },
  map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2413.815079180016!2d18.0969601!3d52.77160909999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47035927e406a19b%3A0x347e5a6074771130!2sUs%C5%82ugi%20Cmentarne%20-%20Jaros%C5%82aw%20%C5%81ukomski%20-%20Faber!5e0!3m2!1spl!2spl!4v1661883280340!5m2!1spl!2spl',
  introContent: {
    introTitle: 'Welcome To Our Workshop.',
    introText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor tortor eget velit porttitor, vel tincidunt ipsum rhoncus. Sed a augue eu eros vulputate rhoncus at et enim. Aenean accumsan ac risus quis placerat. Curabitur nec pellentesque sem. Integer facilisis augue odio, et interdum erat efficitur at. Ut risus velit.',
  },
  offerContent: {
    offerTitle: 'what we do',
    offerText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor tortor eget velit porttitor, vel tincidunt ipsum rhoncus. Sed a augue eu eros vulputate rhoncus at et enim. Aenean accumsan ac risus quis placerat. Curabitur nec pellentesque sem. Integer facilisis augue odio, et interdum erat efficitur at. Ut risus velit.',
  },
  headers: ['oferta', 'galeria', 'kontakt'],
  serviceCategories: [
    {
      id: 1,
      service: 'service-1',
    },
    {
      id: 2,
      service: 'service-2',
    },
    {
      id: 3,
      service: 'service-3',
    },
    {
      id: 4,
      service: 'service-4',
    },
    {
      id: 5,
      service: 'service-5',
    },
    {
      id: 6,
      service: 'service-6',
    },
    {
      id: 7,
      service: 'service-7',
    },
  ],
  items: [
    {
      id: 1,
      image: faber1,
      img_description: 'faber1',
      category: 'service-1',
    },
    {
      id: 2,
      image: faber2,
      img_description: 'faber2',
      category: 'service-1',
    },
    {
      id: 3,
      image: faber3,
      img_description: 'faber3',
      category: 'service-6',
    },
    {
      id: 4,
      image: faber4,
      img_description: 'faber4',
      category: 'service-2',
    },
    {
      id: 5,
      image: faber5,
      img_description: 'faber5',
      category: 'service-2',
    },
    {
      id: 6,
      image: faber6,
      img_description: 'faber6',
      category: 'service-7',
    },
    {
      id: 7,
      image: faber7,
      img_description: 'faber7',
      category: 'service-3',
    },
    {
      id: 8,
      image: faber8,
      img_description: 'faber8',
      category: 'service-3',
    },
    {
      id: 9,
      image: faber9,
      img_description: 'faber9',
      category: 'service-4',
    },
    {
      id: 10,
      image: faber10,
      img_description: 'faber10',
      category: 'service-4',
    },
    {
      id: 11,
      image: faber11,
      img_description: 'faber11',
      category: 'service-5',
    },
    {
      id: 12,
      image: faber12,
      img_description: 'faber12',
      category: 'service-5',
    },
    {
      id: 13,
      image: faber13,
      img_description: 'faber13',
      category: 'service-6',
    },
    {
      id: 14,
      image: faber14,
      img_description: 'faber14',
      category: 'service-7',
    },
  ],
  loadedGallery: null,
  alerts: {
    username: false,
    subject: false,
    message: false,
    email: false,
  },
  message: {
    type: '',
    msg: '',
  },
};
