import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const OfferLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Outlet />
    </motion.div>
  );
};

export default OfferLayout;
