import React from 'react'
import PageNav from '../../components/Navbar/Navbar';
import SearchbarProperty from '../../components/SearchbarProperty/SearchbarProperty';

import './propertypage.css'
import PropertyDetailed from '../../components/PropertyDetailed/PropertyDetailed';
import BottomNav from '../../components/BottomNav/BottomNav';
import PageFooter from '../../components/Footer/Footer';

const PropertyPage = () => {
  return (
    <div>
      <PageNav/>
      <SearchbarProperty/>
      <PropertyDetailed/>
      <PageFooter/>
      <BottomNav/>
    </div>
  )
}

export default PropertyPage
