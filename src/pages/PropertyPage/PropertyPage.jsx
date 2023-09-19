import React from 'react'
import PageNav from '../../components/Navbar/Navbar';
import SearchbarProperty from '../../components/SearchbarProperty/SearchbarProperty';

import './propertypage.css'
import PropertyDetailed from '../../components/PropertyDetailed/PropertyDetailed';

const PropertyPage = () => {
  return (
    <div>
      <PageNav/>
      <SearchbarProperty/>
      <PropertyDetailed/>
    </div>
  )
}

export default PropertyPage
