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
}
interface Data {
  items: Items[];
}
export const data: Data = {
  items: [
    {
      id: 1,
      image: faber1,
      img_description: 'faber1',
    },
    {
      id: 2,
      image: faber2,
      img_description: 'faber2',
    },
    {
      id: 3,
      image: faber3,
      img_description: 'faber3',
    },
    {
      id: 4,
      image: faber4,
      img_description: 'faber4',
    },
    {
      id: 5,
      image: faber5,
      img_description: 'faber5',
    },
    {
      id: 6,
      image: faber6,
      img_description: 'faber6',
    },
    {
      id: 7,
      image: faber7,
      img_description: 'faber7',
    },
    {
      id: 8,
      image: faber8,
      img_description: 'faber8',
    },
    {
      id: 9,
      image: faber9,
      img_description: 'faber9',
    },
    {
      id: 10,
      image: faber10,
      img_description: 'faber10',
    },
    {
      id: 11,
      image: faber11,
      img_description: 'faber11',
    },
    {
      id: 12,
      image: faber12,
      img_description: 'faber12',
    },
    {
      id: 13,
      image: faber13,
      img_description: 'faber13',
    },
    {
      id: 14,
      image: faber14,
      img_description: 'faber14',
    },
  ],
};