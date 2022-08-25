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

interface Items {
  id: number;
  image: string;
  img_description: string;
  category: string;
}
interface ServiceCategories {
  id: number;
  service: string;
}
interface Data {
  serviceCategories: ServiceCategories[];
  items: Items[];
}
export const data: Data = {
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
      category: 'service-1',
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
      category: 'service-2',
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
      category: 'service-6',
    },
  ],
};
