import React, { useState, useEffect, useContext } from 'react'
import PageNav from '../../components/Navbar/Navbar'
import PageFooter from '../../components/Footer/Footer'
import FavoritesBody from '../../components/FavoritesBody/FavoritesBody'
import SearchbarProperty from '../../components/SearchbarProperty/SearchbarProperty'
import { AppContext } from '../../App'

import './favoritesPage.css'

const FavoritesPage = () => {
  const { windowWidth } = useContext(AppContext)
  return (
    <div className='favorites-page'>
        <PageNav hideSearch />
        {windowWidth <= 768 && <SearchbarProperty />}
        <FavoritesBody />
        <PageFooter />
    </div>
  )
}

export default FavoritesPage
