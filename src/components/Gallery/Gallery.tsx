import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import { filterByCategory, fetchGallery } from '../../features/dataSlice';
import Header from '../Header/Header';
import { motion } from 'framer-motion';
import FullscreenImage from '../FullscreenImage/FullscreenImage';
import './Gallery.scss';

const Gallery = () => {
  const [select, setSelect] = useState<string>('wszystko');
  const [modal, setModal] = useState<boolean>(false);
  const [imageId, setImageId] = useState<number | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGallery());
  }, [dispatch]);

  const data = useAppSelector(selectData);
  const headerText = data.headers[1];
  const headerImage = data.items[10];
  const searchCategories = [
    { id: 8, service: 'wszystko' },
    ...data.serviceCategories,
  ];

  const onClickCategory = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    category: string
  ) => {
    setSelect(e.currentTarget.innerText.toLowerCase());

    dispatch(filterByCategory(category));
  };

  const onClickFullImage = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    id: number
  ) => {
    setModal(!modal);
    setImageId(id);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {modal && (
        <div className='modal'>
          <FullscreenImage
            imageId={imageId}
            setModal={setModal}
            modal={modal}
          />
        </div>
      )}

      <Header headerImage={headerImage} headerText={headerText} />
      <section className='search-container'>
        <ul>
          {searchCategories.map((category) => (
            <li
              className={select === category.service ? 'active' : ''}
              onClick={(e) => onClickCategory(e, category.service)}
              key={category.id}
            >
              {category.service}
            </li>
          ))}
        </ul>
      </section>
      <section className='gallery-container'>
        {data.loadedGallery?.map((item) => (
          <div className='image-wrapper' key={item.id}>
            <img
              onClick={(e) => onClickFullImage(e, item.id)}
              src={item.image}
              alt={item.img_description}
            />
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Gallery;
