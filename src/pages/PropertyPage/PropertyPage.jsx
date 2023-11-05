import React, { useState, useEffect } from 'react'
import PageNav from '../../components/Navbar/Navbar';
import SearchbarProperty from '../../components/SearchbarProperty/SearchbarProperty';

import './propertypage.css'
import PropertyDetailed from '../../components/PropertyDetailed/PropertyDetailed';
import BottomNav from '../../components/BottomNav/BottomNav';
import PageFooter from '../../components/Footer/Footer';

const PropertyPage = ({ isLogged }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <div>
      <PageNav isLogged={isLogged} hideBottomNav={true} />
      {windowWidth <= 768 && <SearchbarProperty/>}
      <PropertyDetailed/>
      <PageFooter/>
    </div>
  )
}

export default PropertyPage
