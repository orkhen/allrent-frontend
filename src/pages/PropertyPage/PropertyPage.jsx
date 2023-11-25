import React, { useState, useEffect, useContext } from 'react'
import PageNav from '../../components/Navbar/Navbar';
import SearchbarProperty from '../../components/SearchbarProperty/SearchbarProperty';

import './propertypage.css'
import PropertyDetailed from '../../components/PropertyDetailed/PropertyDetailed';
import BottomNav from '../../components/BottomNav/BottomNav';
import PageFooter from '../../components/Footer/Footer';
import { AppContext } from '../../App';

import { PropertyProvider } from '../../components/PropertyDetailed/PropertyContext';

const PropertyPage = () => {
  const { windowWidth } = useContext(AppContext)
  console.log(windowWidth)
  return (
    <div>
      <PageNav hideBottomNav={true} />
      {windowWidth <= 768 && <SearchbarProperty/>}

      <PropertyProvider>
        <PropertyDetailed/>
      </PropertyProvider>

      <PageFooter/>
    </div>
  )
}

export default PropertyPage
