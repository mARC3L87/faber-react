import { useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  children: React.ReactNode;
}
const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const locatation = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locatation]);

  return <Fragment>{children}</Fragment>;
};

export default ScrollToTop;
