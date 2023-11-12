import React from 'react'
import PageNav from '../../components/Navbar/Navbar'
import PageFooter from '../../components/Footer/Footer'
import FavoritesBody from '../../components/FavoritesBody/FavoritesBody'

const FavoritesPage = () => {
  return (
    <div className='favorites-page'>
        <PageNav isLogged hideSearch />
        <FavoritesBody />
        <PageFooter />
    </div>
  )
}

export default FavoritesPage
