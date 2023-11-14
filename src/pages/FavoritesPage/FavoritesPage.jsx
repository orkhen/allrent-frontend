import React, { useState, useEffect } from 'react'
import PageNav from '../../components/Navbar/Navbar'
import PageFooter from '../../components/Footer/Footer'
import FavoritesBody from '../../components/FavoritesBody/FavoritesBody'
import SearchbarProperty from '../../components/SearchbarProperty/SearchbarProperty'

const FavoritesPage = () => {
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
    <div className='favorites-page'>
        <PageNav isLogged hideSearch />
        {windowWidth <= 768 && <SearchbarProperty />}
        <FavoritesBody />
        <PageFooter />
    </div>
  )
}

export default FavoritesPage
